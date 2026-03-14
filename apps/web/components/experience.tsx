'use client';

import { experiences } from '@workspace/content';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@workspace/ui/components/hover-card';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { fadeInLeft } from '@/lib/animations';
import { makeId } from '@/lib/util';
import { Section } from './section';
import { SectionLink } from './ui/section-link';

export function ExperienceSection() {
  return (
    <Section title="Experience" titleLink="/experiences">
      <p className="mb-3 hidden sm:block text-xs text-muted-foreground/60 italic">
        hover to preview · detailed pages where available
      </p>
      <ul className="divide-y divide-border/40">
        {experiences.map((e, i) => (
          <motion.li
            key={makeId(e.title, e.company)}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <HoverCard>
              <HoverCardTrigger delay={120} closeDelay={80}>
                {e.content ? (
                  <Link
                    href={`/experiences/${makeId(e.title, e.company)}`}
                    className="group flex items-start justify-between gap-4 py-3.5 first-of-type:pt-0 transition-colors hover:text-foreground sm:items-baseline"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-0 text-base">
                      <span className="font-medium group-hover:underline underline-offset-4">
                        {e.title}
                      </span>
                      <span className="text-muted-foreground sm:ml-2">
                        @ {e.company}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 font-mono text-sm text-muted-foreground">
                      {e.dateStart} – {e.dateEnd}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-60 transition-opacity"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="group flex items-start justify-between gap-4 py-3.5 first-of-type:pt-0 sm:items-baseline">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-0 text-base">
                      <span className="font-medium">{e.title}</span>
                      <span className="text-muted-foreground sm:ml-2">
                        @ {e.company}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 font-mono text-sm text-muted-foreground">
                      {e.dateStart} – {e.dateEnd}
                    </div>
                  </div>
                )}
              </HoverCardTrigger>
              <HoverCardContent
                side="top"
                align="end"
                className="hidden sm:block max-w-md whitespace-pre-line text-left text-sm leading-relaxed"
              >
                {e.shortDescription}
              </HoverCardContent>
            </HoverCard>
          </motion.li>
        ))}
      </ul>
      <SectionLink
        href="/experiences"
        label="view experiences in a more detailed view"
      />
      <SectionLink
        href="/miscellaneous"
        label="view miscellaneous experiences (highly recommended)"
      />
    </Section>
  );
}
