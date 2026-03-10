import { EXPERIENCE, PERSON } from "@workspace/content";
import { Separator } from "@workspace/ui/components/separator";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { PortfolioNav } from "@/components/portfolio/nav";

export const metadata: Metadata = { title: `Experience · ${PERSON.name}` };

export default function ExperiencePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<PortfolioNav />
			<main className="mx-auto max-w-2xl px-6 py-20">
				<h1 className="mb-2 text-2xl font-medium">Experience</h1>
				<p className="mb-10 font-mono text-xs text-muted-foreground">
					{EXPERIENCE.length} roles
				</p>

				<ul className="space-y-12">
					{EXPERIENCE.map((e, i) => (
						<li key={e.id}>
							{i > 0 && <Separator className="mb-12" />}
							<div className="mb-3 flex items-baseline justify-between gap-4">
								<div>
									<Link
										href={`/experience/${e.id}`}
										className="group flex items-center gap-1 font-medium hover:underline underline-offset-4"
									>
										{e.title} @ {e.company}
										<ArrowUpRight
											size={12}
											className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
										/>
									</Link>
								</div>
								<span className="shrink-0 font-mono text-xs text-muted-foreground">
									{e.dateStart} – {e.dateEnd}
								</span>
							</div>
							<ul className="space-y-1">
								{e.shortDescription.split("\n").map((line) => (
									<li
										key={line.slice(0, 32)}
										className="leading-relaxed text-sm text-muted-foreground"
									>
										{line}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</main>
			<PortfolioFooter />
		</div>
	);
}
