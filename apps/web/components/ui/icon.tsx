'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@workspace/ui/components/tooltip';
import type { LucideIcon as LucideIconType } from 'lucide-react';

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

  const openHref = () => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }

    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Tooltip>
      <TooltipTrigger
        aria-label={label}
        className={cls}
        onClick={(e) => {
          if (stopPropagation) {
            e.preventDefault();
            e.stopPropagation();
          }

          openHref();
        }}
      >
        {iconEl}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
