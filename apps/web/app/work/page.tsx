import { projects } from '@workspace/content';
import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { makeId } from '@/lib/util';

export const metadata: Metadata = { title: 'Work' };

export default function WorkPage() {
  return (
    <>
      <h1 className="mb-10 text-2xl font-medium">Work</h1>

      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.name}>
            <ProjectCard p={p} href={`/work/${makeId(p.name)}`} />
          </li>
        ))}
      </ul>
    </>
  );
}
