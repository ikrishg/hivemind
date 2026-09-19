import { description, socials, title } from "~shared";

export type WorkEntry = {
  name: string;
  summary: string;
  why: string;
  metric?: string;
  href: string;
  quiet?: boolean;
};

export type TimelineEntry = {
  period: string;
  text: string;
};

export type NowBlock = {
  date: string;
  lines: readonly string[];
};

export class SiteContent {
  static readonly tagline = description;

  static readonly age = 17;

  static readonly reseterStars = 1240;

  static readonly reseterCdnPerYear = "5M+";

  static getNowBlock(now = new Date()): NowBlock {
    const date = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      date,
      lines: [
        "I study computer science and statistics in Bengaluru while building in public.",
        "I run Devocado, a fractional DevRel consultancy for API and AI startups.",
        "Most of my energy goes into agentic AI, developer tooling, and shipping docs people can actually use.",
      ],
    };
  }

  static getHomeWork(): WorkEntry[] {
    return [
      {
        name: "reseter.css",
        summary: "Modern CSS reset used across production sites worldwide.",
        why: "I wanted a zero-dependency reset that fixed real browser inconsistencies without wiping useful defaults.",
        metric: `${SiteContent.reseterStars.toLocaleString()} GitHub stars`,
        href: "https://github.com/ikrishg/reseter.css",
      },
      {
        name: "bot-dc-htm",
        summary:
          "Discord economy bot for one of India's largest hackathons.",
        why:
          "Built a TypeScript Discord bot with the Sapphire framework to manage in-server economy flows during the event.",
        metric: "11 GitHub stars",
        href: "https://github.com/ikrishg/bot-dc-htm",
      },
      {
        name: "fastn workshop",
        summary: "Hands-on workshop for learning fastn.",
        why:
          "Created for the EduHub Roadshow Jaipur — a simple fastn and FTD starter with GitHub Pages deployment.",
        metric: "11 GitHub stars",
        href: "https://github.com/ikrishg/fastn-workshop",
      },
    ];
  }

  static getWorkPage(): WorkEntry[] {
    return [
      ...SiteContent.getHomeWork(),
      {
        name: "Sudan's Tech",
        summary: "Backend work for Jammu & Kashmir's first student-led tech nonprofit.",
        why: "Built APIs and deployment pipelines so the community could ship programs for underprivileged students.",
        metric: "Govt. of India–registered nonprofit",
        href: "https://www.sudanstech.com/",
      },
      {
        name: "Sema",
        summary: "DevRel for a global code-review education community.",
        why: "Ran ambassador programs and sessions for 1,000+ reviewers learning how to review code well.",
        metric: "12 global ambassadors",
        href: "https://www.semasoftware.com/",
      },
      {
        name: "Playlistwise",
        summary: "Software engineering internship on a React and Next.js product team.",
        why: "Shipped UI flows, Supabase-backed CRUD, and production deployments on Appwrite and Netlify.",
        metric: "15+ UI flows shipped",
        href: "https://www.linkedin.com/in/kkrishguptaa/details/experience/",
      },
      {
        name: "Devocado",
        summary: "Fractional DevRel consultancy for API and AI startups.",
        why: "I help founders turn docs, onboarding, and agent-ready surfaces into adoption.",
        href: "https://devocado.tech",
        quiet: true,
      },
    ];
  }

  static getAboutTimeline(): TimelineEntry[] {
    return [
      {
        period: "Age ~10",
        text: "Started coding to build WordPress plugins in PHP.",
      },
      {
        period: "Age 12",
        text: `Shipped reseter.css — now at ${SiteContent.reseterStars.toLocaleString()} GitHub stars and ${SiteContent.reseterCdnPerYear} jsDelivr requests per year.`,
      },
      {
        period: "2021 onward",
        text: "DevRel roles early — community programs, education, and launch work.",
      },
      {
        period: "Since then",
        text: "Backend engineering alongside community work at Sudan's Tech, Playlistwise, and Sema.",
      },
      {
        period: "Now",
        text: "Studying CS and statistics at Christ University, Bengaluru. Building agentic AI and developer tooling.",
      },
    ];
  }

  static getPersonSchema(siteUrl: string) {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: title,
      url: siteUrl,
      email: "send@krishg.com",
      jobTitle: "Engineer, builder, sidequester",
      sameAs: [
        socials.github,
        socials.linkedin,
        socials.x,
        socials.instagram,
        socials.substack,
      ],
    };
  }
}
