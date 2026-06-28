import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
  coverAlt?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}

export interface PostListItem extends PostMeta {
  readingTime: number;
}

export interface Post extends PostListItem {
  body: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readingTimeFromBody(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// YAML parses unquoted dates (e.g. `2024-01-31`) into Date objects.
function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  return String(value ?? "");
}

function parseFile(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: toISODate(data.date),
    cover: data.cover ? String(data.cover) : undefined,
    coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    readingTime: readingTimeFromBody(content),
    body: content,
  };
}

function allSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostListItem[] {
  return allSlugs()
    .map(parseFile)
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post): PostListItem => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        cover: post.cover,
        coverAlt: post.coverAlt,
        tags: post.tags,
        featured: post.featured,
        readingTime: post.readingTime,
      }),
    );
}

export function getPostBySlug(slug: string): Post | null {
  if (!allSlugs().includes(slug)) return null;
  try {
    const post = parseFile(slug);
    return post.draft ? null : post;
  } catch {
    return null;
  }
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
