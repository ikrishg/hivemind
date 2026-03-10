"use client";

import { LINKS } from "@workspace/content";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";

const SOCIAL = [
	{ href: LINKS.github, label: "GitHub", icon: Github },
	{ href: LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
	{ href: LINKS.twitter, label: "Twitter / X", icon: Twitter },
	{ href: `mailto:${LINKS.email}`, label: "Email", icon: Mail },
	{ href: LINKS.resume, label: "Resume", icon: FileText },
] as const;

export function SocialLinks() {
	return (
		<div className="flex items-center gap-4">
			{SOCIAL.map(({ href, label, icon: Icon }) => {
				const isMailto = href.startsWith("mailto:");
				return (
					<Tooltip key={label}>
						<TooltipTrigger asChild>
							<a
								href={href}
								aria-label={label}
								target={isMailto ? undefined : "_blank"}
								rel={isMailto ? undefined : "noopener noreferrer"}
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								<Icon size={15} />
							</a>
						</TooltipTrigger>
						<TooltipContent>{label}</TooltipContent>
					</Tooltip>
				);
			})}
		</div>
	);
}
