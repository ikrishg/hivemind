'use client';

import type { Project } from '@workspace/content';
import { BookOpen, Github, Globe } from 'lucide-react';
import { Icon } from './ui/icon';

export function ProjectMedia({ p }: { p: Project }) {
  return (
    <span className="flex items-center gap-1">
      {p.deployedUrl && (
        <Icon label="View Deployed" href={p.deployedUrl} LucideIcon={Globe} />
      )}
      {p.sourceUrl && (
        <Icon label="View Source" href={p.sourceUrl} LucideIcon={Github} />
      )}
      {p.devlogsUrl && (
        <Icon label="View Dev Logs" href={p.devlogsUrl} LucideIcon={BookOpen} />
      )}
    </span>
  );
}
