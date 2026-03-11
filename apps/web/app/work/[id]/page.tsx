import { projects } from '@workspace/content';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPageLayout } from '@/components/detail-page-layout';
import { MarkdownProse } from '@/components/markdown-prose';
import { ProjectMedia } from '@/components/project-media';
import { makeId } from '@/lib/util';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: makeId(p.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => makeId(p.name) === id);
  if (!project) return {};
  return { title: project.name };
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => makeId(p.name) === id);

  if (!project) notFound();

  return (
    <DetailPageLayout
      backHref="/work"
      backLabel="back to projects"
      header={
        <>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-medium">{project.name}</h1>
            <ProjectMedia p={project} />
          </div>
          {project.notice && (
            <p className="text-sm text-muted-foreground">{project.notice}</p>
          )}
        </>
      }
    >
      {project.content ? (
        <article>
          <MarkdownProse content={project.content} />
        </article>
      ) : (
        <p className="text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>
      )}
    </DetailPageLayout>
  );
}
