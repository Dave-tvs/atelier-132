"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServicesTabs() {
  const [active, setActive] = useState(SERVICES[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const category = SERVICES.find((c) => c.id === active) ?? SERVICES[0];

  // Navigation clavier entre onglets (flèches gauche/droite)
  const onKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowRight" ? 1 : -1) + SERVICES.length) % SERVICES.length;
    setActive(SERVICES[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Catégories de prestations"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:px-0"
      >
        {SERVICES.map((c, index) => (
          <button
            key={c.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${c.id}`}
            aria-selected={c.id === active}
            aria-controls={`panel-${c.id}`}
            tabIndex={c.id === active ? 0 : -1}
            onClick={() => setActive(c.id)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className={cn(
              "h-11 shrink-0 cursor-pointer rounded-full px-5 text-sm font-medium transition-colors duration-200",
              c.id === active
                ? "bg-ink text-cream"
                : "bg-white text-ink ring-1 ring-border hover:bg-sand"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${category.id}`}
        aria-labelledby={`tab-${category.id}`}
        className="mt-8 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(34,29,25,0.25)] ring-1 ring-border md:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <p className="max-w-xl text-muted-foreground">{category.intro}</p>
            <ul className="mt-6 divide-y divide-border">
              {category.services.map((service) => (
                <li key={service.name} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium text-ink">{service.name}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {service.duration}
                    </p>
                  </div>
                  <p className="shrink-0 font-serif text-lg text-ink">{service.price}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Prix indicatifs, ajustés après diagnostic selon la longueur et l&apos;épaisseur.
              </p>
              <a
                href={SITE.planityUrl}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-cream transition-colors duration-200 hover:bg-rose-700"
              >
                Réserver cette prestation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
