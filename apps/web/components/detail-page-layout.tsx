import type { ReactNode } from 'react';
import { BackLink } from '@/components/ui/back-link';

/**
 * Shared layout for detail pages (work/[id], experiences/[id]).
 * Renders back-links at top and bottom, a header section, and a content area.
 */
export function DetailPageLayout({
  backHref,
  backLabel,
  header,
  children,
}: {
  backHref: string;
  backLabel: string;
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <div className="mb-8">
        <BackLink href={backHref} label={backLabel} />
      </div>

      <header className="mb-8">{header}</header>

      {children}

      <div className="mt-12">
        <BackLink href={backHref} label={backLabel} />
      </div>
    </>
  );
}
