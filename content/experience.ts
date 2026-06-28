export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  start: string;
  end: string;
  highlights: string[];
  link?: ExperienceLink;
}

export const experience: ExperienceEntry[] = [
  {
    role: "SDE Intern",
    company: "PlaylistWise (12LPAClub)",
    start: "Jul 2023",
    end: "Sep 2023",
    highlights: [
      "Built 15+ functional UI/UX designs in React and Next.js.",
      "Integrated Supabase Postgres into a dynamic CRUD application.",
      "Oversaw deployments on PaaS platforms like Appwrite and Netlify.",
      "Mentored closely by Akshay Narisetti, Founder of Pocket (YC W26).",
    ],
  },
  {
    role: "Program Management Intern",
    company: "Sema Software",
    start: "May 2022",
    end: "Sep 2022",
    highlights: [
      "Ran Sema's global ambassador program of 12 ambassadors teaching code reviews.",
      "Sustained a community of 1,000+ code reviewers with regular engagement sessions.",
      "Worked directly with founder Matt Van Italie, a Harvard Law School alum.",
    ],
    link: {
      label: "Letter of recommendation",
      href: "https://cdn.krish.pics/sema-lor",
    },
  },
];
