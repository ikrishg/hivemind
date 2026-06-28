import Link from "next/link";
import { getFeaturedWriting, writingKey } from "@/content/writing";
import { Reveal } from "@/components/reveal";
import { WritingRow } from "@/components/writing-row";
import { linkClass } from "@/components/smart-link";

function monthYear(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function RecentWriting({ limit = 5 }: { limit?: number }) {
  const entries = getFeaturedWriting(limit);
  if (entries.length === 0) return null;

  return (
    <section
      data-snap
      className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Writing
          </h2>
          <Link href="/posts" className={`shrink-0 ${linkClass}`}>
            All writing
          </Link>
        </div>
      </Reveal>

      <Reveal stagger className="mt-10 border-t border-foreground/10 sm:mt-12">
        {entries.map((entry) => (
          <WritingRow
            key={writingKey(entry)}
            entry={entry}
            dateLabel={monthYear(entry.date)}
          />
        ))}
      </Reveal>
    </section>
  );
}
