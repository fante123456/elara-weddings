// Real, public facts about the business (verified 6 Nov 2026, see the real-business prompt).
// Nothing here is invented: no email, prices, team or awards are public, so none are listed.
export type Locale = "fr" | "en";

export const site = {
  name: "Mélodye Huet – Photographe",
  shortName: "Mélodye Huet",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elara-weddings.ammar-rajabi.com",
  phone: { display: "06 18 92 22 39", href: "tel:+33618922239" },
  address: {
    street: "89 route des Potiers",
    postcode: "14490",
    city: "Noron-la-Poterie",
    area: "Calvados (14)",
    country: "France",
  },
  mapsUrl: "https://maps.google.com/?cid=16429266821692733434",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=89+route+des+Potiers%2C+14490+Noron-la-Poterie",
  facebookUrl: "https://www.facebook.com/profile.php?id=100067907715999",
  /** Her own Facebook bio, quoted as written. */
  bio: "votre photographe personnalisé dans le 14",
  rating: { value: 4.9, count: 91 },
} as const;

/** Prefix a site path with the locale ("/about" → "/en/about"). French is the default, unprefixed. */
export function localePath(locale: Locale, path: string) {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Shared Open Graph image (hero photo cropped to 1200×630 by Unsplash's CDN). */
export const ogImage = {
  url: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=1200&h=630&fit=crop&crop=faces&q=75&fm=jpg",
  width: 1200,
  height: 630,
  alt: "Bride and groom sharing a kiss in a meadow at sunset, her veil catching the golden light",
};

/** Page-level Open Graph that keeps the shared image (Next replaces, not merges, nested openGraph). */
export function pageOpenGraph(title: string, path: string, locale: Locale = "fr") {
  return {
    type: "website" as const,
    locale: locale === "fr" ? "fr_FR" : "en_GB",
    siteName: site.name,
    title,
    url: localePath(locale, path),
    images: [ogImage],
  };
}
