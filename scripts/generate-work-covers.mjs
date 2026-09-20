import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 900;

/** @type {Array<{ file: string; title: string; subtitle: string; accent: string; background: string }>} */
const covers = [
  {
    file: "cover-reseter-lead.webp",
    title: "reseter.css",
    subtitle: "Modern CSS reset · open source",
    accent: "#2f4acb",
    background: "#f3f0ea",
  },
  {
    file: "cover-reseter-tile.webp",
    title: "reseter.css",
    subtitle: "Production CSS reset",
    accent: "#2f4acb",
    background: "#ece8e0",
  },
  {
    file: "cover-bot-dc-htm.webp",
    title: "bot-dc-htm",
    subtitle: "Discord economy bot",
    accent: "#e8876f",
    background: "#f0ece6",
  },
  {
    file: "cover-fastn-workshop.webp",
    title: "fastn workshop",
    subtitle: "Hands-on starter · GitHub Pages",
    accent: "#6eb5e8",
    background: "#eef1f4",
  },
  {
    file: "cover-sema.webp",
    title: "Sema",
    subtitle: "Code-review education · DevRel",
    accent: "#2f4acb",
    background: "#ece9f2",
  },
  {
    file: "cover-playlistwise.webp",
    title: "Playlistwise",
    subtitle: "React & Next.js product work",
    accent: "#6eb5e8",
    background: "#eef0ec",
  },
  {
    file: "cover-devocado.webp",
    title: "Devocado",
    subtitle: "Fractional DevRel for API & AI startups",
    accent: "#b8a9d9",
    background: "#f0edf2",
  },
  {
    file: "cover-sudans-tech.webp",
    title: "Sudan's Tech",
    subtitle: "Student-led nonprofit · backend",
    accent: "#b8a9d9",
    background: "#f1eef4",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSvg({ title, subtitle, accent, background }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="paper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${background}" />
      <stop offset="55%" stop-color="#f8f6f1" />
      <stop offset="100%" stop-color="${background}" />
    </linearGradient>
    <radialGradient id="ink-wash" cx="18%" cy="82%" r="58%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.12" />
      <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="ink-wash-2" cx="88%" cy="16%" r="42%">
      <stop offset="0%" stop-color="#141414" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#141414" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#paper)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ink-wash)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ink-wash-2)" />
  <line x1="96" y1="${HEIGHT - 96}" x2="${WIDTH - 96}" y2="${HEIGHT - 96}" stroke="#141414" stroke-opacity="0.12" />
  <circle cx="120" cy="132" r="10" fill="${accent}" />
  <text x="144" y="142" fill="#141414" fill-opacity="0.42" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="6">PROJECT</text>
  <text x="96" y="360" fill="#141414" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" letter-spacing="-2">${escapeXml(title)}</text>
  <text x="98" y="430" fill="#141414" fill-opacity="0.62" font-family="Arial, Helvetica, sans-serif" font-size="34" letter-spacing="0.5">${escapeXml(subtitle)}</text>
</svg>`;
}

const assetsDir = path.join(process.cwd(), "src/assets");
await fs.promises.mkdir(assetsDir, { recursive: true });

for (const cover of covers) {
  const svg = buildSvg(cover);
  const outputPath = path.join(assetsDir, cover.file);
  await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(outputPath);
  console.log(`Wrote ${cover.file}`);
}
