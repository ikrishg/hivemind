import Link from "next/link";
import type { WritingEntry } from "@/content/writing";

const rowClass =
  "group flex items-baseline justify-between gap-6 border-b border-foreground/10 py-4 sm:py-5";
const titleClass =
  "font-serif text-lg text-foreground/90 underline decoration-1 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-foreground/40 sm:text-xl";
const metaClass = "font-sans text-sm text-foreground/45 tabular-nums";

// One writing list row. `dateLabel` is formatted by the caller (e.g. "Feb 2024"
// on the home list, "Feb" inside year groups on the archive).
export function WritingRow({
  entry,
  dateLabel,
}: {
  entry: WritingEntry;
  dateLabel: string;
}) {
  const meta = (
    <span className="flex shrink-0 items-baseline gap-2.5 pt-1">
      <span className={metaClass}>{dateLabel}</span>
    </span>
  );

  if (entry.kind === "external") {
    return (
      <a href={entry.url} target="_blank" rel="noreferrer" className={rowClass}>
        <span>
          <span className={titleClass}>{entry.title}</span>
          <span
            aria-hidden="true"
            className="ml-1.5 inline-block font-sans text-sm text-foreground/40 transition-colors duration-200 group-hover:text-foreground/70"
          >
            &#8599;
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
        {meta}
      </a>
    );
  }

  return (
    <Link href={`/p/${entry.slug}`} className={rowClass}>
      <span>
        <span className={titleClass}>{entry.title}</span>
      </span>
      {meta}
    </Link>
  );
}
