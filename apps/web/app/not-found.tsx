import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="mb-2 text-4xl font-medium">404</h1>
      <p className="mb-8 text-muted-foreground">
        This page doesn&apos;t exist yet.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
      >
        go home
      </Link>
    </div>
  );
}
