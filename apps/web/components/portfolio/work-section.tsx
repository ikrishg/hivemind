import { PROJECTS } from "@workspace/content";
import { Badge } from "@workspace/ui/components/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import { ArrowUpRight, BookOpen, Github, Globe } from "lucide-react";
import Link from "next/link";
import { Section } from "./section";
import { S } from "./sections-config";

const HOME_LIMIT = 4;

export function WorkSection() {
	const visible = PROJECTS.slice(0, HOME_LIMIT);
	const hasMore = PROJECTS.length > HOME_LIMIT;

	return (
		<Section id={S.work} title="Work">
			<ul className="space-y-3">
				{visible.map((p, i) => (
					<li
						key={p.name}
						style={{ animationDelay: `${i * 60}ms` }}
						className="animate-in fade-in slide-in-from-bottom-1 duration-400"
					>
						<Card
							size="sm"
							className="transition-transform duration-200 hover:scale-[1.01] hover:shadow-sm"
						>
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
			{hasMore && (
				<Link
					href="/work"
					className="mt-4 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
				>
					view all projects
					<ArrowUpRight size={11} />
				</Link>
			)}
		</Section>
	);
}
