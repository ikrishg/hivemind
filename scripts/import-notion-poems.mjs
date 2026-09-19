#!/usr/bin/env node
/**
 * Parse Notion MCP fetch responses and write src/content/poems/*.md
 * Reads JSON array from stdin: [{ "text": "<notion fetch text>", ... }, ...]
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src/content/poems");

function slugify(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFetch(text) {
  const titleMatch = text.match(/"Name":"([^"]+)"/);
  const dateMatch = text.match(/"date:Written:start":"([^"]+)"/);
  const contentMatch = text.match(/<content>\n([\s\S]*?)\n<\/content>/);
  if (!titleMatch || !dateMatch || !contentMatch) {
    throw new Error(`Failed to parse poem from fetch text`);
  }
  const body = contentMatch[1]
    .replace(/<empty-block\/>/g, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const title = titleMatch[1];
  const excerpt =
    body.split("\n").find((l) => l.trim())?.slice(0, 120) ?? title;
  return { title, written: dateMatch[1], content: body, excerpt };
}

const input = JSON.parse(
  await new Promise((resolve, reject) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => { data += c; });
    process.stdin.on("end", () => resolve(data));
    process.stdin.on("error", reject);
  }),
);

mkdirSync(outDir, { recursive: true });
const slugs = new Set();

for (const entry of input) {
  const poem = parseFetch(entry.text);
  let slug = slugify(poem.title);
  if (slugs.has(slug)) slug = `${slug}-${poem.written}`;
  slugs.add(slug);

  const md = `---
title: "${poem.title.replace(/"/g, '\\"')}"
description: "${poem.excerpt.replace(/"/g, '\\"')}"
date: ${poem.written}
tags:
  - poem
cover: ~assets/poems.webp
---

${poem.content}
`;
  writeFileSync(join(outDir, `${slug}.md`), md);
  console.log(`wrote ${slug}.md`);
}

console.log(`Imported ${input.length} poems.`);
