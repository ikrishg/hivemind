import { ImageResponse } from "next/og";

export const alt =
  "Krish Gupta - I live in paradoxes, and wish to live lives as if I'm trying on different clothes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BACKGROUND = "#faf6ef";
const FOREGROUND = "#4e4b46";

const NAME = "Krish Gupta";
const TAGLINE =
  "I live in paradoxes, and wish to live lives as if I'm trying on different clothes.";
const EYEBROW = "krishg.com";

// Pull only the glyphs we actually render so the subset stays tiny. Requesting
// with no browser User-Agent makes Google Fonts return a TTF, which Satori can
// parse (it cannot read WOFF2).
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer | null> {
  try {
    const query = `${family.replace(/ /g, "+")}:wght@${weight}`;
    const url = `https://fonts.googleapis.com/css2?family=${query}&text=${encodeURIComponent(
      text,
    )}`;
    const css = await (await fetch(url)).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (src?.[1]) {
      const res = await fetch(src[1]);
      if (res.ok) return await res.arrayBuffer();
    }
  } catch {
    // Fall back to the ImageResponse default font rather than failing the route.
  }
  return null;
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  const text = `${NAME} ${TAGLINE} ${EYEBROW}`;

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  }[] = [];

  const [serif, sans] = await Promise.all([
    loadGoogleFont("Bodoni Moda", 700, text),
    loadGoogleFont("Lexend", 400, text),
  ]);

  if (serif) {
    fonts.push({ name: "Bodoni Moda", data: serif, weight: 700, style: "normal" });
  }
  if (sans) {
    fonts.push({ name: "Lexend", data: sans, weight: 400, style: "normal" });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "100px",
          backgroundColor: BACKGROUND,
          color: FOREGROUND,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Lexend",
            fontSize: 28,
            letterSpacing: 2,
            color: "rgba(78, 75, 70, 0.55)",
          }}
        >
          {EYEBROW}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bodoni Moda",
              fontWeight: 700,
              fontSize: 148,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {NAME}
          </div>

          <div
            style={{
              display: "flex",
              width: 96,
              height: 3,
              marginTop: 44,
              marginBottom: 44,
              backgroundColor: "rgba(78, 75, 70, 0.3)",
            }}
          />

          <div
            style={{
              display: "flex",
              fontFamily: "Lexend",
              fontSize: 40,
              lineHeight: 1.35,
              maxWidth: 960,
              color: "rgba(78, 75, 70, 0.8)",
            }}
          >
            {TAGLINE}
          </div>
        </div>

        <div style={{ display: "flex" }} />
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    },
  );
}
