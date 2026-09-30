import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales · Atelier 132",
  description: "Mentions légales du site de l'Atelier 132, salon de coiffure à Marseille 13005.",
};

/** Champ à remplir par le client : bien visible pour ne pas en oublier. */
function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-rose-400/25 px-1.5 py-0.5 font-medium text-rose-700">
      [À COMPLÉTER : {children}]
    </mark>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="font-serif text-2xl text-ink md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-ink">ATELIER 132</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Coiffure · Esthétique
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-ink ring-1 ring-ink/15 transition-colors hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-rose-700">Informations légales</p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Mentions légales</h1>
        <p className="mt-5 text-muted-foreground">
          Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l&apos;économie numérique (LCEN), voici les informations relatives à
          l&apos;éditeur et à l&apos;hébergeur du site.
        </p>

        <div className="mt-14 space-y-12">
          <Section title="Éditeur du site">
            <p>
              <strong>Raison sociale :</strong> <Todo>nom de la société ou de l&apos;entrepreneur</Todo>
              <br />
              <strong>Nom commercial :</strong> Atelier 132
              <br />
              <strong>Forme juridique :</strong> <Todo>SARL, SAS, EI, micro-entreprise…</Todo>
              <br />
              <strong>Capital social :</strong> <Todo>montant en euros, si société</Todo>
              <br />
              <strong>Siège social :</strong> {SITE.address.street}, {SITE.address.city}
              <br />
              <strong>SIRET :</strong> <Todo>numéro à 14 chiffres</Todo>
              <br />
              <strong>RCS / RM :</strong> <Todo>ville et numéro d&apos;immatriculation</Todo>
              <br />
              <strong>N° de TVA intracommunautaire :</strong> <Todo>FR XX XXXXXXXXX, ou « non assujetti »</Todo>
              <br />
              <strong>Téléphone :</strong>{" "}
              <a href={SITE.phoneHref} className="text-ink underline decoration-rose-400 underline-offset-4">
                {SITE.phoneDisplay}
              </a>
              <br />
              <strong>E-mail :</strong> <Todo>adresse e-mail de contact</Todo>
            </p>
            <p>
              <strong>Directeur de la publication :</strong> <Todo>prénom et nom du gérant</Todo>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              <strong>GitHub, Inc.</strong> (service GitHub Pages)
              <br />
              88 Colton Street, San Francisco, CA 94107, États-Unis
              <br />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rose-400 underline-offset-4"
              >
                github.com
              </a>
            </p>
            <p>
              <strong>Conception et réalisation du site :</strong> <Todo>nom de l&apos;agence ou du prestataire</Todo>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus de ce site (textes, photographies, logo, mise en page) est
              la propriété exclusive de <Todo>raison sociale</Todo>, sauf mention contraire. Toute
              reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
              écrite préalable est interdite (articles L.335-2 et suivants du Code de la propriété
              intellectuelle).
            </p>
            <p>
              <strong>Crédits photos :</strong> <Todo>Atelier 132 / nom du photographe</Todo>
            </p>
          </Section>

          <Section title="Réservation en ligne">
            <p>
              Les rendez-vous sont pris via la plateforme{" "}
              <a
                href={SITE.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rose-400 underline-offset-4"
              >
                Planity
              </a>
              , service tiers indépendant. Les données saisies lors d&apos;une réservation sont
              traitées par Planity selon ses propres conditions d&apos;utilisation et sa politique de
              confidentialité.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Ce site ne comporte ni formulaire ni espace client : il ne collecte directement
              aucune donnée personnelle.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi
              « Informatique et Libertés », vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement et d&apos;opposition concernant les données vous
              concernant. Pour l&apos;exercer, contactez-nous à <Todo>adresse e-mail de contact</Todo>{" "}
              ou par courrier au {SITE.address.street}, {SITE.address.city}. Vous pouvez également
              adresser une réclamation à la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rose-400 underline-offset-4"
              >
                cnil.fr
              </a>
              ).
            </p>
          </Section>

          <Section title="Cookies et services tiers">
            <p>
              Le site en lui-même ne dépose aucun cookie publicitaire ni de mesure d&apos;audience.
              La carte d&apos;accès est fournie par <strong>Google Maps</strong> : son affichage peut
              entraîner le dépôt de cookies par Google, régis par la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rose-400 underline-offset-4"
              >
                politique de confidentialité de Google
              </a>
              .
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              Les informations (tarifs, horaires, prestations) sont données à titre indicatif et
              peuvent évoluer. Les tarifs définitifs sont confirmés au salon après diagnostic.
              L&apos;éditeur ne saurait être tenu responsable des contenus des sites tiers vers
              lesquels renvoient des liens.
            </p>
            <p className="text-sm">Dernière mise à jour : <Todo>date</Todo></p>
          </Section>
        </div>
      </main>

      <footer className="bg-ink px-6 py-8 text-center text-xs text-cream/70">
        © {new Date().getFullYear()} Atelier 132 · {SITE.address.street}, {SITE.address.city}
      </footer>
    </>
  );
}
