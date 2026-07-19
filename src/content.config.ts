import { defineCollection, type SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articleSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),

  cover: image(),

  tags: z.array(z.string()).optional(),

  draft: z.boolean().default(false),
  canonical: z.url().optional(),
});

const externalArticleSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),

  cover: image(),

  tags: z.array(z.string()).optional(),

  url: z.url(),
});

const articles = {
  articles: defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),

    schema: articleSchema,
  }),

  externalArticles: defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{yml,yaml}" }),

    schema: externalArticleSchema,
  }),

  poems: defineCollection({
    loader: glob({ base: "./src/content/poems", pattern: "**/*.{md,mdx}" }),

    schema: articleSchema,
  }),

  externalPoems: defineCollection({
    loader: glob({ base: "./src/content/poems", pattern: "**/*.{yml,yaml}" }),

    schema: externalArticleSchema,
  }),

  essays: defineCollection({
    loader: glob({ base: "./src/content/essays", pattern: "**/*.{md,mdx}" }),

    schema: articleSchema,
  }),

  externalEssays: defineCollection({
    loader: glob({ base: "./src/content/essays", pattern: "**/*.{yml,yaml}" }),

    schema: externalArticleSchema,
  }),
};

export const collections = { ...articles };
