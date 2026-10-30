"use client";

import { useState } from "react";
import ImageSlot from "../home/ImageSlot";

type ObjectGalleryProps = {
  images: (string | undefined)[];
  alt: string;
};

/**
 * The object's photographs, one at a time, with the design's dots beneath to move
 * between them. Only the photograph on show is fetched; the others load when picked.
 *
 * The photographs are of whole objects (a full sari is far taller than the frame),
 * so each is shown entire on white, matching the photographs' own ground, rather
 * than cropped to fill. A missing photograph keeps the grey block.
 */
const ObjectGallery = ({ images, alt }: ObjectGalleryProps) => {
  const [index, setIndex] = useState(0);
  const src = images[index];

  return (
    <div>
      <ImageSlot
        key={index}
        src={src}
        alt={images.length > 1 ? `${alt} (photograph ${index + 1} of ${images.length})` : alt}
        tone="none"
        priority={index === 0}
        sizes="(min-width: 992px) 560px, 100vw"
        imageClassName="object-contain"
        className={`aspect-[320/375] w-full animate-in fade-in duration-500 sm:aspect-[560/566] ${src ? "bg-white" : "bg-[#d9d9d9]"}`}
      />
      {images.length > 1 && (
        <div className="mt-[25px] flex justify-center gap-[15px]" role="group" aria-label="Photographs">
          {images.map((_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setIndex(dot)}
              aria-label={`Show photograph ${dot + 1}`}
              aria-pressed={dot === index}
              className={`h-[10px] w-[10px] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-2 ${
                dot === index ? "bg-s2s-ink" : "bg-[#e2e2e2] hover:bg-s2s-line"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectGallery;
