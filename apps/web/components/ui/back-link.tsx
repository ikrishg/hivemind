import Link from 'next/link';

/**
 * Navigation link rendered as "← label", used at top/bottom of detail pages.
 */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      ← {label}
    </Link>
  );
}
