import { MiscCategory, miscellaneous } from '@workspace/content';
import { Badge } from '@workspace/ui/components/badge';
import type { Metadata } from 'next';
import { MediaGallery } from '@/components/media-gallery';
import { BackLink } from '@/components/ui/back-link';
import { makeId } from '@/lib/util';

export const metadata: Metadata = { title: 'Miscellaneous' };

const categoryStyle: Record<
  MiscCategory,
  { variant: 'default' | 'secondary' | 'outline'; className?: string }
> = {
  [MiscCategory.Volunteering]: { variant: 'default' },
  [MiscCategory.ExtraCurricular]: { variant: 'secondary' },
  [MiscCategory.Honour]: {
    variant: 'outline',
    className:
      'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  },
};

export default function MiscellaneousPage() {
  return (
    <>
      <h1 className="mb-10 text-2xl font-medium">Miscellaneous</h1>

      <ul className="divide-y divide-border/40">
        {miscellaneous.map((item) => (
          <li key={makeId(item.title, item.company)}>
            <div className="flex flex-col gap-2.5 py-5">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 text-base">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-muted-foreground">
                    @ {item.company}
                  </span>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {item.dateStart} – {item.dateEnd}
                </span>
              </div>
              <Badge
                variant={categoryStyle[item.category].variant}
                className={categoryStyle[item.category].className}
              >
                {item.category}
              </Badge>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {item.shortDescription}
              </p>
              {item.media && item.media.length > 0 && (
                <MediaGallery
                  media={item.media}
                  title={item.title}
                  maxHeight={200}
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <BackLink href="/" label="back home" />
      </div>
    </>
  );
}
