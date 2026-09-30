import Image from "next/image";
import type { ReactNode } from "react";

export interface PhotoHeroProps {
  backgroundSrc: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: ReactNode;
}

export function PhotoHero({
  backgroundSrc,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
}: PhotoHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={backgroundSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-5xl text-white md:text-7xl">{title}</h1>
        {subtitle && <p className="text-lg text-white/80">{subtitle}</p>}
        {badge}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-full bg-rose-400 px-6 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(214,138,151,0.5)]"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-rose-400 hover:text-rose-400 hover:shadow-[0_0_18px_rgba(214,138,151,0.35)]"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>

      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="absolute bottom-8 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-bounce text-white/70"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </section>
  );
}
