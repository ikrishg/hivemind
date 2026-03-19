'use client';

import { links } from '@workspace/content';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { IconLink } from './ui/icon';

const socials = [
  { href: `mailto:${links.email}`, label: 'Email', icon: Mail },
  // { href: links.resume, label: 'Resume', icon: FileText },
  { href: links.github, label: 'GitHub', icon: Github },
  { href: links.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: links.twitter, label: 'Twitter / X', icon: Twitter },
] as const;

export function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ href, label, icon: LucideIcon }) => {
        return <IconLink key={href} {...{ label, href, LucideIcon }} />;
      })}
    </div>
  );
}
