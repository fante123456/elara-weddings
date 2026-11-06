import type { Metadata } from "next";
import { PortfolioPage } from "@/components/pages/portfolio-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("en").portfolio;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/en/portfolio" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/portfolio", "en"),
};

export default function Page() {
  return <PortfolioPage locale="en" />;
}
