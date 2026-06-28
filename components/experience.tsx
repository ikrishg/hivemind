import { experience } from "@/content/experience";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      data-snap
      className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32"
    >
      <Reveal>
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
      </Reveal>

      <Reveal stagger className="mt-10 sm:mt-14">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.start}`}
            className="grid gap-3 border-t border-foreground/12 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-10"
          >
            <p className="font-sans text-sm leading-relaxed text-foreground/55">
              {job.start} - {job.end}
            </p>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl">
                {job.role}
                <span className="text-foreground/55">, {job.company}</span>
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 font-sans leading-relaxed text-foreground/75 marker:text-foreground/30">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="pl-1">
                    {highlight}
                  </li>
                ))}
              </ul>

              {job.link ? (
                <a
                  href={job.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm text-foreground/70 underline decoration-1 decoration-foreground/25 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:decoration-foreground/60"
                >
                  {job.link.label}
                  <span aria-hidden="true">&#8599;</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
