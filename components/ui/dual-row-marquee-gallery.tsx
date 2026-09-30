"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MarqueeImage {
  src: string;
  alt: string;
}

function MarqueeRow({
  images,
  direction,
  onSelect,
}: {
  images: MarqueeImage[];
  direction: "forward" | "reverse";
  onSelect: (image: MarqueeImage) => void;
}) {
  const loopImages = [...images, ...images];

  return (
    <div className="group overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-6 group-hover:[animation-play-state:paused]",
          direction === "forward" ? "animate-marquee" : "animate-marquee-reverse"
        )}
      >
        {loopImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => onSelect(image)}
            className="relative h-72 w-56 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="224px"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function DualRowMarqueeGallery({ images }: { images: MarqueeImage[] }) {
  const [selectedImage, setSelectedImage] = useState<MarqueeImage | null>(null);
  const midpoint = Math.ceil(images.length / 2);
  const rowOne = images.slice(0, midpoint);
  const rowTwo = images.slice(midpoint);

  return (
    <div className="relative">
      <div className="space-y-6">
        <MarqueeRow images={rowOne} direction="forward" onSelect={setSelectedImage} />
        <MarqueeRow images={rowTwo} direction="reverse" onSelect={setSelectedImage} />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="512px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
