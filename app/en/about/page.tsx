import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("en").about;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/en/about" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/about", "en"),
};

export default function Page() {
  return <AboutPage locale="en" />;
}
