import { Experience } from "@/components/experience";
import { RecentWriting } from "@/components/recent-writing";
import { SiteFooter } from "@/components/site-footer";
import { SmartLink, linkClass } from "@/components/smart-link";
import { SnapSections } from "@/components/snap-sections";
import { links } from "@/content/links";

export default function Home() {
  return (
    <>
      <main>
        <section
          data-snap
          className="flex min-h-screen flex-col items-center justify-center px-6 py-20"
        >
          <div className="hero-stagger flex max-w-3xl flex-col items-center text-center">
            <h1 className="hero-anim rise font-serif text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Krish Gupta
            </h1>

            <p className="hero-anim rise mt-7 max-w-xl font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl lg:text-2xl">
              I live in paradoxes, and wish to live lives as if I&apos;m trying
              on different clothes.
            </p>

            <span
              aria-hidden="true"
              className="hero-anim rule mt-9 block h-px w-14 origin-center bg-foreground/25"
            />

            <nav
              aria-label="Elsewhere"
              className="hero-anim rise mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-sm"
            >
              {links.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  kind={link.kind}
                  className={linkClass}
                >
                  {link.label}
                </SmartLink>
              ))}
            </nav>
          </div>
        </section>

        <RecentWriting />

        <Experience />
      </main>

      <SiteFooter />

      <SnapSections />
    </>
  );
}
