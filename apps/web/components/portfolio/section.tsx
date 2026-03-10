import { Separator } from "@workspace/ui/components/separator";
import type { ReactNode } from "react";

export type SectionId = "about" | "work" | "experience" | "writing" | "contact";

export function Section({
	id,
	title,
	children,
}: {
	id: SectionId;
	title: string;
	children: ReactNode;
}) {
	return (
		<section
			id={id}
			className="animate-in fade-in slide-in-from-bottom-2 duration-500 mb-12 scroll-mt-20"
		>
			<div className="mb-6">
				<p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
					{title}
				</p>
				<Separator />
			</div>
			{children}
		</section>
	);
}
