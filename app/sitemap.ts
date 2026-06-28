import type { MetadataRoute } from "next";
import { getAllPosts } from "@/content/posts";

const BASE_URL = "https://krishg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // getAllPosts() is sorted newest-first, so the first entry doubles as the
  // freshness signal for the home and writing index pages.
  const latest = posts[0]?.date ? new Date(posts[0].date) : new Date();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/p/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: latest,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: latest,
    },
    ...postEntries,
  ];
}
