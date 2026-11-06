import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { ButtonLink, Container, DemoNote, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { localePath, type Locale } from "@/lib/site";

/** Former "Packages" page: the real services, with prices on request (none are public). */
export function ServicesPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.servicesPage;
  const photos = getPhotos(locale);

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={<RichText t={t.title} emClassName="text-rose" />}>
        <p>{t.lead}</p>
      </PageIntro>

      <div className="reveal relative mx-auto aspect-[16/9] w-full max-w-[1280px] sm:aspect-[21/9] lg:px-12">
        <div className="relative h-full w-full">
          <Photo photo={photos.archBouquet} sizes="(min-width: 1280px) 1184px, 100vw" />
        </div>
      </div>

      <section aria-labelledby="packages-title" className="pb-24 pt-12 lg:py-24">
        <Container>
          <h2 id="packages-title" className="sr-only">
            {t.heading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.services.map((s, i) => (
              <article
                key={s.id}
                aria-labelledby={`svc-${s.id}`}
                className={`reveal flex flex-col border border-ink/12 p-7 sm:p-8 ${i % 2 === 1 ? "bg-blush" : "bg-ivory"}`}
              >
                <h3 id={`svc-${s.id}`} className="text-[2.1rem] leading-tight">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-ink-muted">{s.text}</p>

                <p className="mt-6 border-t border-ink/15 pt-5">
                  <span className="block text-sm text-ink-muted">{t.priceLabel}</span>
                  <span className="font-display text-3xl font-light">{t.priceValue}</span>
                </p>

                <ButtonLink
                  href={localePath(locale, "/contact")}
                  variant={i % 2 === 1 ? "solid" : "ghost"}
                  className="mt-8 w-full !px-4"
                  aria-label={`${t.askFor}${s.name}`}
                >
                  {t.ask}
                </ButtonLink>
              </article>
            ))}
          </div>
          <DemoNote className="mt-10">{t.note}</DemoNote>
        </Container>
      </section>

      <CtaBand locale={locale} title={t.ctaTitle} />
    </>
  );
}
