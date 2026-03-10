import { EXPERIENCE, PERSON } from '@workspace/content';
import { Separator } from '@workspace/ui/components/separator';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PortfolioFooter } from '@/components/portfolio/footer';
import { PortfolioNav } from '@/components/portfolio/nav';
import { readExperienceContent } from '@/lib/experience';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return EXPERIENCE.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const exp = EXPERIENCE.find((e) => e.id === id);
  if (!exp) return {};
  return { title: `${exp.title} @ ${exp.company} · ${PERSON.name}` };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  const exp = EXPERIENCE.find((e) => e.id === id);
  if (!exp) return notFound();

  const content = readExperienceContent(id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main className="mx-auto max-w-2xl px-6 py-20">
        {/* Back */}
        <Link
          href="/experience"
          className="mb-10 flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={12} />
          experience
        </Link>

        {/* Header */}
        <h1 className="text-2xl font-medium">{exp.title}</h1>
        <p className="mt-1 text-muted-foreground">{exp.company}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {exp.dateStart} – {exp.dateEnd}
        </p>

        {/* Images */}
        {exp.images && exp.images.length > 0 && (
          <>
            <Separator className="my-8" />
            <div
              className={`grid gap-3 ${exp.images.length === 1 ? 'grid-cols-1' : exp.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}
            >
              {exp.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-md bg-muted"
                >
                  <Image
                    src={src}
                    alt={`${exp.company}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Markdown content */}
        {content && (
          <>
            <Separator className="my-8" />
            <div className="prose-sm prose-neutral dark:prose-invert max-w-none leading-relaxed [&>h2]:mb-3 [&>h2]:mt-8 [&>h2]:text-base [&>h2]:font-medium [&>h3]:mb-2 [&>h3]:mt-6 [&>h3]:text-sm [&>h3]:font-medium [&>p]:mb-4 [&>p]:text-muted-foreground [&>ul]:mb-4 [&>ul]:space-y-1 [&>ul>li]:text-sm [&>ul>li]:text-muted-foreground [&>ul>li]:before:mr-2 [&>ul>li]:before:content-['–']">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </>
        )}
      </main>
      <PortfolioFooter />
    </div>
  );
}
