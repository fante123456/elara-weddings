import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { ButtonLink, Container, DemoNote } from "@/components/ui";
import { packages } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Wedding Photography Packages",
  description:
    "Compare the Essential Collection, Signature Collection and Full Day Story wedding photography packages from Elara Weddings in York. Fictional GBP prices.",
  alternates: { canonical: "/packages" },
  openGraph: pageOpenGraph("Packages | Elara Weddings", "/packages"),
};

export default function PackagesPage() {
  return (
    <>
      <PageIntro eyebrow="Packages" title={<>Three ways to tell your <em className="text-rose">story</em></>}>
        <p>Every collection includes a planning call, a hand-edited gallery and my full attention on the day.</p>
      </PageIntro>

      <div className="reveal relative mx-auto aspect-[16/9] w-full max-w-[1280px] sm:aspect-[21/9] lg:px-12">
        <div className="relative h-full w-full">
          <Photo photo={photos.archBouquet} sizes="(min-width: 1280px) 1184px, 100vw" />
        </div>
      </div>

      <section aria-labelledby="packages-title" className="pb-24 pt-12 lg:py-24">
        <Container>
          <h2 id="packages-title" className="sr-only">
            Compare packages
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <article
                key={pkg.id}
                aria-labelledby={`pkg-${pkg.id}`}
                className={`reveal flex flex-col border border-ink/12 p-7 sm:p-9 ${i === 1 ? "bg-blush" : "bg-ivory"}`}
              >
                <h3 id={`pkg-${pkg.id}`} className="text-[2.2rem]">
                  {pkg.name}
                </h3>
                <p className="mt-3 min-h-[5.1em] text-ink-muted">{pkg.summary}</p>

                <p className="mt-6 border-t border-ink/15 pt-6">
                  <span className="block text-sm text-ink-muted">From</span>
                  <span className="font-display text-5xl font-light">{pkg.price}</span>
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/15 py-5 text-sm">
                  <div>
                    <dt className="eyebrow">Coverage</dt>
                    <dd className="mt-1 font-normal">{pkg.coverage}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Gallery</dt>
                    <dd className="mt-1 font-normal">{pkg.gallery}</dd>
                  </div>
                </dl>

                <h4 className="eyebrow mt-6">What&apos;s included</h4>
                <ul className="mt-4 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1.5 h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/contact"
                  variant={i === 1 ? "solid" : "ghost"}
                  className="mt-9 w-full"
                  aria-label={`Check availability for the ${pkg.name}`}
                >
                  Check availability
                </ButtonLink>
              </article>
            ))}
          </div>
          <DemoNote className="mt-10">
            Prices are fictional, for this sample site only. All collections include travel within 30 miles of York.
          </DemoNote>
        </Container>
      </section>

      <CtaBand title="Not sure which suits you?" text="Share a few details about your day and I will suggest the collection that fits best." />
    </>
  );
}
