import { getAllPosts } from "@/content/posts";
import { externalPosts } from "@/content/external-posts";

// A single row in the writing lists. Local posts link internally to /p/[slug];
// external posts link off-site to their source publication.
export type WritingEntry =
  | {
      kind: "internal";
      slug: string;
      title: string;
      date: string;
      featured: boolean;
    }
  | {
      kind: "external";
      url: string;
      source: string;
      title: string;
      date: string;
      featured: boolean;
    };

function byDateDesc(a: WritingEntry, b: WritingEntry): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

// Local + external writing, merged and sorted newest-first.
export function getAllWriting(): WritingEntry[] {
  const internal: WritingEntry[] = getAllPosts().map((post) => ({
    kind: "internal",
    slug: post.slug,
    title: post.title,
    date: post.date,
    featured: Boolean(post.featured),
  }));

  const external: WritingEntry[] = externalPosts.map((post) => ({
    kind: "external",
    url: post.url,
    source: post.source,
    title: post.title,
    date: post.date,
    featured: Boolean(post.featured),
  }));

  return [...internal, ...external].sort(byDateDesc);
}

// Curated "best" writing for the home page, newest-first.
export function getFeaturedWriting(limit = 5): WritingEntry[] {
  return getAllWriting()
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function writingKey(entry: WritingEntry): string {
  return entry.kind === "internal" ? `/p/${entry.slug}` : entry.url;
}
