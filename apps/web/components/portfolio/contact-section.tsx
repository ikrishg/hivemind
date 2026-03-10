import { LINKS } from '@workspace/content';
import { Button } from '@workspace/ui/components/button';
import { Section } from './section';
import { S } from './sections-config';

export function ContactSection() {
  return (
    <Section id={S.contact} title="Contact">
      <p className="mb-6 leading-relaxed text-muted-foreground">
        I&apos;m always open to interesting conversations. Reach out via email
        or find me on social media.
      </p>
      <Button asChild variant="outline" size="sm">
        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </Button>
    </Section>
  );
}
