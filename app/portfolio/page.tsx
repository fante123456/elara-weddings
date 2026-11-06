import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { Container, DemoNote } from "@/components/ui";
import { portfolioCategories } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Wedding Photography Portfolio",
  description:
    "Browse ceremony, couple portrait, detail and reception photography in the soft, romantic style of Elara Weddings, a fictional York studio.",
  alternates: { canonical: "/portfolio" },
  openGraph: pageOpenGraph("Portfolio | Elara Weddings", "/portfolio"),
};

export default function PortfolioPage() {
  const categories = portfolioCategories.map((c) => ({
    id: c.id,
    label: c.label,
    intro: c.intro,
    photos: c.photos.map((key) => photos[key]),
  }));

  return (
    <>
      <PageIntro eyebrow="Portfolio" title={<>Wedding days, told <em className="text-rose">softly</em></>}>
        <p>Ceremony, couple portraits, details and reception, in one warm, natural style.</p>
      </PageIntro>

      <section aria-label="Gallery" className="pb-24 lg:pb-32">
        <Container>
          <DemoNote className="mb-8">
            Sample imagery from Unsplash, fictional studio. Each photographer is credited in the viewer and on the{" "}
            <Link href="/credits" className="underline underline-offset-4">
              credits page
            </Link>
            .
          </DemoNote>
          <PortfolioGallery categories={categories} />
        </Container>
      </section>

      <CtaBand title="Imagine your own story here" />
    </>
  );
}
