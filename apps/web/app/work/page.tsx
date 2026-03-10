import { profile, projects } from '@workspace/content';
import { Badge } from '@workspace/ui/components/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { BookOpen, Github, Globe } from 'lucide-react';
import type { Metadata } from 'next';
import { PortfolioFooter } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = { title: `Work · ${profile.name}` };

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="mb-10 text-2xl font-medium">Work</h1>

        <ul className="space-y-3">
          {projects.map((p) => (
            <li key={p.name}>
              <ProjectCard p={p} />
            </li>
          ))}
        </ul>
      </main>
      <PortfolioFooter />
    </div>
  );
}
