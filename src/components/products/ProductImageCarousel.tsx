"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageCarouselProps {
  images: string[];
  title: string;
}

export function ProductImageCarousel({
  images,
  title,
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages = images.length > 0 ? images : ["/placeholder.png"];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-slate-200 bg-white">
        <Image
          src={displayImages[activeIndex]}
          alt={title}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {displayImages.length > 1 && (
        <div className="flex gap-2">
          {displayImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-16 overflow-hidden rounded-md border ${
                activeIndex === index
                  ? "border-primary"
                  : "border-slate-200"
              }`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
