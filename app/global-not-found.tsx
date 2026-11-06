import type { Metadata } from "next";
import Link from "next/link";
import { TextLogo } from "@/components/brand";
import { Container, Eyebrow } from "@/components/ui";
import { fontClasses } from "@/lib/fonts";
import { site } from "@/lib/site";
import "./globals.css";

// Two root layouts (French and English), so the 404 page is global and bilingual.
export const metadata: Metadata = {
  title: "Page introuvable | Mélodye Huet – Photographe",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={fontClasses}>
      <body className="flex min-h-dvh flex-col bg-ivory text-ink antialiased">
        <p className="flex h-9 items-center justify-center bg-ink px-4 text-center text-[0.75rem] font-normal tracking-[0.08em] text-ivory">
          Projet d&apos;entraînement – site non officiel
        </p>
        <header className="border-b border-ink/10">
          <Container className="flex h-20 items-center">
            <Link href="/" aria-label="Mélodye Huet – Photographe, accueil">
              <TextLogo />
            </Link>
          </Container>
        </header>
        <main className="flex-1 py-24 lg:py-36">
          <Container className="max-w-2xl text-center">
            <Eyebrow>Page introuvable</Eyebrow>
            <h1 className="mt-5 text-6xl sm:text-7xl">
              Cette page <em className="text-rose">n&apos;existe pas</em>
            </h1>
            <p className="mt-6 text-ink-muted">Le lien est peut-être ancien, ou la page a changé d&apos;adresse.</p>
            <Link
              href="/"
              className="mt-10 inline-flex min-h-12 items-center justify-center bg-ink px-7 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory hover:bg-[#4a3830]"
            >
              Retour à l&apos;accueil
            </Link>
            <p lang="en" className="mt-12 border-t border-ink/15 pt-6 text-ink-muted">
              Page not found.{" "}
              <Link href="/en" className="link-underline text-ink">
                Go to the English home page
              </Link>
              . Or call {site.phone.display}.
            </p>
          </Container>
        </main>
      </body>
    </html>
  );
}
