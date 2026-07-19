// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://krishg.com",
  output: "static",

  integrations: [sitemap(), mdx(), react()],

  adapter: vercel({
    imageService: false,
    devImageService: "sharp",
  }),

  image: {
    layout: "constrained",
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bodoni Moda",
      cssVariable: "--font-bodoni-moda",
      fallbacks: ["Montserrat", "Poppins", "sans-serif"],
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      optimizedFallbacks: false,
      display: "swap",
    },
    {
      provider: fontProviders.google(),
      name: "Lexend",
      cssVariable: "--font-lexend",
      fallbacks: ["Inter", "sans-serif"],
      weights: ["400 700"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      display: "swap",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      noExternal: ["react-tweet"]
    }
  },

  experimental: {
    contentIntellisense: true,
  },
});