import Link from "next/link";
import type { ReactNode } from "react";
import type { LinkKind } from "@/content/links";

export const linkClass =
  "rounded-sm text-foreground/75 underline decoration-1 decoration-foreground/25 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SmartLink({
  href,
  kind,
  className,
  children,
}: {
  href: string;
  kind: LinkKind;
  className?: string;
  children: ReactNode;
}) {
  if (kind === "internal") {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (kind === "mail") {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
