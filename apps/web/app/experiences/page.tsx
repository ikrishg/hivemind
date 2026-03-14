import { experiences } from '@workspace/content';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MediaGallery } from '@/components/media-gallery';
import { BackLink } from '@/components/ui/back-link';
import { makeId } from '@/lib/util';

export const metadata: Metadata = { title: 'Experiences' };

export default function ExperiencesPage() {
  return (
    <>
      <h1 className="mb-10 text-2xl font-medium">Experiences</h1>

      <ul className="divide-y divide-border/40">
        {experiences.map((experience) => {
          const key = makeId(experience.title, experience.company);
          const content = (
            <div className="flex flex-col gap-2.5 py-5">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 text-base">
                  <span className="font-medium">{experience.title}</span>
                  <span className="text-muted-foreground">
                    @ {experience.company}
                  </span>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {experience.dateStart} – {experience.dateEnd}
                </span>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {experience.shortDescription}
              </p>
              {experience.media && experience.media.length > 0 && (
                <MediaGallery
                  media={experience.media}
                  title={experience.title}
                  maxHeight={300}
                />
              )}
            </div>
          );

          return (
            <li key={key}>
              {experience.content ? (
                <Link href={`/experiences/${key}`} className="group block">
                  <div className="transition-colors group-hover:text-foreground">
                    {content}
                  </div>
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8">
        <BackLink href="/" label="back home" />
      </div>
    </>
  );
}
