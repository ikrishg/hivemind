// ─── About page sections ──────────────────────────────────────────────────────
// ABOUT_SECTIONS is an ordered array of content blocks that compose the /about page.
// Each section is either "markdown" (prose) or "gallery" (image grid).

export interface AboutMarkdownSection {
  type: "markdown"
  content: string
}

export interface AboutGalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface AboutGallerySection {
  type: "gallery"
  images: AboutGalleryImage[]
}

export type AboutSection = AboutMarkdownSection | AboutGallerySection

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    type: "markdown",
    content: `Full-stack engineer with a background in building developer tools and web infrastructure. I care about code clarity, good abstractions, and shipping things that matter.

Open source enthusiast — everything I've ever achieved is credited to open source. I write about DevOps, Git, Linux, and web development at blog.krishg.com.`,
  },
  {
    type: "gallery",
    images: [
      { src: "/about/placeholder-1.jpg", alt: "A photo", caption: "Caption here" },
      { src: "/about/placeholder-2.jpg", alt: "Another photo" },
    ],
  },
  {
    type: "markdown",
    content: `When I'm not building things, I'm reading, hiking, or obsessing over my terminal config. I believe the best software comes from people who genuinely care about the details.`,
  },
]
