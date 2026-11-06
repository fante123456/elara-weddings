import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("en").servicesPage;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/en/packages" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/packages", "en"),
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
