export const site = {
  name: "Elara Weddings",
  tagline: "Timeless wedding stories, captured with elegance",
  description:
    "Elara Weddings is a fictional wedding photography studio in York creating elegant, romantic and timeless wedding stories.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elara-weddings.ammar-rajabi.com",
  phone: { display: "01904 555 118", href: "tel:+441904555118" },
  email: "hello@elaraweddings.co.uk",
  address: {
    street: "31 Rose Lane",
    city: "York",
    postcode: "YO1 7PX",
    country: "United Kingdom",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
] as const;

/** Shared Open Graph image (hero photo cropped to 1200×630 by Unsplash's CDN). */
export const ogImage = {
  url: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=1200&h=630&fit=crop&crop=faces&q=75&fm=jpg",
  width: 1200,
  height: 630,
  alt: "Bride and groom sharing a kiss in a meadow at sunset, her veil catching the golden light",
};

/** Page-level Open Graph that keeps the shared image (Next replaces, not merges, nested openGraph). */
export function pageOpenGraph(title: string, path: string) {
  return {
    type: "website" as const,
    locale: "en_GB",
    siteName: site.name,
    title,
    url: path,
    images: [ogImage],
  };
}
