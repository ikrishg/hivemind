import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import {
  defineConfig,
  fontProviders,
  logHandlers,
  svgoOptimizer,
} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://krishg.com',
  integrations: [partytown(), sitemap()],

  adapter: cloudflare({
    imageService: 'compile',
  }),

  image: {
    layout: 'constrained',
  },

  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Zodiak',
      cssVariable: '--font-zodiak',
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    clientPrerender: true,
    svgOptimizer: svgoOptimizer(),
    queuedRendering: { enabled: true },
    rustCompiler: true,
    logger: logHandlers.console({ level: 'debug' }),
  },
});
