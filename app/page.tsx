import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { ButtonLink, Container, DemoNote, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { styleNotes, testimonials } from "@/lib/content";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Elara Weddings | Wedding Photographer in York" },
  description: site.description,
  alternates: { canonical: "/" },
};

const numerals = ["i", "ii", "iii"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow className="fade-in">Wedding photographer · York</Eyebrow>
            <h1 className="fade-in mt-5 text-[3.15rem] sm:text-7xl lg:text-[5.4rem]">
              Timeless wedding stories, captured with <em className="text-rose">elegance</em>
            </h1>
            <p className="fade-in-delay mt-7 max-w-md text-lg text-ink-muted">
              Natural, romantic photographs for couples marrying in York, North Yorkshire and beyond.
            </p>
            <div className="fade-in-delay mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <ButtonLink href="/contact">Check availability</ButtonLink>
              <Link href="/portfolio" className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]">
                View the portfolio
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
            <Eyebrow>Hello</Eyebrow>
            <h2 id="intro-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              I&apos;m Elara, and I photograph weddings the way they <em>feel</em>.
            </h2>
            <p className="mt-6 max-w-lg">
              From a small studio on Rose Lane in York, I tell wedding stories with soft natural light and a quiet,
              unhurried approach. You will spend the day with your people, not posing for a camera.
            </p>
            <Link href="/about" className="link-underline mt-8 inline-block text-[0.8rem] font-normal uppercase tracking-[0.18em]">
              Read my story
            </Link>
          </div>
        </Container>
      </section>

      {/* Portfolio preview */}
      <section aria-labelledby="preview-title" className="pb-24 lg:pb-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <h2 id="preview-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
                A glimpse of the <em>story</em>
              </h2>
            </div>
            <Link href="/portfolio" className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em]">
              See the full portfolio
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-6">
            <figure className="reveal col-span-2 lg:col-span-5 lg:row-span-2">
              <div className="relative aspect-[4/5]">
                <Photo photo={photos.goldenField} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <figcaption className="eyebrow mt-3">Couple portraits</figcaption>
              <DemoNote className="mt-8 hidden max-w-xs lg:block">
                Sample imagery from Unsplash for a fictional studio. Photographers are credited on the{" "}
                <Link href="/credits" className="underline underline-offset-4">
                  credits page
                </Link>
                .
              </DemoNote>
            </figure>
            <figure className="reveal lg:col-span-4 lg:mt-20">
              <div className="relative aspect-[3/4]">
                <Photo photo={photos.aisleBlush} sizes="(min-width: 1024px) 32vw, 50vw" />
              </div>
              <figcaption className="eyebrow mt-3">Ceremony</figcaption>
            </figure>
            <figure className="reveal mt-12 lg:col-span-3 lg:mt-48">
              <div className="relative aspect-[3/4]">
                <Photo photo={photos.rings} sizes="(min-width: 1024px) 24vw, 50vw" />
              </div>
              <figcaption className="eyebrow mt-3">Details</figcaption>
            </figure>
            <figure className="reveal col-span-2 lg:col-span-7 lg:col-start-6">
              <div className="relative aspect-[3/2]">
                <Photo photo={photos.longTable} sizes="(min-width: 1024px) 56vw, 100vw" />
              </div>
              <figcaption className="eyebrow mt-3">Reception</figcaption>
            </figure>
          </div>
          <DemoNote className="mt-8 lg:hidden">
            Sample imagery from Unsplash for a fictional studio.{" "}
            <Link href="/credits" className="underline underline-offset-4">
              Photo credits
            </Link>
          </DemoNote>
        </Container>
      </section>

      {/* Photography style */}
      <section aria-labelledby="style-title" className="bg-blush py-24 lg:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="reveal relative aspect-[3/4] md:col-span-5">
            <Photo photo={photos.bouquetCouple} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Eyebrow>Photography style</Eyebrow>
            <h2 id="style-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              Soft light, quiet moments, <em>nothing forced</em>
            </h2>
            <ol className="mt-10 space-y-8">
              {styleNotes.map((note, i) => (
                <li key={note.title} className="reveal grid grid-cols-[3rem_1fr] border-t border-ink/15 pt-6">
                  <span aria-hidden="true" className="font-display text-3xl italic leading-none text-ink-muted">
                    {numerals[i]}
                  </span>
                  <div>
                    <h3 className="text-[1.9rem]">{note.title}</h3>
                    <p className="mt-2 text-ink-muted">{note.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Testimonials (demo) */}
      <section aria-labelledby="words-title" className="py-24 lg:py-32">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Kind words</Eyebrow>
            <h2 id="words-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              What couples <em>remember</em>
            </h2>
            <DemoNote className="mt-5">Demo testimonials, written for this sample site. Not real clients.</DemoNote>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t, i) => (
              <figure key={t.couple} className={`reveal max-w-xl border-t border-champagne pt-8 ${i === 1 ? "lg:mt-16" : ""}`}>
                <blockquote className="font-display text-[1.65rem] font-light italic leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-normal">{t.couple}</span>
                  <span className="text-sm text-ink-muted">{t.venue}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
