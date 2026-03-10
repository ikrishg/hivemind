// ─── Experience ───────────────────────────────────────────────────────────────

export type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type MonthYear = `${Month} ${number}`;

export interface Experience {
  /** URL-safe slug used as the route param and markdown file name */
  id: string;
  /** Job title / role */
  title: string;
  company: string;
  dateStart: MonthYear;
  dateEnd: MonthYear | 'Present';
  /** Optional image URLs shown in a grid on the detail page */
  images?: string[];
  /** Short multiline bullet-point summary shown in the hover/tap popover */
  shortDescription: string;
  // Full prose is loaded at runtime from content/experience/[id].md
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'company',
    title: 'Software Engineer',
    company: 'Company',
    dateStart: 'Jan 2024',
    dateEnd: 'Present',
    shortDescription: `• Built and shipped features used by thousands of users\n• Improved core API response times by 40%\n• Led migration to TypeScript across the frontend codebase`,
  },
  {
    id: 'previous-company',
    title: 'Software Engineer Intern',
    company: 'Previous Company',
    dateStart: 'Jun 2023',
    dateEnd: 'Aug 2023',
    shortDescription: `• Worked on the developer tooling platform\n• Contributed to open-source internal libraries\n• Collaborated with senior engineers on system design`,
  },
];
