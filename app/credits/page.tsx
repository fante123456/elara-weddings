import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Container } from "@/components/ui";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits for the Unsplash photographers whose sample imagery appears on the fictional Elara Weddings website.",
  alternates: { canonical: "/credits" },
};

const utm = "?utm_source=elara_weddings&utm_medium=referral";

export default function CreditsPage() {
  const list = Object.values(photos);

  return (
    <>
      <PageIntro eyebrow="Credits" title={<>With thanks to the <em className="text-rose">photographers</em></>}>
        <p>
          Elara Weddings is a fictional studio made for a student design project. The photographs are sample imagery
          used under the free Unsplash licence. They are not the work of Elara Weddings.
        </p>
      </PageIntro>
      <section aria-labelledby="credits-title" className="pb-24 lg:pb-32">
        <Container>
          <h2 id="credits-title" className="sr-only">
            Photograph credits
          </h2>
          <ul className="grid gap-x-10 border-t border-ink/15 md:grid-cols-2">
            {list.map((p) => (
              <li key={p.src} className="border-b border-ink/15 py-5">
                <p>{p.alt}</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Photo by{" "}
                  <a href={`https://unsplash.com/@${p.credit.username}${utm}`} className="link-underline text-ink" target="_blank" rel="noopener noreferrer">
                    {p.credit.name}
                  </a>{" "}
                  on{" "}
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
