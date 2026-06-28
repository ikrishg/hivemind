import fs from "node:fs";
import path from "node:path";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { imageSize } from "image-size";

function localImageDims(src: string): { width: number; height: number } {
  if (src.startsWith("/")) {
    try {
      const buffer = fs.readFileSync(path.join(process.cwd(), "public", src));
      const { width, height } = imageSize(buffer);
      if (width && height) return { width, height };
    } catch {
      // fall back to a sensible default below
    }
  }
  return { width: 1600, height: 900 };
}

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-12 mb-2 font-serif text-2xl tracking-tight sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 font-serif text-xl sm:text-2xl">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 font-sans leading-relaxed text-foreground/85">
      {children}
    </p>
  ),
  a: ({ href, children }) => {
    const external = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="underline decoration-1 decoration-foreground/30 underline-offset-4 transition-colors duration-200 hover:decoration-foreground/70"
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-5 font-sans leading-relaxed text-foreground/85 marker:text-foreground/35">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-5 font-sans leading-relaxed text-foreground/85 marker:text-foreground/45">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-foreground/25 pl-5 font-serif text-lg italic text-foreground/70">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-foreground/12" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  code: ({ className, children }) => {
    const isBlock = /\blanguage-/.test(className ?? "");
    if (isBlock) {
      return (
        <code className={`font-mono text-sm ${className ?? ""}`}>
          {children}
        </code>
      );
    }
    return (
      <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[0.85em]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-xl bg-foreground/[0.06] p-5 font-mono text-sm leading-relaxed ring-1 ring-foreground/10">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => {
    if (typeof src !== "string") return null;
    const { width, height } = localImageDims(src);
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 768px"
        style={{ maxWidth: width }}
        className="mx-auto my-8 h-auto w-full rounded-xl ring-1 ring-foreground/10"
      />
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
