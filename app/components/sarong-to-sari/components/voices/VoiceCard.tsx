"use client";

import { useId, useState } from "react";
import ImageSlot from "../home/ImageSlot";
import RichText from "../home/RichText";
import { MinusIcon, PlusIcon } from "../icons";
import type { Voice } from "../../data/voices";

/**
 * One artist, scholar or curator: portrait, name, and a biography cut to three
 * lines that "read more" opens in place. As in the design the cut is a clean one,
 * with no ellipsis.
 */
const VoiceCard = ({ nameItalic, nameRegular, bio, image, imagePosition, imageAlt }: Voice) => {
  const [expanded, setExpanded] = useState(false);
  const bioId = useId();

  return (
    <article className="flex flex-col gap-[10px]">
      <ImageSlot
        src={image}
        alt={imageAlt}
        sizes="(min-width: 992px) 30vw, (min-width: 576px) 50vw, 100vw"
        className="aspect-[422/363] w-full lg:aspect-auto lg:h-[363px]"
        objectPosition={imagePosition}
      />
      <h2 className="font-Bodoni text-[24px] font-normal leading-[36px] text-s2s-maroon">
        <span className="italic">{nameItalic}</span>
        {nameRegular}
      </h2>
      <div className="pb-[6px]">
        <p
          id={bioId}
          className={`text-[15px] leading-[25px] text-s2s-ink opacity-80 ${expanded ? "" : "max-h-[75px] overflow-hidden"}`}
        >
          <RichText content={bio} />
        </p>
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          aria-controls={bioId}
          className="mt-[2px] flex h-[25px] w-fit items-center gap-[2px] rounded-sm text-[15px] lowercase leading-[24.8px] text-s2s-gold transition-opacity hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-gold"
        >
          {expanded ? "read less" : "read more"}
          {expanded ? <MinusIcon className="h-[18px] w-[18px]" /> : <PlusIcon className="h-[18px] w-[18px]" />}
        </button>
      </div>
    </article>
  );
};

export default VoiceCard;
