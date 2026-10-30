"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { S2S_ASSETS } from "../../data/home";

type ArrowProps = {
  direction: "previous" | "next";
  enabled: boolean;
  onClick: () => void;
  label: string;
};

/**
 * The design ships one upward arrow in two colours; turning it a quarter left gives
 * "previous", flipping it first gives "next". Maroon when there is somewhere to go,
 * pale grey when there is not.
 */
const Arrow = ({ direction, enabled, onClick, label }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={!enabled}
    aria-label={label}
    className={`absolute top-[7px] flex h-[24px] w-[24px] items-center justify-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon disabled:cursor-default ${
      direction === "previous" ? "left-[8px]" : "left-[48px]"
    }`}
  >
    <span className={`relative block h-[24px] w-[24px] -rotate-90 ${direction === "next" ? "-scale-y-100" : ""}`}>
      <span className="absolute left-[6.25px] top-[2.25px] h-[19px] w-[10.5px]">
        <Image src={`${S2S_ASSETS}/${enabled ? "arrow-maroon" : "arrow-light"}.svg`} alt="" fill unoptimized />
      </span>
    </span>
  </button>
);

type CarouselNavProps = {
  canPrevious: boolean;
  canNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  label: string;
};

export const CarouselNav = ({ canPrevious, canNext, onPrevious, onNext, label }: CarouselNavProps) => (
  <div className="relative h-[38px] w-[80px]">
    <Image
      src={`${S2S_ASSETS}/carousel-nav-frame.svg`}
      alt=""
      aria-hidden
      width={81}
      height={39}
      unoptimized
      className="pointer-events-none absolute left-[-0.5px] top-[-0.5px] h-[39px] w-[81px] max-w-none"
    />
    <Arrow direction="previous" enabled={canPrevious} onClick={onPrevious} label={`Previous ${label}`} />
    <Arrow direction="next" enabled={canNext} onClick={onNext} label={`Next ${label}`} />
  </div>
);

type CarouselProps = {
  /** Read out as "<label> carousel" and used in the arrow labels ("Next <item>"). */
  label: string;
  itemLabel: string;
  children: ReactNode;
  /** Padding and gap of the scrolling row. Children should carry `snap-start shrink-0`. */
  trackClassName?: string;
  navClassName?: string;
  showNav?: boolean;
  /** Keeps the arrows to `lg` and up; phones still swipe the row. */
  hideNavOnMobile?: boolean;
};

/**
 * A row that scrolls sideways, with the design's two-arrow control under it.
 *
 * It is a plain overflow container with scroll snapping rather than a slider
 * library: touchpads, touch screens and the keyboard all scroll it natively, and
 * the arrows only have to nudge it one card at a time.
 */
const Carousel = ({
  label,
  itemLabel,
  children,
  trackClassName = "",
  navClassName = "",
  showNav = true,
  hideNavOnMobile = false,
}: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    setCanPrevious(track.scrollLeft > 1);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [update]);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) {
      return;
    }
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        onScroll={update}
        className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${trackClassName}`}
      >
        {children}
      </div>
      {showNav && (
        <div className={`${hideNavOnMobile ? "hidden lg:flex" : "flex"} justify-center ${navClassName}`}>
          <div className="-translate-x-[1.5px]">
            <CarouselNav
              canPrevious={canPrevious}
              canNext={canNext}
              onPrevious={() => step(-1)}
              onNext={() => step(1)}
              label={itemLabel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
