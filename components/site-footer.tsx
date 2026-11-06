import Link from "next/link";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { AddressBlock, HoursList, TextLogo } from "@/components/brand";
import { Container } from "@/components/ui";
import { getDict } from "@/lib/content";
import { localePath, site, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.common;
  const f = d.footer;

  return (
    <footer className="mt-auto bg-ink text-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1fr_0.8fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href={localePath(locale, "/")} aria-label={t.logoHome} className="inline-block">
              <TextLogo tone="light" size="lg" />
            </Link>
            <p className="mt-5 max-w-xs font-display text-xl font-light italic text-champagne">{f.tagline}</p>
            <p className="mt-3 text-[0.95rem] text-ivory/80">{t.priceOnRequest}</p>
          </div>

          <div>
            <h2 className="eyebrow !text-champagne">{f.contact}</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <div>
                  <AddressBlock locale={locale} mutedClassName="text-ivory/80" />
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block underline underline-offset-4 hover:text-champagne">
                    {t.maps}
                    <span className="sr-only"> {t.newTab}</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <a href={site.phone.href} className="hover:underline">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {t.facebook}
                  <span className="sr-only"> {t.newTab}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow flex items-center gap-2 !text-champagne">
              <Clock aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
              {t.labels.hours}
            </h2>
            <HoursList locale={locale} className="mt-5 text-[0.95rem]" />
          </div>

          <nav aria-label={f.pages}>
            <h2 className="eyebrow !text-champagne">{f.pages}</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] md:grid-cols-1">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link href={localePath(locale, item.href)} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={localePath(locale, "/credits")} className="hover:underline">
                  {t.creditsLink}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-sm text-ivory/80 md:flex-row md:justify-between md:gap-10">
          <p className="max-w-2xl">{f.demo}</p>
          <p className="shrink-0">
            {f.photos}{" "}
            <Link href={localePath(locale, "/credits")} className="underline underline-offset-4 hover:text-ivory">
              {f.credits}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
