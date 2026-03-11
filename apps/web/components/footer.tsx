import { profile } from '@workspace/content';
import { Separator } from '@workspace/ui/components/separator';

export function PortfolioFooter() {
  return (
    <footer className="py-4">
      <div className="mx-auto max-w-2xl px-6">
        <Separator className="mb-8" />
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-muted-foreground">
            {profile.name}
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
