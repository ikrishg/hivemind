import Link from "next/link";
import { SmartLink, linkClass } from "@/components/smart-link";

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-tight transition-colors duration-200 hover:text-foreground/70"
        >
          Krish Gupta
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-6 font-sans text-sm"
        >
          <SmartLink href="/posts" kind="internal" className={linkClass}>
            Writing
          </SmartLink>
          <SmartLink href="mailto:send@krishg.com" kind="mail" className={linkClass}>
            Email
          </SmartLink>
        </nav>
      </div>
    </header>
  );
}
