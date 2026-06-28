export type LinkKind = "internal" | "external" | "mail";

export interface SiteLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export const links: SiteLink[] = [
  { label: "Email", href: "mailto:send@krishg.com", kind: "mail" },
  { label: "GitHub", href: "https://github.com/kkrishguptaa", kind: "external" },
  { label: "X", href: "https://x.com/krishstrucktech", kind: "external" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kkrishguptaa", kind: "external" },
  { label: "Writing", href: "/posts", kind: "internal" },
];
