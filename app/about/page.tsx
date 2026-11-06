import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { Container, Eyebrow } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Elara",
  description:
    "Meet Elara, the fictional York wedding photographer behind Elara Weddings: a calm, natural-light approach to romantic, timeless wedding photography.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph("About Elara | Elara Weddings", "/about"),
};

const approach = [
  {
    title: "Before the day",
    text: "A relaxed video call to hear your plans, then a gentle timeline built around the light at your venue.",
  },
  {
    title: "On the day",
    text: "I arrive early, stay quiet and keep portraits short, so you can spend your time with the people who came for you.",
  },
  {
    title: "After the day",
    text: "Every image is edited by hand in a soft, warm style, then delivered in a private gallery to share with family.",
  },
];

const values = [
  { title: "Calm", text: "A steady, kind presence when the day moves quickly." },
  { title: "Honest", text: "Real moments, true colours and no over-editing." },
  { title: "Thoughtful", text: "Small details noticed and remembered." },
  { title: "Timeless", text: "Photographs that still feel right decades from now." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={<>The story behind <em className="text-rose">Elara</em></>}>
        <p>A small wedding photography studio in York, built on soft light and patience.</p>
      </PageIntro>

      {/* Story */}
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
            <Eyebrow>My story</Eyebrow>
            <h2 id="story-title" className="mt-4 text-[2.6rem] sm:text-5xl">
              It began with a borrowed camera and a friend&apos;s garden wedding
            </h2>
            <div className="mt-6 space-y-5">
              <p>
                I was a guest with a camera around my neck, catching the moments nobody had planned: a father fixing a
                veil, a grandmother laughing at the back. When the couple saw those photographs, they cried. I knew then
                that this was the work I wanted to do.
              </p>
              <p>
                Elara Weddings grew from that day into a small studio on Rose Lane, a few minutes&apos; walk from York
                Minster. I photograph a limited number of weddings each year, so every couple has my full attention.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Creative style */}
      <section aria-labelledby="creative-title" className="bg-blush py-24 lg:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="reveal md:col-span-6">
            <Eyebrow>Creative style</Eyebrow>
            <h2 id="creative-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              Editorial in eye, <em>gentle</em> in spirit
            </h2>
            <p className="mt-6 max-w-lg">
              I look for clean compositions, soft window light and warm, natural colour. The result is calm and quietly
              romantic: images that feel like a magazine story without ever feeling staged.
            </p>
          </div>
          <div className="reveal relative aspect-square md:col-span-5 md:col-start-8">
            <Photo photo={photos.camera} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="py-24 lg:py-32">
        <Container>
          <Eyebrow>Approach</Eyebrow>
          <h2 id="approach-title" className="mt-4 max-w-2xl text-[2.6rem] sm:text-5xl lg:text-6xl">
            How a wedding with me unfolds
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {approach.map((step, i) => (
              <li key={step.title} className="reveal border-t border-champagne pt-7">
                <span aria-hidden="true" className="font-display text-2xl italic text-ink-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[2rem]">{step.title}</h3>
                <p className="mt-3 text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="pb-24 lg:pb-32">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Eyebrow>Values</Eyebrow>
            <h2 id="values-title" className="mt-4 text-[2.6rem] sm:text-5xl">
              What I hold <em>close</em>
            </h2>
            <p className="mt-6 text-ink-muted">
              Curious about the collections?{" "}
              <Link href="/packages" className="link-underline text-ink">
                See packages
              </Link>
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {values.map((v) => (
              <div key={v.title} className="reveal">
                <dt className="font-display text-[2rem] font-light">{v.title}</dt>
                <dd className="mt-2 text-ink-muted">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="Shall we talk about your day?" />
    </>
  );
}
