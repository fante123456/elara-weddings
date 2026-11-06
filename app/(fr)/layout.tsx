import { SiteShell } from "@/components/site-shell";
import { fontClasses } from "@/lib/fonts";
import { rootMetadata, siteViewport } from "@/lib/metadata";
import "../globals.css";

// French is the main language and lives at the root URLs (/, /about, …).
export const metadata = rootMetadata("fr");
export const viewport = siteViewport;

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontClasses}>
      <body className="flex min-h-dvh flex-col bg-ivory text-ink antialiased">
        <SiteShell locale="fr">{children}</SiteShell>
      </body>
    </html>
  );
}
