import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { getDict } from "@/lib/content";

const t = getDict("en").meta;

export const metadata: Metadata = {
  title: { absolute: t.homeTitle },
  description: t.description,
  alternates: { canonical: "/en" },
};

export default function Page() {
  return <HomePage locale="en" />;
}
