import { projects } from '@workspace/content';
import { makeId } from '@/lib/util';
import { ProjectCard } from './project-card';
import { Section } from './section';
import { SectionLink } from './ui/section-link';

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
            <ProjectCard p={p} href={`/work/${makeId(p.name)}`} />
          </li>
        ))}
      </ul>
      {hasMore && <SectionLink href="/work" label="view all projects" />}
    </Section>
  );
}
