import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { getDict } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

const t = getDict("fr").contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph(`${t.metaTitle} | ${site.name}`, "/contact", "fr"),
};

export default function Page() {
  return <ContactPage locale="fr" />;
}
