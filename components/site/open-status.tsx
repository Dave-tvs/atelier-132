"use client";

import { useEffect, useState } from "react";
import { HOURS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = { open: boolean; label: string };

function computeStatus(now: Date): Status {
  // Heure de Marseille, quel que soit le fuseau du visiteur
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const time = Number(get("hour")) + Number(get("minute")) / 60;

  const today = HOURS.find((h) => h.index === weekday);
  if (today?.open !== undefined && today.close !== undefined) {
    if (time >= today.open && time < today.close) {
      return { open: true, label: `Ouvert · ferme à ${today.close}h` };
    }
    if (time < today.open) {
      return { open: false, label: `Fermé · ouvre à ${today.open}h` };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = HOURS.find((h) => h.index === (weekday + offset) % 7);
    if (next?.open !== undefined) {
      const when = offset === 1 ? "demain" : next.day.toLowerCase();
      return { open: false, label: `Fermé · ouvre ${when} à ${next.open}h` };
    }
  }
  return { open: false, label: "Fermé" };
}

export function OpenStatus({ className }: { className?: string }) {
  // Calculé côté navigateur uniquement (le site est statique)
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={cn("inline-flex min-h-5 items-center gap-2", className)} aria-live="polite">
      {status && (
        <>
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              status.open ? "bg-emerald-400" : "bg-rose-400"
            )}
          >
            {status.open && (
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
          </span>
          {status.label}
        </>
      )}
    </span>
  );
}
