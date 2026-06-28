import { SmartLink, linkClass } from "@/components/smart-link";
import { links } from "@/content/links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg font-bold tracking-tight text-foreground/85">
            Krish Gupta
          </p>
          <p className="mt-1 font-sans text-xs text-foreground/45">
            © {year} · Bengaluru, India
          </p>
        </div>
        <nav
          aria-label="Links"
          className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm"
        >
          {links.map((link) => (
            <SmartLink
              key={link.label}
              href={link.href}
              kind={link.kind}
              className={linkClass}
            >
              {link.label}
            </SmartLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
