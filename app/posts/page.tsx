import type { Metadata } from "next";
import { getAllWriting, writingKey, type WritingEntry } from "@/content/writing";
import { WritingRow } from "@/components/writing-row";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Writing | Krish Gupta",
  description:
    "Notes on Git, Linux, developer tooling, and building for the web.",
};

function monthShort(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
}

function yearOf(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso.slice(0, 4);
  return String(date.getUTCFullYear());
}

export default function PostsPage() {
  const entries = getAllWriting();

  const order: string[] = [];
  const groups = new Map<string, WritingEntry[]>();
  for (const entry of entries) {
    const year = yearOf(entry.date);
    let list = groups.get(year);
    if (!list) {
      list = [];
      groups.set(year, list);
      order.push(year);
    }
    list.push(entry);
  }
  const years = order.sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24 sm:pt-24">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Writing
          </h1>

          <div className="mt-12 sm:mt-16">
            {entries.length === 0 ? (
              <p className="border-t border-foreground/10 pt-8 font-sans text-foreground/55">
                No posts yet. Check back soon.
              </p>
            ) : (
              years.map((year) => (
                <section key={year} className="mt-14 first:mt-0">
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
                    {year}
                  </h2>
                  <div className="mt-4 border-t border-foreground/10">
                    {(groups.get(year) ?? []).map((entry) => (
                      <WritingRow
                        key={writingKey(entry)}
                        entry={entry}
                        dateLabel={monthShort(entry.date)}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
