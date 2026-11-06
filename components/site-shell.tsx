import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/site";

/** Everything inside <body>: demo banner, skip link, header, page, footer. */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDict(locale).common;
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        {t.skip}
      </a>
      <p className="flex h-9 items-center justify-center bg-ink px-4 text-center text-[0.75rem] font-normal tracking-[0.08em] text-ivory">
        {t.banner}
      </p>
      <SiteHeader locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
