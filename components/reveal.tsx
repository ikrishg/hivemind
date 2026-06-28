"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Reveals content on scroll via IntersectionObserver. The hidden state is set
// by JS on mount (only when motion is allowed), so no-JS and reduced-motion
// visitors always see static, fully-visible content. Pass `stagger` to fade
// in direct children in sequence instead of the block as a whole.
export function Reveal({
  children,
  className,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.setAttribute("data-reveal", "hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.setAttribute("data-reveal", "shown");
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-stagger={stagger ? "" : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
