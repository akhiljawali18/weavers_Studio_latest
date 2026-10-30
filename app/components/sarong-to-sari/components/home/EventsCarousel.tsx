"use client";

import { Fragment, useState } from "react";
import Decoration from "./Decoration";
import ImageSlot from "./ImageSlot";
import RichText from "./RichText";
import UnderlineLink from "./UnderlineLink";
import { bodyText, displayTitle } from "./typography";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import type { ProgrammeEvent } from "../../data/home";

type EventsCarouselProps = {
  events: ProgrammeEvent[];
};

const pagerButton =
  "flex rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon";

/**
 * One programme at a time: its photograph, its text, and a "1/3" pager. As in the
 * design there is no arrow back from the first event or on from the last, and the
 * count stays centred whichever arrows are showing.
 */
const EventsCarousel = ({ events }: EventsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const event = events[index];
  const canPrevious = index > 0;
  const canNext = index < events.length - 1;

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Programmes and events"
      className="flex flex-col-reverse lg:flex-row lg:items-start"
    >
      {/* On phones the photograph drops below the text, as the mobile design draws it;
          on desktop it sits to the left. The two flowers and their hairlines cross the
          photograph's right edge, so they are pinned to it and stay at any width. */}
      <div className="relative mt-[43px] aspect-[308/335] w-[79%] lg:mt-0 lg:aspect-[596/570] lg:w-[41.39%] lg:shrink-0">
        <ImageSlot
          src={event.image}
          alt={event.imageAlt}
          sizes="(min-width: 992px) 42vw, 100vw"
          className="absolute inset-0"
        />
        <Decoration
          file={event.decoration}
          width={263}
          height={341}
          className="-bottom-[6px] left-[calc(100%-83px)] !h-[270px] !w-[180px] lg:!h-[341px] lg:!w-[263px]"
        />
      </div>

      <div className="relative px-4 pt-10 lg:ml-[17.36%] lg:mt-[38px] lg:w-[36.32%] lg:px-0 lg:pt-0">
        <div className="flex items-center gap-[11px] text-[16px] font-medium leading-[19px] tracking-[1.92px] text-s2s-gray lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <span className="justify-self-end">
            {canPrevious && (
              <button
                type="button"
                onClick={() => setIndex(index - 1)}
                aria-label="Previous event"
                className={pagerButton}
              >
                <ChevronLeftIcon className="h-[16px] w-[16px]" />
              </button>
            )}
          </span>
          <span aria-live="polite">
            {index + 1}/{events.length}
          </span>
          <span className="justify-self-start">
            {canNext && (
              <button
                type="button"
                onClick={() => setIndex(index + 1)}
                aria-label="Next event"
                className={pagerButton}
              >
                <ChevronRightIcon className="h-[16px] w-[16px]" />
              </button>
            )}
          </span>
        </div>

        {/* The design gives a two-line title a 105px box (the second line overhangs
            it) and a one-line title its own 58px, with the text 47px below either. */}
        <h3
          className={`mt-7 text-left lg:max-h-[105px] lg:text-center ${displayTitle}`}
        >
          <span className="italic">{event.titleItalic}</span>
          {event.titleRegular && (
            <>
              <br />
              {event.titleRegular}
            </>
          )}
        </h3>

        <p className={`mt-9 lg:mt-[47px] lg:px-[47px] ${bodyText}`}>
          {event.lines.map((line, lineIndex) => (
            <Fragment key={lineIndex}>
              {lineIndex > 0 && <br />}
              <RichText content={line} />
            </Fragment>
          ))}
        </p>

        <UnderlineLink
          href={event.link.href}
          className="mt-9 lg:ml-[47px] lg:mt-[39px]"
        >
          {event.link.label}
        </UnderlineLink>
      </div>
    </div>
  );
};

export default EventsCarousel;
