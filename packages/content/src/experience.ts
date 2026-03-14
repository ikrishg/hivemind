import { type MonthYear, sortByDate } from './util';

export type MediaType = 'image' | 'video' | 'link' | 'file';

export interface MediaItem {
  type: MediaType;
  src: string;
  text?: string;
}

export interface Experience {
  title: string;
  company: string;
  dateStart: MonthYear;
  dateEnd: MonthYear | 'Present';

  media?: MediaItem[];

  shortDescription: string;

  content?: string;
}

export enum MiscCategory {
  Volunteering = 'Volunteering',
  ExtraCurricular = 'Extra-Curricular',
  Honour = 'Honour',
}

/** Experience without long-form content — used for volunteering, extra-curriculars, honours. */
export type MiscExperience = Omit<Experience, 'content'> & {
  category: MiscCategory;
};

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
    media: [
      {
        type: 'file',
        text: '12LPAClub Offer Letter',
        src: 'https://krish.pics/cdn/12lpaclub-offer',
      },
    ],
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
    media: [
      {
        type: 'file',
        text: 'Letter of Recommendation from Founder, Matt Van Italie',
        src: 'https://krish.pics/cdn/sema-lor',
      }
    ],
  },
].map(
  // Assertion needed: array literal widens MonthYear literals to string
  (e) => ({ ...e, shortDescription: e.shortDescription.trim() }) as Experience,
);

sortByDate(experiences as Experience[]);
