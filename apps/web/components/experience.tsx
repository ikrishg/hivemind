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
import { makeId } from '@/lib/util';
import { Section } from './section';

export function ExperienceSection() {
  return (
    <Section title="Experience">
      <ul className="divide-y divide-border/40">
        {experiences.map((e, i) => (
          <motion.li
            key={makeId(e.title, e.company)}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: 'easeOut' }}
          >
            <HoverCard openDelay={120} closeDelay={80}>
              <HoverCardTrigger asChild>
                <Link
                  href={`/experience/${makeId(e.title, e.company)}`}
                  className="group flex items-start justify-between gap-4 py-3.5 transition-colors hover:text-foreground sm:items-baseline"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-0 text-sm">
                    <span className="font-medium group-hover:underline underline-offset-4">
                      {e.title}
                    </span>
                    <span className="text-muted-foreground sm:ml-2">
                      @ {e.company}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    {e.dateStart} – {e.dateEnd}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-60 transition-opacity"
                    />
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                side="top"
                align="end"
                className="hidden sm:block max-w-md whitespace-pre-line text-left text-xs leading-relaxed"
              >
                {e.shortDescription}
              </HoverCardContent>
            </HoverCard>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
