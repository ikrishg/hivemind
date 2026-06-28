import Link from "next/link";

const linkClass =
  "rounded-sm font-sans text-foreground underline decoration-1 decoration-foreground/40 underline-offset-4 transition-colors duration-200 hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex max-w-xl flex-col items-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
          404
        </p>

        <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Lost the thread.
        </h1>

        <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-foreground/70">
          This page wandered off, or was never written down. No harm done. Let
          us find you something worth reading instead.
        </p>

        <nav
          aria-label="Recover"
          className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
        >
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/posts" className={linkClass}>
            Writing
          </Link>
        </nav>
      </div>
    </main>
  );
}
