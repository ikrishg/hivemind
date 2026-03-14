import { Separator } from '@workspace/ui/components/separator';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function Section({
  title,
  titleLink,
  children,
}: {
  title: string;
  titleLink?: string;
  children: ReactNode;
}) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 mb-12 scroll-mt-20">
      <div className="mb-6">
        {titleLink ? (
          <Link href={titleLink}>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {title}
            </p>
          </Link>
        ) : (
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
        )}
        <Separator />
      </div>
      {children}
    </section>
  );
}
