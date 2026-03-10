import { projects } from '@workspace/content';
import { Badge } from '@workspace/ui/components/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard } from './project-card';
import { ProjectMedia } from './project-media';
import { Section } from './section';

const HOME_LIMIT = 4;

export function WorkSection() {
  const visible = projects.slice(0, HOME_LIMIT);
  const hasMore = projects.length > HOME_LIMIT;

  return (
    <Section title="Work">
      <ul className="space-y-3">
        {visible.map((p, i) => (
          <li
            key={p.name}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-in fade-in slide-in-from-bottom-1 duration-400"
          >
            <ProjectCard p={p} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <Link
          href="/work"
          className="mt-4 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          view all projects
          <ArrowUpRight size={11} />
        </Link>
      )}
    </Section>
  );
}
