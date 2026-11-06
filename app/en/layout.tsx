import { SiteShell } from "@/components/site-shell";
import { fontClasses } from "@/lib/fonts";
import { rootMetadata, siteViewport } from "@/lib/metadata";
import "../globals.css";

// English copy of the site under /en/, same components and content.
export const metadata = rootMetadata("en");
export const viewport = siteViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body className="flex min-h-dvh flex-col bg-ivory text-ink antialiased">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
