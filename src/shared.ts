import { site as astroSite, base } from 'astro:config/server';

export const title = 'Krish Gupta';

export const description =
  'Krish Gupta is a software engineer, poet, and founder. He builds systems for people and for AI agents.';

export const topics = ['Krish Gupta', 'Ciel', 'Software Engineering'];

export const site = astroSite
  ? new URL(base, astroSite)
  : new URL('https://krishg.com');

export const creatorName = 'Krish Gupta';

export const creatorUsername = 'kkrishguptaa';

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigation: readonly NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
];
