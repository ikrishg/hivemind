import { experiences } from '@workspace/content';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPageLayout } from '@/components/detail-page-layout';
import { MarkdownProse } from '@/components/markdown-prose';
import { makeId } from '@/lib/util';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return experiences
    .filter((e) => Boolean(e.content))
    .map((e) => ({
      id: makeId(e.title, e.company),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((e) => makeId(e.title, e.company) === id);
  if (!experience || !experience.content) return {};
  return { title: `${experience.title} @ ${experience.company}` };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  const experience = experiences.find((e) => makeId(e.title, e.company) === id);

  if (!experience || !experience.content) notFound();

  return (
    <DetailPageLayout
      backHref="/experiences"
      backLabel="back to experiences"
      header={
        <>
          <h1 className="mb-2 text-2xl font-medium">{experience.title}</h1>
          <p className="text-muted-foreground">@ {experience.company}</p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            {experience.dateStart} – {experience.dateEnd}
          </p>
        </>
      }
    >
      {experience.content ? (
        <article>
          <MarkdownProse content={experience.content} />
        </article>
      ) : (
        <div className="space-y-4">
          <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {experience.shortDescription}
          </p>
        </div>
      )}
    </DetailPageLayout>
  );
}
