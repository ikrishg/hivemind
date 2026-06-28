// Off-site writing that lives on other publications. Titles, URLs, and dates
// were confirmed from the live sources (Kubesimplify on Hashnode and Krish's
// Substack). `source` is the short publication label shown next to the row.
export interface ExternalPost {
  title: string;
  url: string;
  // ISO yyyy-mm-dd (publish date on the source).
  date: string;
  source: string;
  featured?: boolean;
}

export const externalPosts: ExternalPost[] = [
  {
    title:
      "Automated GitHub Releases with GitHub Actions and Conventional Commits",
    url: "https://blog.kubesimplify.com/automated-github-releases-with-github-actions-and-conventional-commits",
    date: "2024-02-12",
    source: "Kubesimplify",
    featured: true,
  },
  {
    title: "Reducing Image Size using Multi-stage builds for a Go application",
    url: "https://blog.kubesimplify.com/multi-stage-docker-build",
    date: "2024-02-05",
    source: "Kubesimplify",
    featured: true,
  },
  {
    title: "Telephones and Traffic",
    url: "https://kkrishguptaa.substack.com/p/telephones-and-traffic",
    date: "2026-05-01",
    source: "Substack",
  },
  {
    title: "Greek Tales",
    url: "https://kkrishguptaa.substack.com/p/greek-tales",
    date: "2026-04-28",
    source: "Substack",
  },
  {
    title: "Floccinaucinihilipilification",
    url: "https://kkrishguptaa.substack.com/p/floccinaucinihilipilification",
    date: "2026-04-27",
    source: "Substack",
  },
];
