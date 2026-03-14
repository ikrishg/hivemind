'use client';

import type { MediaItem } from '@workspace/content';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function MediaGallery({
  media,
  title,
  maxHeight = 300,
}: {
  media: MediaItem[];
  title: string;
  maxHeight?: number;
}) {
  const visualMedia = media.filter(
    (item) => item.type === 'image' || item.type === 'video',
  );
  const attachmentMedia = media.filter(
    (item) => item.type === 'link' || item.type === 'file',
  );

  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!activeMedia) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMedia(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMedia]);

  if (media.length === 0) return null;

  return (
    <>
      <div className="space-y-3 pt-1">
        {visualMedia.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {visualMedia.map((item) => (
              <button
                key={item.src}
                type="button"
                className="shrink-0 rounded-md border border-border/40 bg-muted/10 transition-opacity hover:opacity-90"
                onClick={() => setActiveMedia(item)}
                aria-label={`Open ${title} ${item.type}`}
              >
                {item.type === 'video' ? (
                  <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    style={{ height: maxHeight, maxHeight }}
                    className="w-auto rounded-md"
                  >
                    <source src={item.src} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${title} media`}
                    width={1200}
                    height={800}
                    unoptimized
                    style={{ height: maxHeight, maxHeight }}
                    className="w-auto rounded-md object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {attachmentMedia.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {attachmentMedia.map((item) => (
              <Link
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border/40 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.text ?? `Open ${item.type}`}
              </Link>
            ))}
          </div>
        )}
      </div>

      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 bg-black/70"
            onClick={() => setActiveMedia(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative max-h-[90vh] w-full max-w-5xl rounded-lg border border-border bg-background p-2 shadow-2xl"
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-10 rounded-md border border-border bg-background/90 px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setActiveMedia(null)}
            >
              Close
            </button>

            <div className="flex max-h-[calc(90vh-1rem)] items-center justify-center overflow-hidden rounded-md">
              {activeMedia.type === 'video' ? (
                <video
                  controls
                  autoPlay
                  muted
                  preload="metadata"
                  className="max-h-[85vh] w-auto max-w-full rounded-md"
                >
                  <source src={activeMedia.src} />
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English captions"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={activeMedia.src}
                  alt={`${title} media preview`}
                  width={2000}
                  height={1400}
                  unoptimized
                  className="max-h-[85vh] w-auto max-w-full rounded-md object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
