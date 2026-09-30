import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Ear,
  FlaskConical,
  MapPin,
  Navigation,
  Phone,
  Scissors,
  Star,
  Timer,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/photo-hero";
import { DualRowMarqueeGallery, type MarqueeImage } from "@/components/ui/dual-row-marquee-gallery";
import { Navbar } from "@/components/site/navbar";
import { OpenStatus } from "@/components/site/open-status";
import { Reveal } from "@/components/site/reveal";
import { ServicesTabs } from "@/components/site/services-tabs";
import { MobileCta } from "@/components/site/mobile-cta";
import { HOURS, REVIEWS, SITE, asset } from "@/lib/site";

const PHOTOS: MarqueeImage[] = [
  { src: asset("/images/salon-interieur.webp"), alt: "L'intérieur lumineux du salon Atelier 132" },
  { src: asset("/images/bacs.webp"), alt: "Espace shampoing avec mur en pierre naturelle" },
  { src: asset("/images/facade.webp"), alt: "Façade de l'Atelier 132, boulevard Jeanne d'Arc" },
  { src: asset("/images/produits.webp"), alt: "Produits professionnels Olaplex et colorations" },
  { src: asset("/images/espace-barbier.webp"), alt: "Fauteuil de l'espace barbier" },
  { src: asset("/images/rue.webp"), alt: "L'Atelier 132 sous les platanes du 5e arrondissement" },
];

// Répété pour que les deux rangées couvrent les écrans très larges sans vide
const GALLERY = [...PHOTOS, ...PHOTOS, ...PHOTOS];

const PROMISES = [
  {
    icon: Ear,
    title: "Un vrai diagnostic",
    text: "On écoute vos envies, on analyse votre cheveu, puis on vous conseille. Pas l'inverse.",
  },
  {
    icon: Timer,
    title: "Pris à l'heure",
    text: "Uniquement sur rendez-vous : pas d'attente, votre créneau vous est réservé.",
  },
  {
    icon: Scissors,
    title: "Le travail soigné",
    text: "Coupe aux ciseaux, balayage à la main : on privilégie la précision à la cadence.",
  },
  {
    icon: FlaskConical,
    title: "Produits professionnels",
    text: "Olaplex et soins haut de gamme pour protéger la fibre à chaque couleur.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.3em] text-rose-700">{children}</p>
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <PhotoHero
          backgroundSrc={asset("/images/hero1.webp")}
          eyebrow="Coiffure · Barbier · Marseille 13005"
          title="Atelier 132"
          subtitle="Balayages lumineux, couleurs sur-mesure, coupes précises et espace barbier, au cœur du 5ᵉ. Un salon chaleureux où l'on prend le temps de vous écouter."
          badge={
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm">
                <Stars className="h-3.5 w-3.5" />
                <span>
                  {SITE.googleRating.value}/5 · {SITE.googleRating.count} avis Google
                </span>
              </span>
              <OpenStatus className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm" />
            </div>
          }
          primaryCta={{ label: "Réserver sur Planity", href: SITE.planityUrl }}
          secondaryCta={{ label: "Voir les prestations", href: "#prestations" }}
        />

        {/* Bandeau de réassurance */}
        <section aria-label="Points forts" className="border-b border-border bg-white">
          <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
            {[
              { big: `${SITE.googleRating.value}/5`, small: `${SITE.googleRating.count} avis Google` },
              { big: `${SITE.planityRating.value}/5`, small: `${SITE.planityRating.count} avis Planity` },
              { big: "9h – 18h", small: "Non-stop, du mardi au samedi" },
              { big: "2 clics", small: "Réservation en ligne 24h/24" },
            ].map((item) => (
              <div key={item.small} className="text-center">
                <p className="font-serif text-2xl text-ink md:text-3xl">{item.big}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.small}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Prestations */}
        <section id="prestations" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
          <Reveal className="mx-auto max-w-4xl">
            <div className="text-center">
              <Eyebrow>Prestations & tarifs</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
                Du balayage au rasage, <em className="text-rose-700">tout sous un même toit</em>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Choisissez votre prestation, réservez votre créneau en ligne et recevez la
                confirmation immédiatement.
              </p>
            </div>
            <div className="mt-12">
              <ServicesTabs />
            </div>
          </Reveal>
        </section>

        {/* Pourquoi nous */}
        <section className="bg-ink px-6 py-24 text-cream md:py-28">
          <Reveal className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
                Ce que nos clientes nous disent
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                « Enfin une coiffeuse qui écoute vraiment. »
              </h2>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROMISES.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  as="li"
                  delay={i * 0.08}
                  className="h-full rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
                >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-400/15 text-rose-400">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-serif text-xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-cream/70">{text}</p>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* L'atelier */}
        <section id="atelier" className="scroll-mt-24 px-6 py-24 md:py-32">
          <Reveal className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src={asset("/images/hero2.webp")}
                  alt="Colorations et soins Olaplex sur le mur en pierre du salon"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-8 w-48 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:-right-8 sm:w-60">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={asset("/images/facade.webp")}
                    alt="La vitrine de l'Atelier 132"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>L&apos;atelier</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
                Un salon de quartier, <em className="text-rose-700">un savoir-faire d&apos;atelier</em>
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Tons beiges, pierre naturelle et touches de bois : l&apos;Atelier 132 a été pensé
                  comme une parenthèse, à deux pas du boulevard Jeanne d&apos;Arc.
                </p>
                <p>
                  Sasha et son équipe y réalisent des coupes intemporelles, des transformations
                  audacieuses et des techniques de couleur comme le balayage et les babylights. Côté
                  hommes, un espace barbier dédié pour le dégradé, la coupe aux ciseaux et la barbe
                  sculptée.
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
                {["Balayage & babylights", "Couleur & soin Olaplex", "Lissage & botox", "Barbier & barbe"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <a
                href={SITE.planityUrl}
                className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-cream transition-colors duration-200 hover:bg-rose-700"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Prendre rendez-vous
              </a>
            </div>
          </Reveal>
        </section>

        {/* Galerie */}
        <section id="galerie" className="scroll-mt-24 overflow-hidden bg-sand py-24 md:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
              <Eyebrow>Galerie</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Entrez dans l&apos;atelier</h2>
              <p className="mt-4 text-muted-foreground">
                Survolez une rangée pour la mettre en pause, touchez une photo pour l&apos;agrandir.
              </p>
            </div>
            <DualRowMarqueeGallery images={GALLERY} />
          </Reveal>
        </section>

        {/* Avis */}
        <section id="avis" className="scroll-mt-24 px-6 py-24 md:py-32">
          <Reveal className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>Avis clients</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
                  {SITE.googleRating.value}/5, et ce sont elles qui le disent
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 ring-1 ring-border">
                <Stars />
                <span className="text-sm text-ink">
                  <strong>{SITE.googleRating.value}</strong> · {SITE.googleRating.count} avis Google
                </span>
              </div>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((review, i) => (
                <Reveal
                  key={review.author}
                  as="li"
                  delay={(i % 3) * 0.08}
                  className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(34,29,25,0.3)]"
                >
                    <Stars />
                    <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                      « {review.text} »
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent font-serif text-rose-700">
                        {review.author.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.meta} · Avis Google</p>
                      </div>
                    </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-rose-400 decoration-2 underline-offset-4 transition-colors hover:text-rose-700"
              >
                Lire tous les avis sur Google
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </section>

        {/* Accès */}
        <section id="acces" className="scroll-mt-24 bg-white px-6 py-24 md:py-32">
          <Reveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Eyebrow>Nous trouver</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Au cœur du 5ᵉ</h2>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-rose-700" aria-hidden />
                  <div>
                    <p className="font-medium text-ink">{SITE.address.street}</p>
                    <p className="text-muted-foreground">{SITE.address.city}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-rose-700" aria-hidden />
                  <a href={SITE.phoneHref} className="font-medium text-ink hover:text-rose-700">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-rose-700" aria-hidden />
                  <div className="w-full">
                    <OpenStatus className="mb-3 text-sm font-medium text-ink" />
                    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
                      {HOURS.map((h) => (
                        <div key={h.day} className="contents">
                          <dt className="text-muted-foreground">{h.day}</dt>
                          <dd className="text-ink">
                            {h.open !== undefined ? `${h.open}h00 – ${h.close}h00` : "Fermé"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.planityUrl}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-rose-400 px-6 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(214,138,151,0.5)]"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Réserver
                </a>
                <a
                  href={SITE.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-ink ring-1 ring-ink/20 transition-colors hover:bg-sand"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Itinéraire
                </a>
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border lg:col-span-3">
              <iframe
                title="Plan d'accès à l'Atelier 132"
                src={SITE.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Toute la carte ouvre Google Maps (évite aussi de bloquer le scroll sur mobile) */}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir l'Atelier 132 dans Google Maps"
                className="group absolute inset-0 flex items-end justify-center p-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <MapPin className="h-4 w-4" aria-hidden />
                  Ouvrir dans Google Maps
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden px-6 py-28 text-center">
          <Image
            src={asset("/images/hero3.webp")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/75" />
          <Reveal className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Votre prochain rendez-vous est à deux clics
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Choisissez votre prestation et votre créneau sur Planity, confirmation immédiate.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={SITE.planityUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-rose-400 px-7 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(214,138,151,0.5)]"
              >
                Réserver maintenant
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 px-7 text-sm font-medium text-white transition-all duration-300 hover:border-rose-400 hover:text-rose-400"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-ink px-6 pt-14 pb-28 text-cream/70 md:pb-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl text-cream">ATELIER 132</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em]">{SITE.tagline}</p>
          </div>
          <div className="text-sm leading-relaxed">
            <p>{SITE.address.street}</p>
            <p>{SITE.address.city}</p>
            <a href={SITE.phoneHref} className="hover:text-rose-400">
              {SITE.phoneDisplay}
            </a>
          </div>
          <div className="text-sm leading-relaxed">
            <p>Mardi – samedi</p>
            <p>9h00 – 18h00 non-stop</p>
            <a href={SITE.planityUrl} className="text-rose-400 hover:underline">
              Réserver sur Planity
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Atelier 132 · Salon de coiffure & barbier, Marseille 13005
        </p>
      </footer>

      <MobileCta />
    </>
  );
}
