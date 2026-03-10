export interface Article {
  title: string;
  excerpt: string;
  href: string;
  date: string;
}

const RSS_URL = 'https://blog.krishg.com/rss.xml';

interface NextRequestInit extends RequestInit {
  next?: { revalidate?: number; tags?: string[] };
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16)),
    );
}

function extractTag(xml: string, tag: string): string {
  const cdata = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
    'i',
  ).exec(xml);
  if (cdata) return decodeEntities(cdata[1]?.trim() ?? '');

  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(
    xml,
  );
  return decodeEntities(plain?.[1]?.trim() ?? '');
}

function extractItems(xml: string): string[] {
  const items: string[] = [];
  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    if (match[1]) items.push(match[1]);
  }
  return items;
}

function formatDate(raw: string): string {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
    } as NextRequestInit);

    if (!res.ok) return [];

    const xml = await res.text();

    const articles = extractItems(xml).map((item) => ({
      title: extractTag(item, 'title'),
      excerpt: extractTag(item, 'description'),
      href: extractTag(item, 'link'),
      _rawDate: extractTag(item, 'pubDate'),
      date: '',
    }));

    articles.sort(
      (a, b) => new Date(b._rawDate).getTime() - new Date(a._rawDate).getTime(),
    );

    return articles.map(({ _rawDate, ...rest }) => ({
      ...rest,
      date: formatDate(_rawDate),
    }));
  } catch {
    return [];
  }
}
