import { MiscCategory, type MiscExperience } from './experience';
import { sortByDate } from './util';

const volunteering: MiscExperience[] = [
  {
    category: MiscCategory.Volunteering,
    title: 'Advisor',
    company: 'HackTheMountains 5.0',
    dateStart: 'Jun 2024',
    dateEnd: 'Nov 2024',
    shortDescription: `• Led social media marketing for 17k+ Hacker Hackathon
• Gained 1m impressions/month, guiding a team into increasing reach.
• Hosted digital sessions and art boarded content ideas`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Backend Developer',
    company: "Sudan's Tech",
    dateStart: 'Apr 2024',
    dateEnd: 'Aug 2024',
    shortDescription: `• Built the API backend for ST Events Portal with 50+ different API endpoints
• Worked with NestJs, Prisma, Nodemailer, Fastify and various production technology
• Created Docker Image and oversaw deployment on AWS`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Organising Team',
    company: 'HackTheMountains 4.0',
    dateStart: 'Jun 2023',
    dateEnd: 'Nov 2023',
    shortDescription: `• Led the social media team and planned content for all three channels. Total impressions: 550k+ over 3 months.
• Solely handled the Twitter channel and hosted 7 spaces (AVG. 500 attendees/space). Brought 100k+ impressions/month on Twitter.
• Handled the community partner (50) and evangelist (60) program. Gained 270 clicks/week. (Wrote the campaign emails in TypeScript and managed the Google Analytics dashboard)
• Built the economy discord bot, used by 4k+ members of the Discord server.`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Technical Lead',
    company: 'FreyHacks',
    dateStart: 'Jan 2023',
    dateEnd: 'Jan 2024',
    shortDescription: `• Developed technical resources for participants, such as discord-bot-template, cli-tool-template, etc.
• Led the development of the Website and other utilities for the Hackathon.
• Conducted 3 technical workshops with a footfall of 100+ attendees.`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Mentor & Guild Leader',
    company: 'Major League Hacking',
    dateStart: 'Dec 2021',
    dateEnd: 'Mar 2023',
    shortDescription: `• Mentored at 100+ MLH FP Hackathons
• Led two leading guilds of 100+ members at MLH LHDs and GHWs
• Part of the top 10% guilds at MLH`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Open Source Maintainer',
    company: 'EddieHub',
    dateStart: 'Nov 2021',
    dateEnd: 'Sep 2024',
    shortDescription: `• Maintained EddieHub's premier projects with 1000s of GitHub Stars
• Built 5 massive internal utility projects for EddieHub tools.
• Held 4 standup/community calls for the EddieHub community.
• Been a speaker at EddieCon 0.2 with an audience of 100+ open source maintainers and contributors.`,
  },
  {
    category: MiscCategory.Volunteering,
    title: 'Open Source Maintainer',
    company: 'WebXDAO',
    dateStart: 'Oct 2021',
    dateEnd: 'Sep 2023',
    shortDescription: `• Maintained various fundamental projects of the WebXDAO
• Mentored incoming contributors and ran office hours on Discord`,
  },
];

const extracurriculars: MiscExperience[] = [
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Secretary General',
    company: 'PRUMUN League 4.0 (2025)',
    dateStart: 'Sep 2025',
    dateEnd: 'Feb 2026',
    shortDescription: `• Led a secretariat of 12 members in hosting a Model UN Conference
• Gained 1m+ impressions/month on Instagram.
• Hosted 600 attendees at the conference with 10 committees.
• Designed all branding, marketing, and promotional content of PRUMUN League
• Coordinated with various schools, guests and the executive board for the conference.`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Head Boy',
    company: 'Student Council',
    dateStart: 'Jul 2024',
    dateEnd: 'Jan 2026',
    shortDescription: `• Contested election for the student council and won with a vote turnout of 1200+ students.
• Founded 3 school societies and clubs, hosted major council events.
• Represented the school as the head of the student body in my best capacity.
• Served as Cultural Prefect previously and hosted various cultural events and festivals in the school.`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Director General',
    company: 'PRUMUN League (2024)',
    dateStart: 'Oct 2024',
    dateEnd: 'Feb 2025',
    shortDescription: `• Co-led a secretariat of 14 members in hosting a Model UN Conference
• Gained 750k+ impressions/3 months on Instagram
• Hosted 400 attendees with 13 committees.
• Designed all branding, marketing, and promotional content of PRUMUN League`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Founder',
    company: 'Prudence Technovanza',
    dateStart: 'Apr 2024',
    dateEnd: 'Apr 2026',
    shortDescription: `• Founded the Technology Society of Prudence School, Ashok Vihar
• Facilitated 12 teams of students to various technical fests and competitions.
• Taught 50+ members of the club in coding and design workshops.`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Founding Member',
    company: 'Prudence MUN Society',
    dateStart: 'Jun 2022',
    dateEnd: 'Jan 2026',
    shortDescription: `• Trained 400+ students to be prepared for MUN delegations.
• Crafted and prepared well-articulated lectures and presentations.
• Acted as a judge and executive board member for multiple external MUN Conferences
• Guided and mentored 200+ students as an EB in conferences.`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Content Creator',
    company: 'Self',
    dateStart: 'Sep 2021',
    dateEnd: 'Apr 2023',
    shortDescription: `• Grew an organic following of 4.5k+ on Twitter.
• Actively tweeted about web dev and developer operations engineering.
• Funnelled some of this audience to my blog (50k+ article reads) and Discord community.
• Taught a cohort of 100+ college students about various concepts in DevOps (especially Golang and Docker)`,
  },
  {
    category: MiscCategory.ExtraCurricular,
    title: 'Computer Science Summer School',
    company: 'Amity University',
    dateStart: 'Jun 2023',
    dateEnd: 'Jul 2023',
    shortDescription: `• Undertook collegiate courses on Computer Science
• Built 12 micro-projects in 2 weeks
• Engaged in research and programming training.`,
  },
];

const honours: MiscExperience[] = [];

/** All miscellaneous experiences merged into one chronologically-sorted list. */
export const miscellaneous: readonly MiscExperience[] = sortByDate<MiscExperience>([
  ...volunteering,
  ...extracurriculars,
  ...honours,
]);
