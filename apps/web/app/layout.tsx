import { links, profile } from '@workspace/content';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, Noto_Serif } from 'next/font/google';
//@ts-expect-error
import '@workspace/ui/globals.css';
import { TooltipProvider } from '@workspace/ui/components/tooltip';
import { cn } from '@workspace/ui/lib/utils';
import { PortfolioFooter } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://krishg.com'),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: profile.description,
  authors: [{ name: profile.name, url: links.blog }],
  openGraph: {
    title: profile.name,
    description: profile.description,
    url: 'https://krishg.com',
    siteName: profile.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.name,
    description: profile.description,
  },
  robots: { index: true, follow: true },
};

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-serif',
        notoSerif.variable,
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <div className="bg-background text-foreground">
              <Navigation />
              <main className="min-h-screen mx-auto max-w-2xl px-6 py-20">
                {children}
              </main>
              <PortfolioFooter />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
