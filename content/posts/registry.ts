import type { MDXContent } from "mdx/types";

import BlueGreen, { metadata as blueGreenMeta } from "./blue-green-deployments.mdx";
import Devops101, { metadata as devops101Meta } from "./devops-101.mdx";
import GithubResumes, {
  metadata as githubResumesMeta,
} from "./github-is-not-replacing-resumes.mdx";
import Linux101, { metadata as linux101Meta } from "./linux-101.mdx";
import OpenSource101, { metadata as openSource101Meta } from "./open-source-101.mdx";
import GitGithubGuide, {
  metadata as gitGithubGuideMeta,
} from "./shortest-guide-to-git-and-github.mdx";

export interface PostMdxMetadata {
  title?: string;
  description?: string;
  date?: string | Date;
  cover?: string;
  coverAlt?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}

export interface PostEntry {
  slug: string;
  Component: MDXContent;
  metadata: PostMdxMetadata;
  readingTime: number;
}

const READING_TIME: Record<string, number> = {
  "blue-green-deployments": 3,
  "devops-101": 5,
  "github-is-not-replacing-resumes": 3,
  "linux-101": 9,
  "open-source-101": 8,
  "shortest-guide-to-git-and-github": 8,
};

export const postEntries: PostEntry[] = [
  {
    slug: "blue-green-deployments",
    Component: BlueGreen,
    metadata: blueGreenMeta,
    readingTime: READING_TIME["blue-green-deployments"],
  },
  {
    slug: "devops-101",
    Component: Devops101,
    metadata: devops101Meta,
    readingTime: READING_TIME["devops-101"],
  },
  {
    slug: "github-is-not-replacing-resumes",
    Component: GithubResumes,
    metadata: githubResumesMeta,
    readingTime: READING_TIME["github-is-not-replacing-resumes"],
  },
  {
    slug: "linux-101",
    Component: Linux101,
    metadata: linux101Meta,
    readingTime: READING_TIME["linux-101"],
  },
  {
    slug: "open-source-101",
    Component: OpenSource101,
    metadata: openSource101Meta,
    readingTime: READING_TIME["open-source-101"],
  },
  {
    slug: "shortest-guide-to-git-and-github",
    Component: GitGithubGuide,
    metadata: gitGithubGuideMeta,
    readingTime: READING_TIME["shortest-guide-to-git-and-github"],
  },
];
