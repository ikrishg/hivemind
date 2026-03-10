'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@workspace/ui/components/tooltip';
import type { LucideProps } from 'lucide-react';
import Link from 'next/link';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export function Icon({
  label,
  href,
  LucideIcon,
}: {
  label: string;
  href: string;
  LucideIcon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}): import('react').JSX.Element {
  return (
    <Tooltip key={label}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={label}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <LucideIcon size={15} />
        </Link>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
