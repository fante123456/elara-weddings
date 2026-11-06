import { PageIntro } from "@/components/page-intro";
import { Container, RichText } from "@/components/ui";
import { getDict } from "@/lib/content";
import { getPhotos } from "@/lib/photos-i18n";
import type { Locale } from "@/lib/site";

const utm = "?utm_source=melodye_huet_demo&utm_medium=referral";

export function CreditsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).credits;
  const list = Object.values(getPhotos(locale));

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={<RichText t={t.title} emClassName="text-rose" />}>
        <p>{t.lead}</p>
      </PageIntro>
      <section aria-labelledby="credits-title" className="pb-24 lg:pb-32">
        <Container>
          <h2 id="credits-title" className="sr-only">
            {t.heading}
          </h2>
          <ul className="grid gap-x-10 border-t border-ink/15 md:grid-cols-2">
            {list.map((p) => (
              <li key={p.src} className="border-b border-ink/15 py-5">
                <p>{p.alt}</p>
                <p className="mt-1 text-sm text-ink-muted">
                  {t.photoBy}{" "}
                  <a href={`https://unsplash.com/@${p.credit.username}${utm}`} className="link-underline text-ink" target="_blank" rel="noopener noreferrer">
                    {p.credit.name}
                  </a>{" "}
                  {t.on}{" "}
                  <a href={`${p.credit.photoUrl}${utm}`} className="link-underline text-ink" target="_blank" rel="noopener noreferrer">
                    Unsplash
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
