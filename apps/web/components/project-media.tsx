'use client';

import type { Project } from '@workspace/content';
import { BookOpen, Github, Globe } from 'lucide-react';
import { IconLink } from './ui/icon';

export function ProjectMedia({ p }: { p: Project }) {
  return (
    <span className="flex items-center gap-2">
      {p.deployedUrl && (
        <IconLink
          label="View Deployed"
          href={p.deployedUrl}
          LucideIcon={Globe}
          stopPropagation
        />
      )}
      {p.sourceUrl && (
        <IconLink
          label="View Source"
          href={p.sourceUrl}
          LucideIcon={Github}
          stopPropagation
        />
      )}
      {p.devlogsUrl && (
        <IconLink
          label="View Dev Logs"
          href={p.devlogsUrl}
          LucideIcon={BookOpen}
          stopPropagation
        />
      )}
    </span>
  );
}
