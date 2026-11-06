import type { Metadata, Viewport } from "next";
import { getDict } from "@/lib/content";
import { ogImage, site, type Locale } from "@/lib/site";

/** Site-wide metadata for one language. Demo branch: never indexed. */
export function rootMetadata(locale: Locale): Metadata {
  const t = getDict(locale).meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.homeTitle, template: t.template },
    description: t.description,
    applicationName: site.name,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      siteName: site.name,
      title: t.homeTitle,
      description: t.description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#faf4ea",
  width: "device-width",
  initialScale: 1,
};
