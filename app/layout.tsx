import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE, asset } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dave-tvs.github.io"),
  title: "Atelier 132 · Coiffeur & barbier à Marseille 13005",
  description:
    "Salon de coiffure et barbier au 132 Bd Jeanne d'Arc, Marseille 5e. Balayage, couleur, coupe, lissage, barbe. Noté 4,8/5 sur Google. Réservez en ligne sur Planity.",
  keywords: [
    "coiffeur Marseille 13005",
    "balayage Marseille",
    "barbier Marseille 5e",
    "salon de coiffure Jeanne d'Arc",
    "Atelier 132",
  ],
  openGraph: {
    title: "Atelier 132 · Coiffeur & barbier à Marseille 13005",
    description: "Balayage, couleur, coupe et barbier. Noté 4,8/5 · Réservation en ligne.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: asset("/images/facade.webp") }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: SITE.name,
  telephone: "+33491479695",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: "13005",
    addressLocality: "Marseille",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: SITE.googleRating.count,
  },
  sameAs: [SITE.planityUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
