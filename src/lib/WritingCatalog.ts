import { getCollection } from "astro:content";
import { site } from "~shared";

export type WritingKind = "article" | "essay" | "poem";

export type WritingPiece = {
  title: string;
  description: string;
  date: Date;
  href: string;
  external: boolean;
  tags: string[];
  kind: WritingKind;
};

export class WritingCatalog {
  static async load(): Promise<WritingPiece[]> {
    const [
      articles,
      externalArticles,
      essays,
      externalEssays,
      poems,
      externalPoems,
    ] = await Promise.all([
      getCollection("articles", ({ data }) => !data.draft).catch(() => []),
      getCollection("externalArticles").catch(() => []),
      getCollection("essays", ({ data }) => !data.draft).catch(() => []),
      getCollection("externalEssays").catch(() => []),
      getCollection("poems", ({ data }) => !data.draft).catch(() => []),
      getCollection("externalPoems").catch(() => []),
    ]);

    const pieces: WritingPiece[] = [
      ...articles.map((article) => ({
        title: article.data.title,
        description: article.data.description,
        date: article.data.date,
        href: new URL(`/p/${article.id}`, site).href,
        external: false,
        tags: article.data.tags ?? ["article"],
        kind: "article" as const,
      })),
      ...externalArticles.map((article) => ({
        title: article.data.title,
        description: article.data.description,
        date: article.data.date,
        href: String(article.data.url),
        external: true,
        tags: article.data.tags ?? ["article"],
        kind: "article" as const,
      })),
      ...essays.map((essay) => ({
        title: essay.data.title,
        description: essay.data.description,
        date: essay.data.date,
        href: new URL(`/p/${essay.id}`, site).href,
        external: false,
        tags: essay.data.tags ?? ["essay"],
        kind: "essay" as const,
      })),
      ...externalEssays.map((essay) => ({
        title: essay.data.title,
        description: essay.data.description,
        date: essay.data.date,
        href: String(essay.data.url),
        external: true,
        tags: essay.data.tags ?? ["essay"],
        kind: "essay" as const,
      })),
      ...poems.map((poem) => ({
        title: poem.data.title,
        description: poem.data.description,
        date: poem.data.date,
        href: new URL(`/p/${poem.id}`, site).href,
        external: false,
        tags: poem.data.tags ?? ["poem"],
        kind: "poem" as const,
      })),
      ...externalPoems.map((poem) => ({
        title: poem.data.title,
        description: poem.data.description,
        date: poem.data.date,
        href: String(poem.data.url),
        external: true,
        tags: poem.data.tags ?? ["poem"],
        kind: "poem" as const,
      })),
    ];

    return pieces.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  static async recent(limit: number): Promise<WritingPiece[]> {
    const pieces = await WritingCatalog.load();
    return pieces.filter((piece) => piece.kind !== "poem").slice(0, limit);
  }

  static groupByYear(pieces: WritingPiece[]) {
    const years = Array.from(new Set(pieces.map((piece) => piece.date.getFullYear()))).sort(
      (a, b) => b - a,
    );

    return years.map((year) => ({
      year,
      pieces: pieces.filter((piece) => piece.date.getFullYear() === year),
    }));
  }
}
