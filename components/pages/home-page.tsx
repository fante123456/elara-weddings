import Link from "next/link";
import { Phone } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { Reviews } from "@/components/reviews";
import { ButtonAnchor, Container, DemoNote, Eyebrow, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { localePath, site, type Locale } from "@/lib/site";

const numerals = ["i", "ii", "iii", "iv"];

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.home;
  const photos = getPhotos(locale);
  const href = (p: string) => localePath(locale, p);

  return (
    <>
      {/* Hero */}
      <section className="pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow className="fade-in">
              {t.eyebrow.split(" · ").map((part, i) => (
                <span key={part}>
                  {i > 0 && " · "}
                  <span className="whitespace-nowrap">{part}</span>
                </span>
              ))}
            </Eyebrow>
            <h1 className="fade-in mt-5 text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem]">
              <RichText t={t.title} emClassName="text-rose" />
            </h1>
            <p className="fade-in-delay mt-7 max-w-md text-lg text-ink-muted">{t.lead}</p>
            <div className="fade-in-delay mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <ButtonAnchor href={site.phone.href}>
                <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
                {d.common.callLabel}
              </ButtonAnchor>
              <Link href={href("/portfolio")} className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]">
                {t.gallery}
              </Link>
            </div>
          </div>

          <div className="order-first mx-auto w-[78%] max-w-md pt-3 sm:w-[62%] lg:order-none lg:col-span-5 lg:col-start-8 lg:w-full lg:max-w-none lg:pt-0">
            <div className="arch-line">
              <div className="arch relative aspect-[4/5] bg-champagne">
                <Photo photo={photos.hero} preload sizes="(min-width: 1024px) 40vw, (min-width: 640px) 62vw, 78vw" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Photographer intro */}
      <section aria-labelledby="intro-title" className="pb-24 lg:pb-32">
        <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="reveal relative aspect-square md:col-span-5">
            <Photo photo={photos.camera} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow>{t.introEyebrow}</Eyebrow>
            <h2 id="intro-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              <RichText t={t.introTitle} />
            </h2>
            <p className="mt-6 max-w-lg">{t.introText}</p>
            <Link href={href("/about")} className="link-underline mt-8 inline-block text-[0.8rem] font-normal uppercase tracking-[0.18em]">
              {t.introLink}
            </Link>
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      <section aria-labelledby="preview-title" className="pb-24 lg:pb-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>{t.previewEyebrow}</Eyebrow>
              <h2 id="preview-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
                <RichText t={t.previewTitle} />
              </h2>
            </div>
            <Link href={href("/portfolio")} className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]">
              {t.previewLink}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-6">
            <figure className="reveal col-span-2 lg:col-span-5 lg:row-span-2">
              <div className="relative aspect-[4/5]">
                <Photo photo={photos.goldenField} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <figcaption className="eyebrow mt-3">{t.captions.portraits}</figcaption>
              <DemoNote className="mt-8 hidden max-w-xs lg:block">
                {d.common.illustration}{" "}
                <Link href={href("/credits")} className="underline underline-offset-4">
                  {d.common.creditsLink}
                </Link>
              </DemoNote>
            </figure>
            <figure className="reveal lg:col-span-4 lg:mt-20">
              <div className="relative aspect-[3/4]">
                <Photo photo={photos.aisleBlush} sizes="(min-width: 1024px) 32vw, 50vw" />
              </div>
              <figcaption className="eyebrow mt-3">{t.captions.ceremony}</figcaption>
            </figure>
            <figure className="reveal mt-12 lg:col-span-3 lg:mt-48">
              <div className="relative aspect-[3/4]">
                <Photo photo={photos.rings} sizes="(min-width: 1024px) 24vw, 50vw" />
              </div>
              <figcaption className="eyebrow mt-3">{t.captions.details}</figcaption>
            </figure>
            <figure className="reveal col-span-2 lg:col-span-7 lg:col-start-6">
              <div className="relative aspect-[3/2]">
                <Photo photo={photos.longTable} sizes="(min-width: 1024px) 56vw, 100vw" />
              </div>
              <figcaption className="eyebrow mt-3">{t.captions.reception}</figcaption>
            </figure>
          </div>
          <DemoNote className="mt-8 lg:hidden">
            {d.common.illustration}{" "}
            <Link href={href("/credits")} className="underline underline-offset-4">
              {d.common.creditsLink}
            </Link>
          </DemoNote>
        </Container>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-blush py-24 lg:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="reveal relative aspect-[3/4] md:col-span-5">
            <Photo photo={photos.bouquetCouple} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Eyebrow>{t.servicesEyebrow}</Eyebrow>
            <h2 id="services-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              <RichText t={t.servicesTitle} />
            </h2>
            <ol className="mt-10 space-y-8">
              {d.services.map((s, i) => (
                <li key={s.id} className="reveal grid grid-cols-[3rem_1fr] border-t border-ink/15 pt-6">
                  <span aria-hidden="true" className="font-display text-3xl italic leading-none text-ink-muted">
                    {numerals[i]}
                  </span>
                  <div>
                    <h3 className="text-[1.9rem]">{s.name}</h3>
                    <p className="mt-2 text-ink-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="font-normal">{d.common.priceOnRequest}</span>
              <Link href={href("/packages")} className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]">
                {t.servicesLink}
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <Reviews locale={locale} />

      <CtaBand locale={locale} />
    </>
  );
}
