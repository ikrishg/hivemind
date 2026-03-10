// ─── Projects / Work ──────────────────────────────────────────────────────────

export interface Project {
  name: string;

  shortDescription: string;

  notice?: string;
  deployedUrl?: string;
  sourceUrl?: string;
  devlogsUrl?: string;

  content?: string;
}

export const projects: readonly Project[] = [
  {
    name: 'Reseter.css',
    shortDescription:
      'The best CSS reset library on the internet, with 100k+ downloads and 12m/year CDN hits.',

    notice: '1.2k Stars on GitHub ⭐',
    sourceUrl: 'https://github.com/kkrishguptaa/reseter.css',
  },
  {
    name: 'Apollo',
    shortDescription:
      'Personal blog built in Astro with one goal, that no page, no matter how many pictures should go above 512kb.',
    sourceUrl: 'https://github.com/kkrishguptaa/apollo',
    deployedUrl: 'https://blog.krishg.com',
  },
  {
    name: 'Orpheus',
    shortDescription:
      'Poetry showcase that retrieves poems from a Notion database and displays them in a beautiful, minimalist.',
    sourceUrl: 'https://github.com/kkrishguptaa/orpheus',
    deployedUrl: 'https://poetry.krishg.com',
  },
  {
    name: "Icarus",
    shortDescription: "Platformer game built in PhaseJS, inspired by the Greek myth of Icarus but with a twist, every few levels the player has to choose a power to sacrifice to keep flying, and the game can only be beaten if you have the right strategy for which powers to sacrifice at which levels.",
    notice: "Daydream Delhi Gam Jam Second Runner-Up 🏆",
    sourceUrl: "https://github.com/kkrishguptaa/icarus",
    deployedUrl: "https://icarus.krishg.com",
  },
  {
    name: "Mnemo",
    shortDescription: "Golang CLI to help you Save snips of information under various categories to remember them later",
    sourceUrl: "https://github.com/kkrishguptaa/mnemo",
  }
] as const;
