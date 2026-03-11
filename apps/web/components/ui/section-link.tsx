import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/**
 * "View more" link shown at the bottom of home-page sections.
 * Renders as an internal Next.js `<Link>` or an external `<a>` depending
 * on whether `external` is set.
 */
export function SectionLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const cls =
    'mt-4 flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
        <ArrowUpRight size={11} />
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
      <ArrowUpRight size={11} />
    </Link>
  );
}
