import type { Variants } from 'motion/react';

// ─── Shared Animation Variants ────────────────────────────────────────────────
//
// Centralised motion config so every component uses the same easing, duration,
// and stagger values.  Import these instead of defining one‑off variants.
//
// For server components that cannot use motion, use Tailwind's built‑in
// `animate-in` utilities with the CSS helper classes exported below.

/** Fade-in with upward slide and blur — hero‑style staggered reveals. */
export const fadeInUpBlur: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

/** Fade-in from the left — staggered list items (experience, etc.). */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: 'easeOut' },
  }),
};

/** Fade-in with larger upward slide and heavy blur — media blocks. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
