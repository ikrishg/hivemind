import { profile } from '@workspace/content';
import Link from 'next/link';

const NAV: { label: string; href: string; external?: boolean }[] = [];

export function Navigation() {
  return (
    <header className="animate-in fade-in slide-in-from-top-1 duration-500 sticky top-0 z-10 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-xs font-medium hover:opacity-70 transition-opacity"
        >
          {profile.name}
        </Link>
        <div className="flex gap-6">
          {NAV.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs capitalize text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="font-mono text-xs capitalize text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
