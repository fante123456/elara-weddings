import { Star } from "lucide-react";
import { Container, Eyebrow, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { site, type Locale } from "@/lib/site";

/** Real Google reviews (quoted exactly), with the real rating and a link to all reviews. */
export function Reviews({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const r = d.reviews;
  return (
    <section aria-labelledby="words-title" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <h2 id="words-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
              <RichText t={r.title} />
            </h2>
          </div>
          <div>
            <p className="flex items-center gap-3">
              <span className="sr-only">{r.ratingLabel}</span>
              <span aria-hidden="true" className="flex gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span aria-hidden="true">
                <span className="font-display text-3xl font-light">{r.rating}</span>{" "}
                <span className="text-ink-muted">· {r.count}</span>
              </span>
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-3 inline-block text-[0.8rem] font-normal uppercase tracking-[0.18em]"
            >
              {r.all}
              <span className="sr-only"> {d.common.newTab}</span>
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {r.items.map((t, i) => (
            <figure key={t.author} className={`reveal max-w-xl border-t border-champagne pt-8 ${i === 1 ? "lg:mt-16" : ""}`}>
              <blockquote className="font-display text-[1.55rem] font-light italic leading-snug">
                {locale === "fr" ? `« ${t.quote} »` : `“${t.quote}”`}
              </blockquote>
              {t.translated && <p className="mt-3 text-sm text-ink-muted">{r.translatedNote}</p>}
              <figcaption className="mt-6">
                <span className="block font-normal">{t.author}</span>
                <span className="text-sm text-ink-muted">{r.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
