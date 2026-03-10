import { fetchArticles } from '@workspace/content';
import { WritingSection } from '@/components/blog';
import { ExperienceSection } from '@/components/experience';
import { PortfolioFooter } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { WorkSection } from '@/components/projects';
import { Section } from '@/components/section';

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <Hero />
        <Section title="Disclaimer">
          <p className="text-sm text-muted-foreground">
            Hi, I'm still working on this portfolio. I need to add more
            projects, write about more experiences and polish the design.
          </p>
        </Section>
        <ExperienceSection />
        <WorkSection />
        <WritingSection articles={articles} />
      </main>
      <PortfolioFooter />
    </div>
  );
}
