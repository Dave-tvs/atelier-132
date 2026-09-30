"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#prestations", label: "Prestations" },
  { href: "#atelier", label: "L'atelier" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#acces", label: "Accès" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Navigation principale"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
          solid
            ? "bg-cream/90 text-ink shadow-[0_8px_30px_rgba(34,29,25,0.08)] ring-1 ring-ink/5 backdrop-blur-md"
            : "bg-transparent text-white"
        )}
      >
        <a href="#top" className="flex flex-col leading-none" aria-label="Atelier 132, retour en haut">
          <span className="font-serif text-xl tracking-wide">ATELIER 132</span>
          <span
            className={cn(
              "mt-1 text-[10px] uppercase tracking-[0.25em]",
              solid ? "text-muted-foreground" : "text-white/70"
            )}
          >
            Coiffure · Esthétique
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "cursor-pointer transition-colors duration-200",
                  solid ? "hover:text-rose-700" : "hover:text-rose-400"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.planityUrl}
            className="hidden h-11 items-center rounded-full bg-rose-400 px-5 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(214,138,151,0.5)] sm:inline-flex"
          >
            Réserver
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl bg-cream/95 text-ink shadow-xl ring-1 ring-ink/5 backdrop-blur-md transition-all duration-300 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col p-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg font-serif transition-colors hover:bg-sand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={SITE.planityUrl}
              className="flex h-12 items-center justify-center rounded-full bg-rose-400 text-sm font-medium text-black"
            >
              Réserver sur Planity
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
