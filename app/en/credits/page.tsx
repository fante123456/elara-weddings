import type { Metadata } from "next";
import { CreditsPage } from "@/components/pages/credits-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("en").credits;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/en/credits" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/credits", "en"),
};

export default function Page() {
  return <CreditsPage locale="en" />;
}
