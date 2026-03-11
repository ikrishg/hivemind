'use client';

import { profile } from '@workspace/content';
import { motion } from 'motion/react';
import { fadeInUpBlur } from '@/lib/animations';
import { SocialMedia } from './social-media';

export function Hero() {
  return (
    <section className="mb-16">
      <motion.h1
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeInUpBlur}
        className="mb-4 text-4xl font-medium"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInUpBlur}
        className="mb-6 font-mono text-sm text-muted-foreground"
      >
        {profile.title} · {profile.location}
      </motion.p>
      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeInUpBlur}
        className="mb-8 leading-relaxed text-muted-foreground"
      >
        {profile.description}
      </motion.p>
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeInUpBlur}
      >
        <SocialMedia />
      </motion.div>
    </section>
  );
}
