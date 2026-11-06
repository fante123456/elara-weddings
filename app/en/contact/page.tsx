import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("en").contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/en/contact" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/contact", "en"),
};

export default function Page() {
  return <ContactPage locale="en" />;
}
