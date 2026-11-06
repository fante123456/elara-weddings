import { photos, type Photo, type PhotoKey } from "@/lib/photos";
import type { Locale } from "@/lib/site";

/** French descriptions of the Unsplash sample photos (the English ones live in photos.ts). */
const altFr: Record<PhotoKey, string> = {
  hero: "Les mariés s'embrassent dans une prairie au coucher du soleil, le voile de la mariée dans la lumière dorée",
  aisleBlush: "Allée de cérémonie bordée de fleurs rose pâle et ivoire, dans une douce lumière d'après-midi",
  archWhite: "Arche fleurie blanche au-dessus d'une allée de jardin, avec des chaises dorées",
  timberCeremony: "Les jeunes mariés sortent d'une cérémonie sous une charpente en bois, entourés des invités",
  lawnCeremony: "Cérémonie en plein air avec une arche fleurie et des rangées de chaises blanches sur la pelouse",
  archWalk: "Les mariés marchent bras dessus bras dessous sous une arche fleurie après leurs vœux",
  vineyard: "Les jeunes mariés se promènent entre les rangs de vigne dans la lumière chaude du soir",
  goldenField: "Les mariés traversent un champ doré au coucher du soleil, avec des collines au loin",
  veilField: "Le marié enlace la mariée sous son voile, dans un champ ensoleillé",
  bouquetCouple: "Un couple enlacé, la mariée tient un bouquet de roses pêche",
  jetty: "Un couple enlacé sur un ponton en bois au bord d'un lac calme",
  hillside: "Les mariés s'embrassent sur une colline fleurie à la tombée du jour",
  veilKiss: "Le marié embrasse la mariée, enveloppés dans son voile, dans une lumière douce",
  rings: "Deux alliances dorées posées sur un tissu blanc",
  pearls: "Couvert ivoire avec un collier de perles et un ruban de soie sur le menu",
  shoesAnemone: "Chaussures de mariée posées à côté d'un bouquet d'anémones blanches",
  handsRoses: "Les mains d'un couple avec leurs alliances, posées sur un bouquet de roses blanches",
  heelsWindow: "Sandales de mariée blanches sur un rebord de fenêtre en bois, près d'un vase de fleurs",
  invitation: "Faire-part de mariage avec un écrin à bague et quelques brins de verdure",
  glassesTable: "Table de réception dressée avec des verres en cristal et des centres de table fleuris",
  tentReception: "Réception sous chapiteau avec des verres à pied, des fleurs et un lustre allumé",
  firstDance: "La mariée danse le bras levé au milieu des invités pendant la soirée",
  longTable: "Longue table de réception décorée de fleurs roses près de grandes fenêtres",
  placeSettings: "Longue table dressée avec assiettes, chaises blanches et bouquets roses",
  toast: "Les invités lèvent leur verre pour un toast sous une guirlande lumineuse",
  archBouquet: "Bouquet de fleurs rose pâle et ivoire attaché à une arche de cérémonie en bois",
  handsRings: "Gros plan sur les mains d'un couple, les alliances dans la lumière",
  brideWindow: "La mariée de dos, debout devant une grande fenêtre ouverte",
  camera: "Appareil photo moyen format ancien, avec des fleurs roses dans le viseur",
};

/** The photo set with descriptions in the page's language. */
export function getPhotos(locale: Locale): Record<PhotoKey, Photo> {
  if (locale === "en") return photos;
  return Object.fromEntries(
    (Object.keys(photos) as PhotoKey[]).map((k) => [k, { ...photos[k], alt: altFr[k] }]),
  ) as Record<PhotoKey, Photo>;
}
