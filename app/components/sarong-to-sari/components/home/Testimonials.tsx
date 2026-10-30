"use client";

import { useState } from "react";
import Image from "next/image";
import { S2S_ASSETS } from "../../data/home";
import type { Testimonial } from "../../data/home";

type TestimonialsProps = {
  items: Testimonial[];
};

type ArrowProps = {
  direction: "previous" | "next";
  onClick: () => void;
};

/** The design's grey arrow, at the left or right edge, level with the quote's middle. */
const Arrow = ({ direction, onClick }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "previous" ? "Previous testimonial" : "Next testimonial"}
    className={`absolute top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon ${
      direction === "previous" ? "left-0" : "right-0"
    }`}
  >
    <span className={`relative block h-[24px] w-[24px] -rotate-90 ${direction === "next" ? "-scale-y-100" : ""}`}>
      {/* The design draws this arrow in grey; the shared arrow is maroon, so it is greyed here. */}
      <span className="absolute left-[6.25px] top-[2.25px] h-[19px] w-[10.5px] opacity-75 grayscale">
        <Image src={`${S2S_ASSETS}/arrow-maroon.svg`} alt="" fill unoptimized />
      </span>
    </span>
  </button>
);

/**
 * One quotation at a time. As in the design there is no way back from the first;
 * the arrow on the last slide, which the design leaves unlinked, returns to the first.
 */
const Testimonials = ({ items }: TestimonialsProps) => {
  const [index, setIndex] = useState(0);
  const item = items[index];

  return (
    <div className="relative mx-5 min-h-[132px] lg:ml-[60px] lg:mr-0 lg:w-[1000px] lg:max-w-[calc(100%-80px)]">
      <figure className="px-[34px] lg:pl-[98px] lg:pr-0" aria-live="polite">
        <figcaption className="text-[15px] uppercase leading-[18px] tracking-[1.8px] text-s2s-gray opacity-70">
          {item.attribution}
        </figcaption>
        <blockquote
          className="mt-[6px] font-Bodoni text-[18px] italic leading-[32px] text-s2s-ink md:text-[21px] md:leading-[36px]"
          style={{ maxWidth: item.width }}
        >
          {item.quote}
        </blockquote>
      </figure>
      {index > 0 && <Arrow direction="previous" onClick={() => setIndex(index - 1)} />}
      {items.length > 1 && <Arrow direction="next" onClick={() => setIndex((index + 1) % items.length)} />}
    </div>
  );
};

export default Testimonials;
