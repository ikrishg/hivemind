import { PERSON, PROJECTS } from "@workspace/content";
import { Badge } from "@workspace/ui/components/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { BookOpen, Github, Globe } from "lucide-react";
import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { PortfolioNav } from "@/components/portfolio/nav";

export const metadata: Metadata = { title: `Work · ${PERSON.name}` };

export default function WorkPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<PortfolioNav />
			<main className="mx-auto max-w-2xl px-6 py-20">
				<h1 className="mb-2 text-2xl font-medium">Work</h1>
				<p className="mb-10 font-mono text-xs text-muted-foreground">
					{PROJECTS.length} projects
				</p>

				<ul className="space-y-3">
					{PROJECTS.map((p) => (
						<li key={p.name}>
							<Card size="sm">
								<CardHeader>
									<CardTitle>
										<span className="flex items-center gap-2">
											{p.name}
											{p.deployedUrl && (
												<a
													href={p.deployedUrl}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Live site"
												>
													<Globe
														size={12}
														className="text-muted-foreground hover:text-foreground transition-colors"
													/>
												</a>
											)}
											{p.sourceUrl && (
												<a
													href={p.sourceUrl}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Source code"
												>
													<Github
														size={12}
														className="text-muted-foreground hover:text-foreground transition-colors"
													/>
												</a>
											)}
											{p.devlogsUrl && (
												<a
													href={p.devlogsUrl}
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Dev logs"
												>
													<BookOpen
														size={12}
														className="text-muted-foreground hover:text-foreground transition-colors"
													/>
												</a>
											)}
										</span>
									</CardTitle>
									<CardDescription>{p.shortDescription}</CardDescription>
									{p.notice && (
										<CardAction>
											<Badge variant="outline">{p.notice}</Badge>
										</CardAction>
									)}
								</CardHeader>
							</Card>
						</li>
					))}
				</ul>
			</main>
			<PortfolioFooter />
		</div>
	);
}
