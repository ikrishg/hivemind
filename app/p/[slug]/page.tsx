import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPostBySlug } from "@/content/posts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Not found | Krish Gupta" };

  return {
    title: `${post.title} | Krish Gupta`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-6 pt-12 pb-24 sm:pt-16">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 font-sans text-sm text-foreground/60 transition-colors duration-200 hover:text-foreground"
          >
            <span aria-hidden="true">&larr;</span> Writing
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-3 font-sans text-sm text-foreground/55">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
            </div>

            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 max-w-prose font-sans text-lg leading-relaxed text-foreground/70">
              {post.description}
            </p>
          </header>

          <div className="mt-12 text-[1.05rem]">
            <post.Component />
          </div>

          <div className="mt-16 border-t border-foreground/12 pt-8">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 font-sans text-sm text-foreground/60 transition-colors duration-200 hover:text-foreground"
            >
              <span aria-hidden="true">&larr;</span> All writing
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
