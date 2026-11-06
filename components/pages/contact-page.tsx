import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { AddressBlock, HoursList, MapsButtons } from "@/components/brand";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { Container, Eyebrow, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { site, type Locale } from "@/lib/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.contact;
  const c = d.common;
  const photos = getPhotos(locale);

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={<RichText t={t.title} emClassName="text-rose" />}>
        <p>{t.lead}</p>
      </PageIntro>

      <section aria-label={t.sectionLabel} className="pb-24 lg:pb-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4 lg:row-start-1">
            <div className="relative aspect-[4/3] lg:aspect-[4/5]">
              <Photo photo={photos.handsRings} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>

            <h2 className="mt-10 text-4xl">{t.aside}</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>{c.labels.address}</Eyebrow>
                  <div className="mt-1">
                    <AddressBlock locale={locale} />
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>{c.labels.phone}</Eyebrow>
                  <a href={site.phone.href} className="link-underline mt-1 inline-block">
                    {site.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>{c.labels.hours}</Eyebrow>
                  <HoursList locale={locale} className="mt-1" />
                </div>
              </li>
              <li className="flex gap-4">
                <ExternalLink aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>{c.labels.facebook}</Eyebrow>
                  <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 inline-block">
                    {c.facebook}
                    <span className="sr-only"> {c.newTab}</span>
                  </a>
                </div>
              </li>
            </ul>
            <MapsButtons locale={locale} className="mt-8" />
            <p className="mt-8 text-sm text-ink-muted">{c.priceOnRequest}.</p>
          </aside>

          <div className="order-first lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <ContactForm locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
