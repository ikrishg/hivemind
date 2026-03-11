import { fetchArticles } from '@workspace/content/articles';
import { Suspense } from 'react';
import { WritingSection } from '@/components/blog';
import { ExperienceSection } from '@/components/experience';
import { Hero } from '@/components/hero';
import { WorkSection } from '@/components/projects';
import { Section } from '@/components/section';
import { makeId } from '@/lib/util';

async function ArticlesLoader() {
  const articles = await fetchArticles();
  return <WritingSection articles={articles} />;
}

function WritingSkeleton() {
  return (
    <Section title="Writing">
      <div className="space-y-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={makeId(`skeleton-${i}`)}
            className="h-12 animate-pulse rounded bg-muted"
          />
        ))}
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <WorkSection />
      <Suspense fallback={<WritingSkeleton />}>
        <ArticlesLoader />
      </Suspense>
    </>
  );
}
