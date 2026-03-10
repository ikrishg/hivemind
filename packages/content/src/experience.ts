import { type MonthYear, monthYearToDate } from './util';

export interface Experience {
  title: string;
  company: string;
  dateStart: MonthYear;
  dateEnd: MonthYear | 'Present';

  images?: string[];

  shortDescription: string;

  content?: string;
}

export const experiences: readonly Experience[] = [
  {
    title: 'SDE Intern',
    company: 'PlaylistWise (12LPAClub)',
    dateStart: 'Jul 2023',
    dateEnd: 'Sep 2023',
    shortDescription: `
• Built 15+ UI/UX functional designs in ReactJS and NextJS
• Integrated Supabase Postgres to a dynamic CRUD application.
• Oversaw deployment on PAAS platforms like Appwrite and Netlify
• Mentored closely by Akshay Narisetti, Founder, Pocket (YC W26)
`,
  },
  {
    title: 'Program Management Intern',
    company: 'Sema Software',
    dateStart: 'May 2022',
    dateEnd: 'Sep 2022',
    shortDescription: `
• Managed Sema's global ambassador program of 12 global ambassadors to educate young people on code reviews.
• Maintained the Sema community of 1k+ code reviewers and conducted regular sessions to sustain engagement.
• Worked under the direct guidance of Harvard Law School Alumni, Matt Van Italie, the founder of Sema Software
`,
  },
]
  .map(
    (e) =>
      ({ ...e, shortDescription: e.shortDescription.trim() }) as Experience,
  )
  .sort((a, b) => {
    const dateA = monthYearToDate(
      a.dateEnd === 'Present' ? a.dateStart : a.dateEnd,
    );
    const dateB = monthYearToDate(
      b.dateEnd === 'Present' ? b.dateStart : b.dateEnd,
    );
    return dateB.getTime() - dateA.getTime();
  });
