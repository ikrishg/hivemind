import { fetchArticles } from '@workspace/content';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { PortfolioFooter } from '@/components/portfolio/footer';
import { Hero } from '@/components/portfolio/hero';
import { PortfolioNav } from '@/components/portfolio/nav';
import { WorkSection } from '@/components/portfolio/work-section';
import { WritingSection } from '@/components/portfolio/writing-section';

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <Hero />
        <ExperienceSection />
        <WorkSection />
        <WritingSection articles={articles} />
      </main>
      <PortfolioFooter />
    </div>
  );
}
