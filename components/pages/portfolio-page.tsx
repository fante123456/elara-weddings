import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { Container, DemoNote, RichText } from "@/components/ui";
import { getDict, portfolioCategories } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import { localePath, type Locale } from "@/lib/site";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.portfolio;
  const photos = getPhotos(locale);
  const categories = portfolioCategories.map((c) => ({
    id: c.id,
    label: t.categories[c.id].label,
    intro: t.categories[c.id].intro,
    photos: c.photos.map((key) => photos[key]),
  }));

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={<RichText t={t.title} emClassName="text-rose" />}>
        <p>{t.lead}</p>
      </PageIntro>

      <section aria-label={t.eyebrow} className="pb-24 lg:pb-32">
        <Container>
          <DemoNote className="mb-8">
            {t.note}
            <Link href={localePath(locale, "/credits")} className="underline underline-offset-4">
              {t.noteLink}
            </Link>
            .
          </DemoNote>
          <PortfolioGallery categories={categories} locale={locale} />
        </Container>
      </section>

      <CtaBand locale={locale} title={t.ctaTitle} />
    </>
  );
}
