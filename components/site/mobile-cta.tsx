"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Barre fixe en bas d'écran sur mobile, visible une fois le Hero dépassé. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-cream/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-3">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium text-ink ring-1 ring-ink/20"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Appeler
        </a>
        <a
          href={SITE.planityUrl}
          className="inline-flex h-12 flex-[1.6] items-center justify-center gap-2 rounded-full bg-rose-400 text-sm font-medium text-black"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden />
          Réserver en ligne
        </a>
      </div>
    </div>
  );
}
