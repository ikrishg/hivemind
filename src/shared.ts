import { site as astroSite, base } from 'astro:config/server'

export const title = "Krish Gupta";
export const description =
  'Engineer, Builder, Sidequester, Formerly worked as a DevREL & a SDE – Shipped reseter.css (1.2k github stars) at 12 — Started coding at 10 to build WordPress Plugins';
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
    draft?: boolean;
    footerOnly?: boolean;
  }[];
}[] = [
    {
      group: null,
      items: [
        { label: "Work", href: "/work", draft: true },
        { label: "Papers", href: "/papers", draft: true },
        { label: "Biography", href: "/bio", draft: true },
        { label: "Timeline", href: "/timeline", draft: true, footerOnly: true },
        { label: "Coverage", href: "/coverage", draft: true, footerOnly: true },
      ],
    },
    {
      group: "Creation",
      items: [
        { label: "Articles", href: "/articles" },
        { label: "Essays", href: "/essays" },
        { label: "Poems", href: "/poems", draft: true },
        { label: "Culture", href: "/culture", draft: true, footerOnly: true },
        { label: "Musings", href: "/musings", draft: true, footerOnly: true },
      ],
    },
  ];
