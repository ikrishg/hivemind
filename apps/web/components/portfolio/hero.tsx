"use client";

import { PERSON } from "@workspace/content";
import { motion } from "motion/react";
import { SocialLinks } from "./social-links";

const variants = {
	hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
	}),
};

export function Hero() {
	return (
		<section className="mb-16">
			<motion.h1
				custom={0}
				initial="hidden"
				animate="visible"
				variants={variants}
				className="mb-1 text-3xl font-medium"
			>
				{PERSON.name}
			</motion.h1>
			<motion.p
				custom={1}
				initial="hidden"
				animate="visible"
				variants={variants}
				className="mb-6 font-mono text-xs text-muted-foreground"
			>
				{PERSON.title} · {PERSON.location}
			</motion.p>
			<motion.p
				custom={2}
				initial="hidden"
				animate="visible"
				variants={variants}
				className="mb-8 leading-relaxed text-muted-foreground"
			>
				{PERSON.bio}
			</motion.p>
			<motion.div
				custom={3}
				initial="hidden"
				animate="visible"
				variants={variants}
			>
				<SocialLinks />
			</motion.div>
		</section>
	);
}

