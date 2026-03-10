import { ABOUT_SECTIONS, LINKS, PERSON } from "@workspace/content";
import { Separator } from "@workspace/ui/components/separator";
import type { Metadata } from "next";
import Image from "next/image";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { PortfolioNav } from "@/components/portfolio/nav";
import { SocialLinks } from "@/components/portfolio/social-links";

export const metadata: Metadata = { title: `About · ${PERSON.name}` };

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<PortfolioNav />
			<main className="mx-auto max-w-2xl px-6 py-20">
				<h1 className="mb-2 text-2xl font-medium">About</h1>
				<p className="mb-10 font-mono text-xs text-muted-foreground">
					{PERSON.title} · {PERSON.location}
				</p>

				<div className="space-y-10">
					{ABOUT_SECTIONS.map((section) => {
						if (section.type === "markdown") {
							return (
								<div
									key={section.content.slice(0, 32)}
									className="space-y-4 leading-relaxed text-muted-foreground"
								>
									{section.content.split("\n\n").map((para) => (
										<p key={para.slice(0, 24)}>{para}</p>
									))}
								</div>
							);
						}
						if (section.type === "gallery") {
							return (
								<div
									key={section.images[0]?.src ?? "gallery"}
									className={`grid gap-3 ${
										section.images.length === 1
											? "grid-cols-1"
											: section.images.length === 2
												? "grid-cols-2"
												: "grid-cols-3"
									}`}
								>
									{section.images.map((img) => (
										<figure key={img.src} className="flex flex-col gap-1.5">
											<div className="relative aspect-video overflow-hidden rounded-md bg-muted">
												<Image
													src={img.src}
													alt={img.alt}
													fill
													className="object-cover"
												/>
											</div>
											{img.caption && (
												<figcaption className="font-mono text-[10px] text-muted-foreground/60">
													{img.caption}
												</figcaption>
											)}
										</figure>
									))}
								</div>
							);
						}
						return null;
					})}
				</div>

				<Separator className="my-10" />

				<div className="space-y-2 font-mono text-xs">
					<div className="flex gap-3">
						<span className="w-20 text-muted-foreground/60">email</span>
						<a
							href={`mailto:${LINKS.email}`}
							className="hover:underline underline-offset-4"
						>
							{LINKS.email}
						</a>
					</div>
					<div className="flex gap-3">
						<span className="w-20 text-muted-foreground/60">github</span>
						<a
							href={LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline underline-offset-4"
						>
							{LINKS.github.replace("https://", "")}
						</a>
					</div>
					<div className="flex gap-3">
						<span className="w-20 text-muted-foreground/60">blog</span>
						<a
							href={LINKS.blog}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline underline-offset-4"
						>
							{LINKS.blog.replace("https://", "")}
						</a>
					</div>
				</div>

				<div className="mt-8">
					<SocialLinks />
				</div>
			</main>
			<PortfolioFooter />
		</div>
	);
}
