import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Rust MDX compiler — bundles post content at compile time instead of
  // relying on fs.readdirSync, which Turbopack workers omit on Vercel.
  experimental: {
    mdxRs: {
      mdxType: "gfm",
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
