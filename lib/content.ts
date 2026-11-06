import type { PhotoKey } from "@/lib/photos";
import { site, type Locale } from "@/lib/site";

/** A title with one emphasised part: [before, emphasis, after]. */
export type Rich = readonly [string, string, string?];

export type ServiceId = "mariage" | "grossesse" | "naissance" | "famille";
type Service = { id: ServiceId; name: string; text: string };

type Review = { author: string; quote: string; translated: boolean };

const phone = site.phone.display;

/** Real Google reviews, quoted exactly (French originals). English versions are translations. */
const reviewsFr: Review[] = [
  {
    author: "Adrien A.",
    quote:
      "Elle s'est montrée à la fois professionnelle, discrète et très attentive, en sachant parfaitement saisir les moments importants de cette journée.",
    translated: false,
  },
  {
    author: "Marina C.",
    quote:
      "Elle est douce, patiente et très professionnelle. Elle sait mettre à l'aise, prend le temps qu'il faut et capture de magnifiques moments remplis d'émotion.",
    translated: false,
  },
  {
    author: "Aurélie",
    quote:
      "J'ai connu Mélodye il y a déjà 4 ans pour mon mariage, ma première grossesse + le shooting bébé la même année. J'ai tout de suite aimé son style.",
    translated: false,
  },
];

const reviewsEn: Review[] = [
  {
    author: "Adrien A.",
    quote:
      "She was professional, discreet and very attentive all at once, and knew exactly how to capture the important moments of the day.",
    translated: true,
  },
  {
    author: "Marina C.",
    quote:
      "She is gentle, patient and very professional. She knows how to put you at ease, takes the time needed and captures beautiful moments full of emotion.",
    translated: true,
  },
  {
    author: "Aurélie",
    quote:
      "I met Mélodye 4 years ago for my wedding, my first pregnancy + the baby shoot the same year. I loved her style straight away.",
    translated: true,
  },
];

const fr = {
  meta: {
    homeTitle: "Mélodye Huet – Photographe à Noron-la-Poterie (Calvados)",
    template: "%s | Mélodye Huet – Photographe",
    description:
      "Mélodye Huet, photographe de mariage, grossesse, naissance et famille à Noron-la-Poterie, près de Bayeux (Calvados). Tarifs sur demande.",
  },
  common: {
    banner: "Projet d'entraînement – site non officiel",
    skip: "Aller au contenu",
    nav: [
      { href: "/", label: "Accueil" },
      { href: "/about", label: "À propos" },
      { href: "/portfolio", label: "Galerie" },
      { href: "/packages", label: "Prestations" },
      { href: "/contact", label: "Contact" },
    ],
    navMain: "Navigation principale",
    navMobile: "Menu mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    logoHome: "Mélodye Huet – Photographe, accueil",
    logoSub: "Photographe",
    language: "Choisir la langue",
    callLabel: `Appeler le ${phone}`,
    callShort: "Appeler",
    maps: "Voir sur Google Maps",
    directions: "Itinéraire",
    facebook: "Page Facebook",
    newTab: "(nouvel onglet)",
    priceOnRequest: "Tarifs sur demande",
    illustration: "Photos d'illustration (Unsplash) : ce ne sont pas les photos de Mélodye Huet.",
    creditsLink: "Crédits photo",
    labels: { address: "Adresse", phone: "Téléphone", hours: "Horaires", prices: "Tarifs", facebook: "Facebook" },
    hours: [
      ["Lundi – vendredi", "9h – 19h"],
      ["Samedi", "9h30 – 19h"],
      ["Dimanche", "Fermé"],
    ] as [string, string][],
    area: "près de Bayeux, Calvados (14)",
  },
  footer: {
    tagline: "« Votre photographe personnalisé dans le 14 »",
    contact: "Contact",
    pages: "Pages",
    demo: "Démo réalisée par Ammar Rajabi à titre d'entraînement. Le propriétaire peut demander sa suppression.",
    photos: "Photos d'illustration : Unsplash.",
    credits: "Voir les crédits photo",
  },
  cta: {
    eyebrow: "Votre projet",
    title: "Un mariage ou une séance en vue ?",
    text: `Appelez Mélodye au ${phone} pour parler de votre date et de vos envies. Tarifs sur demande.`,
    contact: "Page contact",
  },
  services: [
    { id: "mariage", name: "Mariage", text: "Pour garder les moments importants de votre journée." },
    { id: "grossesse", name: "Grossesse", text: "Une séance photo pendant la grossesse, pour garder un souvenir de l'attente." },
    { id: "naissance", name: "Naissance et bébé", text: "Une séance naissance avec votre nouveau-né, ou une séance bébé un peu plus tard." },
    { id: "famille", name: "Famille à domicile", text: "Une séance en famille, chez vous, dans un cadre que vous connaissez." },
  ] as Service[],
  reviews: {
    items: reviewsFr,
    eyebrow: "Avis Google",
    title: ["Ce que disent ", "ses clients"] as Rich,
    rating: "4,9/5",
    count: "91 avis Google",
    ratingLabel: "Note Google : 4,9 sur 5, 91 avis",
    all: "Voir tous les avis sur Google",
    source: "Avis Google",
    translatedNote: "",
  },
  home: {
    eyebrow: "Photographe · Noron-la-Poterie, Calvados",
    title: ["Mariage, grossesse, naissance et famille, ", "dans le Calvados"] as Rich,
    lead: "Mélodye Huet photographie les grands moments de la vie, près de Bayeux. « Votre photographe personnalisé dans le 14 », comme elle se présente.",
    gallery: "Voir la galerie",
    introEyebrow: "La photographe",
    introTitle: ["Mélodye Huet, photographe ", "près de Bayeux"] as Rich,
    introText:
      "Installée à Noron-la-Poterie, Mélodye photographie les mariages, les grossesses, les naissances, les bébés et les familles, à domicile. Beaucoup de ses clients reviennent vers elle pour plusieurs moments de leur vie.",
    introLink: "En savoir plus",
    previewEyebrow: "Galerie",
    previewTitle: ["Un aperçu en ", "images"] as Rich,
    previewLink: "Voir toute la galerie",
    captions: { portraits: "Couple", ceremony: "Cérémonie", details: "Détails", reception: "Réception" },
    servicesEyebrow: "Prestations",
    servicesTitle: ["Pour chaque moment ", "de la vie"] as Rich,
    servicesLink: "Voir les prestations",
  },
  about: {
    metaTitle: "À propos",
    metaDescription:
      "Mélodye Huet, photographe de mariage, grossesse, naissance et famille à Noron-la-Poterie (Calvados), près de Bayeux.",
    eyebrow: "À propos",
    title: ["Mélodye Huet, ", "photographe"] as Rich,
    lead: "Photographe de mariage, de grossesse, de naissance et de famille à Noron-la-Poterie, près de Bayeux.",
    storyEyebrow: "Dans le Calvados",
    storyTitle: "« Votre photographe personnalisé dans le 14 »",
    story: [
      "C'est ainsi que Mélodye Huet se présente. Elle accompagne les couples le jour de leur mariage, puis les familles pour les moments qui suivent : la grossesse, la naissance, les premiers mois de bébé et les séances en famille à domicile.",
      "Beaucoup de ses clients reviennent vers elle pour plusieurs moments de leur vie. Aurélie raconte l'avoir connue « il y a déjà 4 ans pour [son] mariage, [sa] première grossesse + le shooting bébé la même année ».",
    ],
    wayEyebrow: "Sa façon de travailler",
    wayTitle: ["Selon ", "ses clients"] as Rich,
    way: "Dans leurs avis Google, ses clients la décrivent comme « professionnelle, discrète et très attentive ». Elle est « douce, patiente », sait « mettre à l'aise » et « prend le temps qu'il faut ».",
    infoEyebrow: "Infos pratiques",
    infoTitle: ["Où et ", "quand"] as Rich,
    ctaTitle: "Parlons de votre projet ?",
  },
  servicesPage: {
    metaTitle: "Prestations",
    metaDescription:
      "Mariage, grossesse, naissance, bébé et famille à domicile : les prestations de Mélodye Huet, photographe à Noron-la-Poterie (Calvados). Tarifs sur demande.",
    eyebrow: "Prestations",
    title: ["Pour chaque ", "moment", " de la vie"] as Rich,
    lead: "Mariage, grossesse, naissance, bébé et famille à domicile. Les tarifs sont donnés sur demande.",
    heading: "Les prestations",
    priceLabel: "Tarif",
    priceValue: "Sur demande",
    ask: "Demander un tarif",
    askFor: "Demander un tarif : ",
    note: `Les tarifs ne sont pas publics : demandez-les à Mélodye par téléphone, au ${phone}.`,
    ctaTitle: "Une question sur une séance ?",
  },
  portfolio: {
    metaTitle: "Galerie",
    metaDescription:
      "Galerie de photos de mariage (images d'illustration) du site de démonstration de Mélodye Huet, photographe à Noron-la-Poterie (Calvados).",
    eyebrow: "Galerie",
    title: ["Des mariages, racontés ", "en douceur"] as Rich,
    lead: "Cérémonie, couple, détails et réception.",
    note: "Photos d'illustration provenant d'Unsplash : ce ne sont pas les photos de Mélodye Huet. Chaque photographe est crédité dans la visionneuse et sur la page ",
    noteLink: "crédits",
    ctaTitle: "Envie d'en parler ?",
    categories: {
      ceremony: { label: "Cérémonie", intro: "Allées, vœux et sortie des jeunes mariés." },
      portraits: { label: "Couple", intro: "Des portraits sans se presser, dans une lumière douce." },
      details: { label: "Détails", intro: "Alliances, papeterie, chaussures et fleurs." },
      reception: { label: "Réception", intro: "Longues tables, verres levés et première danse." },
    },
  },
  gallery: {
    all: "Tout",
    filter: "Filtrer les photos",
    showing: (n: number, label?: string) => `${n} photos affichées${label ? ` · ${label}` : ""}.`,
    viewer: "Visionneuse de photos",
    close: "Fermer la visionneuse",
    prev: "Photo précédente",
    next: "Photo suivante",
    open: "Agrandir : ",
    photoBy: "Photo de",
    onUnsplash: "sur Unsplash",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: `Contactez Mélodye Huet, photographe à Noron-la-Poterie (Calvados) : ${phone}, 89 route des Potiers. Du lundi au samedi.`,
    eyebrow: "Contact",
    title: ["Parlons de votre ", "projet"] as Rich,
    lead: `Le plus simple est d'appeler Mélodye au ${phone}, du lundi au samedi.`,
    aside: "Coordonnées",
    sectionLabel: "Coordonnées et formulaire",
  },
  form: {
    title: "Votre demande",
    required: "Les champs marqués",
    requiredSr: "d'un astérisque",
    requiredEnd: "sont obligatoires.",
    optional: "(facultatif)",
    labels: {
      name: "Votre nom",
      email: "Adresse e-mail",
      date: "Date souhaitée",
      venue: "Lieu",
      guests: "Nombre d'invités",
      package: "Prestation",
      message: "Votre message",
    },
    dateHint: "Une date approximative suffit.",
    guestsHint: "Pour un mariage, à peu près.",
    notSure: "Je ne sais pas encore",
    submit: "Envoyer",
    demoTitle: `Formulaire de démonstration – appelez le ${phone}`,
    demoText: "Ce site n'est pas officiel : rien n'a été envoyé ni enregistré.",
    back: "Revenir au formulaire",
    footnote: "Formulaire de démonstration : rien n'est envoyé.",
  },
  credits: {
    metaTitle: "Crédits photo",
    metaDescription:
      "Crédits des photographes Unsplash dont les images d'illustration apparaissent sur ce site de démonstration pour Mélodye Huet, photographe dans le Calvados.",
    eyebrow: "Crédits",
    title: ["Merci aux ", "photographes"] as Rich,
    lead: "Ce site est un projet d'entraînement non officiel pour Mélodye Huet – Photographe. Les photos sont des images d'illustration utilisées sous la licence Unsplash : ce ne sont pas les photos de Mélodye Huet.",
    heading: "Crédits des photographies",
    photoBy: "Photo de",
    on: "sur",
  },
};

export type Dict = typeof fr;

const en: Dict = {
  meta: {
    homeTitle: "Mélodye Huet – Photographer in Noron-la-Poterie (Calvados, France)",
    template: "%s | Mélodye Huet – Photographer",
    description:
      "Mélodye Huet, wedding, pregnancy, newborn and family photographer in Noron-la-Poterie, near Bayeux (Calvados, France). Prices on request.",
  },
  common: {
    banner: "Practice project – unofficial website",
    skip: "Skip to content",
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Gallery" },
      { href: "/packages", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
    navMain: "Main",
    navMobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoHome: "Mélodye Huet – Photographer, home",
    logoSub: "Photographe",
    language: "Choose language",
    callLabel: `Call ${phone}`,
    callShort: "Call",
    maps: "View on Google Maps",
    directions: "Directions",
    facebook: "Facebook page",
    newTab: "(opens in a new tab)",
    priceOnRequest: "Prices on request",
    illustration: "Sample photos from Unsplash: these are not Mélodye Huet's photographs.",
    creditsLink: "Photo credits",
    labels: { address: "Address", phone: "Phone", hours: "Opening hours", prices: "Prices", facebook: "Facebook" },
    hours: [
      ["Monday – Friday", "9am – 7pm"],
      ["Saturday", "9:30am – 7pm"],
      ["Sunday", "Closed"],
    ],
    area: "near Bayeux, Calvados (14)",
  },
  footer: {
    tagline: "“Your personal photographer in the 14” (Calvados)",
    contact: "Contact",
    pages: "Pages",
    demo: "Demo made by Ammar Rajabi as a practice project. The owner can ask for it to be removed.",
    photos: "Sample photos: Unsplash.",
    credits: "See photo credits",
  },
  cta: {
    eyebrow: "Your plans",
    title: "Planning a wedding or a photo session?",
    text: `Call Mélodye on ${phone} to talk about your date and what you have in mind. Prices on request.`,
    contact: "Contact page",
  },
  services: [
    { id: "mariage", name: "Wedding", text: "To keep the important moments of your day." },
    { id: "grossesse", name: "Pregnancy", text: "A photo session during pregnancy, to remember the months of waiting." },
    { id: "naissance", name: "Newborn and baby", text: "A newborn session with your new baby, or a baby session a little later." },
    { id: "famille", name: "Family at home", text: "A family session in your own home, somewhere you already feel at ease." },
  ],
  reviews: {
    items: reviewsEn,
    eyebrow: "Google reviews",
    title: ["What her ", "clients say"],
    rating: "4.9/5",
    count: "91 Google reviews",
    ratingLabel: "Google rating: 4.9 out of 5, 91 reviews",
    all: "See all reviews on Google",
    source: "Google review",
    translatedNote: "(translated from French)",
  },
  home: {
    eyebrow: "Photographer · Noron-la-Poterie, Calvados",
    title: ["Weddings, pregnancy, newborns and families, ", "in Calvados"],
    lead: "Mélodye Huet photographs life's big moments near Bayeux, in Normandy. In her own words, she is “your personal photographer in the 14” (Calvados).",
    gallery: "View the gallery",
    introEyebrow: "The photographer",
    introTitle: ["Mélodye Huet, photographer ", "near Bayeux"],
    introText:
      "Based in Noron-la-Poterie, Mélodye photographs weddings, pregnancies, newborns, babies and families at home. Many of her clients come back to her for several moments in their lives.",
    introLink: "Read more",
    previewEyebrow: "Gallery",
    previewTitle: ["A glimpse in ", "pictures"],
    previewLink: "See the full gallery",
    captions: { portraits: "Couple", ceremony: "Ceremony", details: "Details", reception: "Reception" },
    servicesEyebrow: "Services",
    servicesTitle: ["For every moment ", "in life"],
    servicesLink: "See the services",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "Mélodye Huet, wedding, pregnancy, newborn and family photographer in Noron-la-Poterie (Calvados, France), near Bayeux.",
    eyebrow: "About",
    title: ["Mélodye Huet, ", "photographer"],
    lead: "Wedding, pregnancy, newborn and family photographer in Noron-la-Poterie, near Bayeux.",
    storyEyebrow: "In Calvados",
    storyTitle: "“Your personal photographer in the 14”",
    story: [
      "That is how Mélodye Huet describes herself (the 14 is Calvados). She photographs couples on their wedding day, then families for the moments that follow: pregnancy, birth, a baby's first months and family sessions at home.",
      "Many of her clients come back to her for several moments in their lives. Aurélie says she met her “4 years ago for [her] wedding, [her] first pregnancy + the baby shoot the same year” (translated from French).",
    ],
    wayEyebrow: "How she works",
    wayTitle: ["In her ", "clients' words"],
    way: "In their Google reviews, clients describe her as “professional, discreet and very attentive”. She is “gentle, patient”, knows how to “put you at ease” and “takes the time needed” (translated from French).",
    infoEyebrow: "Practical details",
    infoTitle: ["Where and ", "when"],
    ctaTitle: "Shall we talk about your plans?",
  },
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Weddings, pregnancy, newborn, baby and family sessions at home: services by Mélodye Huet, photographer in Noron-la-Poterie (Calvados, France). Prices on request.",
    eyebrow: "Services",
    title: ["For every ", "moment", " in life"],
    lead: "Weddings, pregnancy, newborn, baby and family sessions at home. Prices are given on request.",
    heading: "The services",
    priceLabel: "Price",
    priceValue: "On request",
    ask: "Ask for a price",
    askFor: "Ask for a price: ",
    note: `Prices are not published: ask Mélodye by phone on ${phone}.`,
    ctaTitle: "A question about a session?",
  },
  portfolio: {
    metaTitle: "Gallery",
    metaDescription:
      "Wedding photo gallery (sample images) for the demo website of Mélodye Huet, photographer in Noron-la-Poterie (Calvados, France).",
    eyebrow: "Gallery",
    title: ["Weddings, told ", "gently"],
    lead: "Ceremony, couple, details and reception.",
    note: "Sample photos from Unsplash: these are not Mélodye Huet's photographs. Each photographer is credited in the viewer and on the ",
    noteLink: "credits page",
    ctaTitle: "Would you like to talk about it?",
    categories: {
      ceremony: { label: "Ceremony", intro: "Aisles, vows and the walk back out as newlyweds." },
      portraits: { label: "Couple", intro: "Unhurried portraits in soft light." },
      details: { label: "Details", intro: "Rings, stationery, shoes and flowers." },
      reception: { label: "Reception", intro: "Long tables, raised glasses and the first dance." },
    },
  },
  gallery: {
    all: "All",
    filter: "Filter photographs",
    showing: (n: number, label?: string) => `Showing ${n} photographs${label ? ` in ${label}` : ""}.`,
    viewer: "Photograph viewer",
    close: "Close viewer",
    prev: "Previous photograph",
    next: "Next photograph",
    open: "Open larger view: ",
    photoBy: "Photo by",
    onUnsplash: "on Unsplash",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: `Contact Mélodye Huet, photographer in Noron-la-Poterie (Calvados, France): ${phone}, 89 route des Potiers. Monday to Saturday.`,
    eyebrow: "Contact",
    title: ["Let's talk about your ", "plans"],
    lead: `The easiest way is to call Mélodye on ${phone}, Monday to Saturday.`,
    aside: "Details",
    sectionLabel: "Contact details and form",
  },
  form: {
    title: "Your enquiry",
    required: "Fields marked",
    requiredSr: "with an asterisk",
    requiredEnd: "are required.",
    optional: "(optional)",
    labels: {
      name: "Your name",
      email: "Email address",
      date: "Preferred date",
      venue: "Location",
      guests: "Guest count",
      package: "Service",
      message: "Your message",
    },
    dateHint: "An approximate date is fine.",
    guestsHint: "For a wedding, roughly.",
    notSure: "Not sure yet",
    submit: "Send",
    demoTitle: `Demo form – please call ${phone}`,
    demoText: "This is not an official website: nothing was sent or stored.",
    back: "Back to the form",
    footnote: "Demo form: nothing is sent.",
  },
  credits: {
    metaTitle: "Photo credits",
    metaDescription:
      "Credits for the Unsplash photographers whose sample images appear on this demo website for Mélodye Huet, photographer in Calvados, France.",
    eyebrow: "Credits",
    title: ["With thanks to the ", "photographers"],
    lead: "This website is an unofficial practice project for Mélodye Huet – Photographe. The photos are sample images used under the Unsplash licence: they are not Mélodye Huet's photographs.",
    heading: "Photograph credits",
    photoBy: "Photo by",
    on: "on",
  },
};

const dicts: Record<Locale, Dict> = { fr, en };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

export const portfolioCategories: { id: "ceremony" | "portraits" | "details" | "reception"; photos: PhotoKey[] }[] = [
  { id: "ceremony", photos: ["aisleBlush", "archWalk", "lawnCeremony", "archWhite", "timberCeremony"] },
  { id: "portraits", photos: ["goldenField", "vineyard", "veilField", "hillside", "jetty", "bouquetCouple", "veilKiss", "hero"] },
  { id: "details", photos: ["rings", "pearls", "handsRoses", "shoesAnemone", "heelsWindow", "invitation"] },
  { id: "reception", photos: ["longTable", "firstDance", "tentReception", "glassesTable", "placeSettings", "toast"] },
];
