// ─── Projects / Work ──────────────────────────────────────────────────────────

export interface Project {
  name: string
  /** One-liner summary shown on the cards / list views */
  shortDescription: string
  /** Optional callout shown on the detail page (e.g. "archived", "WIP", "open source") */
  notice?: string
  deployedUrl?: string
  sourceUrl?: string
  devlogsUrl?: string
  /** Markdown prose loaded for the /work/[slug] detail page */
  content?: string
}

export const PROJECTS: Project[] = [
  {
    name: "Hivemind",
    shortDescription:
      "A monorepo template with Next.js, Tailwind CSS, and a shared component library — designed for rapid product development.",
    sourceUrl: "https://github.com/kkrishguptaa/hivemind",
  },
  {
    name: "Apollo",
    shortDescription:
      "Personal blog and writing platform built with Astro — home to articles on DevOps, Linux, Git, and open source.",
    sourceUrl: "https://github.com/kkrishguptaa/apollo",
    deployedUrl: "https://blog.krishg.com",
  },
  {
    name: "Project Three",
    shortDescription: "Brief description of what this project does and why it matters.",
    notice: "Work in progress",
  },
]
