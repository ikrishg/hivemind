import type { MDXContent } from "mdx/types";
import {
  postEntries,
  type PostMdxMetadata,
} from "@/content/posts/registry";

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
  Component: MDXContent;
}

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  return String(value ?? "");
}

function normalizeMeta(
  slug: string,
  metadata: PostMdxMetadata,
  readingTime: number,
  Component: MDXContent,
): Post {
  return {
    slug,
    title: String(metadata.title ?? slug),
    description: String(metadata.description ?? ""),
    date: toISODate(metadata.date),
    cover: metadata.cover ? String(metadata.cover) : undefined,
    coverAlt: metadata.coverAlt ? String(metadata.coverAlt) : undefined,
    tags: Array.isArray(metadata.tags) ? metadata.tags.map(String) : undefined,
    featured: Boolean(metadata.featured),
    draft: Boolean(metadata.draft),
    readingTime,
    Component,
  };
}

function allPosts(): Post[] {
  return postEntries.map(({ slug, metadata, readingTime, Component }) =>
    normalizeMeta(slug, metadata, readingTime, Component),
  );
}

export function getAllPosts(): PostListItem[] {
  return allPosts()
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
  const entry = postEntries.find((post) => post.slug === slug);
  if (!entry) return null;

  const post = normalizeMeta(
    entry.slug,
    entry.metadata,
    entry.readingTime,
    entry.Component,
  );
  return post.draft ? null : post;
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
