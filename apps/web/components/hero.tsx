'use client';

import { profile } from '@workspace/content';
import { motion, type Variants } from 'motion/react';
import { SocialMedia } from './social-media';

const variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
} as Variants;

export function Hero() {
  return (
    <section className="mb-16">
      <motion.h1
        custom={0}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="mb-4 text-3xl font-medium"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="mb-6 font-mono text-xs text-muted-foreground"
      >
        {profile.title} · {profile.location}
      </motion.p>
      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="mb-8 leading-relaxed text-muted-foreground"
      >
        {profile.description}
      </motion.p>
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <SocialMedia />
      </motion.div>
    </section>
  );
}
