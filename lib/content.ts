import type { PhotoKey } from "@/lib/photos";

/** Demo testimonials, written for this sample site. Not real clients. */
export const testimonials = [
  {
    quote:
      "We barely noticed a camera all day, yet every quiet glance is there. Looking through the gallery felt like living the day again, only slower.",
    couple: "Hannah & Tom",
    venue: "A garden wedding near Harrogate",
  },
  {
    quote:
      "Calm, kind and so organised. Our portraits took twenty minutes and they are the photographs our families ask to see first.",
    couple: "Priya & James",
    venue: "A city wedding in York",
  },
  {
    quote:
      "The light, the colours, the little details we had forgotten about. It is exactly how the day felt, soft and warm and full of love.",
    couple: "Sophie & Ellis",
    venue: "A barn wedding in the Dales",
  },
] as const;

export const styleNotes = [
  {
    title: "Natural light",
    text: "Soft, warm and true to colour. No heavy filters, so your photographs still feel right in thirty years.",
  },
  {
    title: "Gentle direction",
    text: "A few relaxed prompts for portraits, then I step back and let the day unfold on its own.",
  },
  {
    title: "Honest moments",
    text: "Glances, laughter and the small in-between details that make your story yours.",
  },
] as const;

export type PackageItem = {
  id: string;
  name: string;
  summary: string;
  price: string;
  coverage: string;
  gallery: string;
  includes: string[];
};

/** Fictional prices in GBP for this sample site. Every card uses the same structure. */
export const packages: PackageItem[] = [
  {
    id: "essential",
    name: "Essential Collection",
    summary: "For intimate ceremonies and small celebrations that want the key moments told beautifully.",
    price: "£1,450",
    coverage: "Up to 4 hours",
    gallery: "300+ edited images",
    includes: [
      "Ceremony, couple portraits and family groups",
      "Planning call and a simple day timeline",
      "Private online gallery to share and download",
      "Print release for personal use",
    ],
  },
  {
    id: "signature",
    name: "Signature Collection",
    summary: "Our most balanced collection, from the final touches before the ceremony to the first dance.",
    price: "£2,350",
    coverage: "Up to 8 hours",
    gallery: "550+ edited images",
    includes: [
      "Bridal preparations through to the first dance",
      "Planning call, timeline and venue walk-through",
      "Private online gallery to share and download",
      "Print release and a curated preview within a week",
    ],
  },
  {
    id: "full-day",
    name: "Full Day Story",
    summary: "The whole story, morning to evening, with a pre-wedding portrait session to get comfortable first.",
    price: "£3,250",
    coverage: "Up to 11 hours",
    gallery: "800+ edited images",
    includes: [
      "Morning preparations to the evening party",
      "Pre-wedding portrait session in York",
      "Second photographer for both families",
      "Linen-bound album with 30 printed spreads",
    ],
  },
];

export const portfolioCategories: { id: "ceremony" | "portraits" | "details" | "reception"; label: string; intro: string; photos: PhotoKey[] }[] = [
  {
    id: "ceremony",
    label: "Ceremony",
    intro: "Aisles, vows and the walk back out as newlyweds.",
    photos: ["aisleBlush", "archWalk", "lawnCeremony", "archWhite", "timberCeremony"],
  },
  {
    id: "portraits",
    label: "Couple Portraits",
    intro: "Unhurried portraits in soft, golden light.",
    photos: ["goldenField", "vineyard", "veilField", "hillside", "jetty", "bouquetCouple", "veilKiss", "hero"],
  },
  {
    id: "details",
    label: "Details",
    intro: "Rings, stationery, shoes and flowers, the things you chose with care.",
    photos: ["rings", "pearls", "handsRoses", "shoesAnemone", "heelsWindow", "invitation"],
  },
  {
    id: "reception",
    label: "Reception",
    intro: "Long tables, raised glasses and the first dance.",
    photos: ["longTable", "firstDance", "tentReception", "glassesTable", "placeSettings", "toast"],
  },
];
