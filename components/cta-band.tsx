import Link from "next/link";
import { Phone } from "lucide-react";
import { Photo } from "@/components/photo";
import { ButtonAnchor, Container, Eyebrow } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { localePath, site, type Locale } from "@/lib/site";

export function CtaBand({ locale, title, text }: { locale: Locale; title?: string; text?: string }) {
  const d = getDict(locale);
  const photos = getPhotos(locale);
  return (
    <section aria-labelledby="cta-title" className="bg-champagne py-20 lg:py-28">
      <Container className="grid items-center gap-14 md:grid-cols-12 md:gap-8">
        <div className="mx-auto w-[72%] max-w-xs md:col-span-4 md:col-start-2 md:w-full md:max-w-none">
          <div className="arch-line reveal">
            <div className="arch relative aspect-[3/4] bg-blush">
              <Photo photo={photos.veilKiss} sizes="(min-width: 768px) 30vw, 72vw" />
            </div>
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7">
          <Eyebrow>{d.cta.eyebrow}</Eyebrow>
          <h2 id="cta-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
            {title ?? d.cta.title}
          </h2>
          <p className="mt-6 max-w-md">{text ?? d.cta.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <ButtonAnchor href={site.phone.href}>
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
              {d.common.callLabel}
            </ButtonAnchor>
            <Link
              href={localePath(locale, "/contact")}
              className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]"
            >
              {d.cta.contact}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
