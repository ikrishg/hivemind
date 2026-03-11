import { type Article, links } from '@workspace/content';
import { Section } from './section';
import { SectionLink } from './ui/section-link';

const HOME_LIMIT = 3;

export function WritingSection({ articles }: { articles: Article[] }) {
  const visible = articles.slice(0, HOME_LIMIT);

  return (
    <Section title="Writing">
      {visible.length > 0 ? (
        <>
          <ul className="divide-y divide-border/40">
            {visible.map((a, i) => (
              <li
                key={a.href}
                style={{ animationDelay: `${i * 70}ms` }}
                className="animate-in fade-in slide-in-from-bottom-1 duration-400"
              >
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-0.5 py-3.5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium group-hover:underline underline-offset-4">
                      {a.title}
                    </span>
                    <span className="shrink-0 font-mono text-sm text-muted-foreground">
                      {a.date}
                    </span>
                  </div>
                  {a.excerpt && (
                    <span className="line-clamp-2 text-base text-muted-foreground">
                      {a.excerpt}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <SectionLink
            href={links.blog}
            label="read all on blog.krishg.com"
            external
          />
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          Articles coming soon — visit{' '}
          <a
            href={links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            blog.krishg.com
          </a>
        </p>
      )}
    </Section>
  );
}
