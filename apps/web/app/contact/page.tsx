import { LINKS, PERSON } from "@workspace/content";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import type { Metadata } from "next";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { PortfolioNav } from "@/components/portfolio/nav";
import { Showreel } from "@/components/portfolio/showreel";
import { SocialLinks } from "@/components/portfolio/social-links";

export const metadata: Metadata = { title: `Contact · ${PERSON.name}` };

// Add your work/project images here to populate the showreel
const SHOWREEL_IMAGES: string[] = [];

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<PortfolioNav />
			<main className="mx-auto max-w-2xl px-6 py-20">
				<h1 className="mb-2 text-2xl font-medium">Contact</h1>
				<p className="mb-10 font-mono text-xs text-muted-foreground">
					Let&apos;s talk
				</p>

				{SHOWREEL_IMAGES.length > 0 && (
					<div className="mb-12">
						<Showreel
							images={SHOWREEL_IMAGES}
							link="/work"
							linkTitle="View work"
						/>
					</div>
				)}

				<p className="mb-8 leading-relaxed text-muted-foreground">
					I&apos;m always open to interesting conversations — whether it&apos;s
					about a project, a job opportunity, or just to say hi. Email is the
					best way to reach me.
				</p>

				<Button asChild size="sm" variant="outline" className="mb-10">
					<a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
				</Button>

				<Separator className="mb-8" />

				<p className="mb-4 font-mono text-xs text-muted-foreground">
					elsewhere
				</p>
				<SocialLinks />
			</main>
			<PortfolioFooter />
		</div>
	);
}
