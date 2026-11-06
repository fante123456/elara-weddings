import { CtaBand } from "@/components/cta-band";
import { AddressBlock, HoursList, MapsButtons } from "@/components/brand";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { Container, Eyebrow, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { site, type Locale } from "@/lib/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.about;
  const c = d.common;
  const photos = getPhotos(locale);

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={<RichText t={t.title} emClassName="text-rose" />}>
        <p>{t.lead}</p>
      </PageIntro>

      {/* Her own description */}
      <section aria-labelledby="story-title" className="pb-24 lg:pb-32">
        <Container className="grid items-start gap-14 md:grid-cols-12 md:gap-8">
          <div className="mx-auto w-[86%] max-w-sm md:col-span-5 md:w-full md:max-w-none">
            <div className="arch-line reveal">
              <div className="arch relative aspect-[3/4] bg-champagne">
                <Photo photo={photos.brideWindow} sizes="(min-width: 768px) 40vw, 86vw" />
              </div>
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7 md:pt-10">
            <Eyebrow>{t.storyEyebrow}</Eyebrow>
            <h2 id="story-title" className="mt-4 text-[2.6rem] sm:text-5xl">
              {t.storyTitle}
            </h2>
            <div className="mt-6 space-y-5">
              {t.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* In her clients' words */}
      <section aria-labelledby="way-title" className="bg-blush py-24 lg:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="reveal md:col-span-6">
            <Eyebrow>{t.wayEyebrow}</Eyebrow>
            <h2 id="way-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              <RichText t={t.wayTitle} />
            </h2>
            <p className="mt-6 max-w-lg">{t.way}</p>
          </div>
          <div className="reveal relative aspect-square md:col-span-5 md:col-start-8">
            <Photo photo={photos.camera} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </Container>
      </section>

      {/* Practical details */}
      <section aria-labelledby="info-title" className="py-24 lg:py-32">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Eyebrow>{t.infoEyebrow}</Eyebrow>
            <h2 id="info-title" className="mt-4 text-[2.6rem] sm:text-5xl">
              <RichText t={t.infoTitle} />
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              <div className="reveal">
                <dt className="font-display text-[2rem] font-light">{c.labels.address}</dt>
                <dd className="mt-2">
                  <AddressBlock locale={locale} />
                </dd>
              </div>
              <div className="reveal">
                <dt className="font-display text-[2rem] font-light">{c.labels.phone}</dt>
                <dd className="mt-2">
                  <a href={site.phone.href} className="link-underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div className="reveal">
                <dt className="font-display text-[2rem] font-light">{c.labels.hours}</dt>
                <dd className="mt-2">
                  <HoursList locale={locale} />
                </dd>
              </div>
              <div className="reveal">
                <dt className="font-display text-[2rem] font-light">{c.labels.prices}</dt>
                <dd className="mt-2">{c.priceOnRequest}</dd>
              </div>
            </dl>
            <MapsButtons locale={locale} className="mt-12" />
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} title={t.ctaTitle} />
    </>
  );
}
