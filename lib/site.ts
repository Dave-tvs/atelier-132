// Toutes les infos du salon au même endroit : modifier ici met à jour tout le site.

/** Préfixe un chemin de /public avec le basePath (nécessaire pour next/image sur GitHub Pages). */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const SITE = {
  name: "Atelier 132",
  tagline: "Coiffure · Esthétique · Barbier",
  planityUrl: "https://www.planity.com/atelier-132-13005-marseille",
  phoneDisplay: "04 91 47 96 95",
  phoneHref: "tel:+33491479695",
  address: {
    street: "132 Bd Jeanne d'Arc",
    city: "13005 Marseille",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Atelier+132+132+Bd+Jeanne+d%27Arc+13005+Marseille",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Atelier+132+132+Bd+Jeanne+d%27Arc+13005+Marseille",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Atelier+132,+132+Bd+Jeanne+d%27Arc,+13005+Marseille&z=16&output=embed",
  googleRating: { value: "4,8", count: 36 },
  planityRating: { value: "5,0", count: 58 },
};

/** Horaires (0 = dimanche). Utilisés pour l'affichage et le badge « Ouvert / Fermé ». */
export const HOURS: { day: string; index: number; open?: number; close?: number }[] = [
  { day: "Lundi", index: 1 },
  { day: "Mardi", index: 2, open: 9, close: 18 },
  { day: "Mercredi", index: 3, open: 9, close: 18 },
  { day: "Jeudi", index: 4, open: 9, close: 18 },
  { day: "Vendredi", index: 5, open: 9, close: 18 },
  { day: "Samedi", index: 6, open: 9, close: 18 },
  { day: "Dimanche", index: 0 },
];

export type Service = { name: string; duration: string; price: string };
export type ServiceCategory = { id: string; label: string; intro: string; services: Service[] };

// Tarifs repris de la page Planity du salon.
export const SERVICES: ServiceCategory[] = [
  {
    id: "coupes",
    label: "Coupes & brushing",
    intro: "Coupes intemporelles ou transformation : on part de votre nature de cheveu.",
    services: [
      { name: "Brushing cheveux courts", duration: "30 min", price: "dès 26 €" },
      { name: "Brushing cheveux mi-longs", duration: "45 min", price: "dès 31 €" },
      { name: "Brushing cheveux longs", duration: "1 h", price: "dès 36 €" },
      { name: "Coupe + brushing courts", duration: "30 min", price: "dès 43 €" },
      { name: "Coupe + brushing mi-longs", duration: "45 min", price: "dès 48 €" },
    ],
  },
  {
    id: "couleur",
    label: "Couleur",
    intro: "Couleur racines et soin de la fibre, pour une teinte lumineuse et homogène.",
    services: [
      { name: "Couleur racines + brushing courts", duration: "1 h 30", price: "dès 54 €" },
      { name: "Couleur racines + brushing mi-longs", duration: "1 h 30", price: "dès 59 €" },
      { name: "Couleur racines + brushing longs", duration: "1 h 30", price: "dès 64 €" },
      { name: "Couleur racines + coupe + brushing courts", duration: "1 h 30", price: "dès 66 €" },
      { name: "Couleur racines + coupe + brushing mi-longs", duration: "1 h 45", price: "dès 71 €" },
    ],
  },
  {
    id: "balayage",
    label: "Balayage",
    intro: "Balayage naturel et babylights, réalisés à la main pour un effet soleil fondu.",
    services: [
      { name: "Balayage + brushing courts", duration: "2 h 45", price: "dès 102 €" },
      { name: "Balayage + brushing mi-longs", duration: "3 h", price: "dès 132 €" },
      { name: "Balayage + brushing longs", duration: "3 h 15", price: "dès 162 €" },
      { name: "Balayage + coupe + brushing courts", duration: "3 h", price: "dès 119 €" },
      { name: "Balayage + coupe + brushing mi-longs", duration: "3 h 15", price: "dès 149 €" },
    ],
  },
  {
    id: "soins",
    label: "Soins & lissage",
    intro: "Botox capillaire et lissage brésilien pour des cheveux disciplinés et brillants.",
    services: [
      { name: "Botox capillaire + brushing courts", duration: "1 h 30", price: "dès 90 €" },
      { name: "Botox capillaire + brushing mi-longs", duration: "1 h 30", price: "dès 120 €" },
      { name: "Botox capillaire + brushing longs", duration: "1 h 30", price: "dès 150 €" },
      { name: "Lissage brésilien courts", duration: "2 h 30", price: "150 – 200 €" },
      { name: "Lissage brésilien mi-longs", duration: "3 h", price: "200 – 300 €" },
      { name: "Lissage brésilien longs", duration: "3 h 30", price: "300 – 400 €" },
    ],
  },
  {
    id: "homme",
    label: "Homme & barbier",
    intro: "Coupe aux ciseaux ou dégradé précis, barbe taillée et rituel rasage.",
    services: [
      { name: "Coupe homme", duration: "20 min", price: "22 €" },
      { name: "Coupe homme + barbe", duration: "20 min", price: "35 €" },
      { name: "Coupe étudiant", duration: "30 min", price: "18 €" },
      { name: "Coupe barbier", duration: "30 min", price: "25 €" },
      { name: "Rituel barbe", duration: "30 min", price: "18 €" },
      { name: "Rasage barbe", duration: "30 min", price: "8 €" },
      { name: "Contour barbe", duration: "30 min", price: "8 €" },
    ],
  },
  {
    id: "evenements",
    label: "Mariage & enfants",
    intro: "Le grand jour préparé avec vous, et des coupes adaptées aux plus petits.",
    services: [
      { name: "Forfait mariée (essai + jour J)", duration: "2 h", price: "dès 100 €" },
      { name: "Chignon rapide", duration: "1 h", price: "dès 50 €" },
      { name: "Coupe fille -10 ans", duration: "30 min", price: "25 €" },
      { name: "Coupe garçon -10 ans", duration: "30 min", price: "15 €" },
      { name: "Coupe enfant barbier", duration: "30 min", price: "17 €" },
    ],
  },
];

export type Review = { author: string; meta: string; text: string };

// Avis Google réels (extraits, noms abrégés).
export const REVIEWS: Review[] = [
  {
    author: "Typhanie C.",
    meta: "Balayage & coupe",
    text: "J'ai testé le balayage et la coupe : résultat absolument parfait et très naturel. Sasha maîtrise les techniques à la perfection et donne d'excellents conseils. Rendez-vous rapide et prestation impeccable.",
  },
  {
    author: "EMK L.",
    meta: "Soin & coupe",
    text: "Enfin une coiffeuse qui écoute vraiment ! J'ai beaucoup apprécié le diagnostic précis et les conseils sur mesure. Résultat fidèle à mes attentes et cheveux d'une brillance incroyable grâce au soin.",
  },
  {
    author: "Olivier R.",
    meta: "Local Guide",
    text: "Un très bon salon, où vous êtes pris à l'heure. En plus, ici on fait la coupe au ciseau, c'est beaucoup mieux. J'apprécie beaucoup ce salon de quartier.",
  },
  {
    author: "Chiara M.",
    meta: "Couleur",
    text: "Super expérience avec Sacha ! Ma couleur est parfaite, exactement ce que je voulais. Je recommande les yeux fermés.",
  },
  {
    author: "Fiona L.",
    meta: "Local Guide",
    text: "Sasha a des doigts de fée, toujours de bons conseils, professionnelle et très délicate. Je recommande !",
  },
  {
    author: "Annie S.",
    meta: "Local Guide",
    text: "Enfin de vraies coiffeuses qui privilégient le travail soigné du cheveu à la productivité. En plus d'être très sympathiques. Au top.",
  },
];
