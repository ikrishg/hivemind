'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@workspace/ui/components/tooltip';
import type { LucideIcon as LucideIconType } from 'lucide-react';
import Link from 'next/link';

/**
 * An icon wrapped in a tooltip. Renders as an `<a>` (via Next `<Link>`) by
 * default. When `stopPropagation` is true it renders a `<button>` that opens
 * the href in a new tab while preventing parent click handlers from firing
 * (useful inside clickable cards).
 */
export function IconLink({
  label,
  href,
  LucideIcon,
  size = 15,
  stopPropagation,
}: {
  label: string;
  href: string;
  LucideIcon: LucideIconType;
  size?: number;
  stopPropagation?: boolean;
}) {
  const iconEl = <LucideIcon size={size} />;
  const cls = 'text-muted-foreground transition-colors hover:text-foreground';

  return (
    <Tooltip>
      <TooltipTrigger>
        {stopPropagation ? (
          <button
            type="button"
            aria-label={label}
            className={cls}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(href, '_blank', 'noopener,noreferrer');
            }}
          >
            {iconEl}
          </button>
        ) : (
          <Link
            href={href}
            aria-label={label}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className={cls}
          >
            {iconEl}
          </Link>
        )}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
