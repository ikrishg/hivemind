import { site as astroSite, base } from 'astro:config/server'

export const title = "Krish Gupta";
export const description =
  'Engineer, builder, sidequester. Shipped reseter.css at 12 (~1,240 GitHub stars, ~5M+ jsDelivr requests/year). Started coding at 10. Building agentic AI and developer tooling now.';
export const site = new URL(base, astroSite) || new URL('https://krishg.com')
export const author = "Krish Gupta";

export const socials = {
  x: "https://x.com/kkrishguptaa",
  instagram: "https://instagram.com/kkrishguptaa",
  linkedin: "https://linkedin.com/in/kkrishguptaa",
  substack: "https://koldovstvo.substack.com",
  github: "https://github.com/kkrishguptaa",
  email: "mailto:send@krishg.com",
} as const;

export const navigations: {
  group: string | null;
  items: {
    label: string;
    href: string;
    footerOnly?: boolean;
  }[];
}[] = [
  {
    group: null,
    items: [
      { label: "Work", href: "/work" },
      { label: "Writing", href: "/writing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:send@krishg.com", footerOnly: true },
    ],
  },
];
