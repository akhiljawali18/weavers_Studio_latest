"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import ArchiveCard from "./ArchiveCard";
import { kicker } from "../home/typography";
import { S2S_ASSETS } from "../../data/home";
import { archiveSuggestions, objectMatches } from "../../data/community";
import type { ArchiveObject } from "../../data/community";

type ArchiveBrowserProps = {
  objects: ArchiveObject[];
};

/**
 * The object count, the search box and the grid they filter. Typing narrows the
 * grid as you go and the box offers matching places and periods beneath it, as a
 * search engine does; choosing one fills the box and filters the grid.
 */
const ArchiveBrowser = ({ objects }: ArchiveBrowserProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const ids = { search: useId(), list: useId() };
  const boxRef = useRef<HTMLDivElement>(null);

  const needle = query.trim().toLowerCase();
  const visible = objects.filter((object) => objectMatches(object, query));

  const suggestions = needle
    ? archiveSuggestions.filter((item) => item.value.toLowerCase().includes(needle))
    : archiveSuggestions;
  const showList = open && suggestions.length > 0;

  // Close the suggestions when a click or tap lands outside the search box.
  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const choose = (value: string) => {
    setQuery(value);
    setOpen(false);
    setActive(-1);
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && suggestions.length) {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (index + 1) % suggestions.length);
    } else if (event.key === "ArrowUp" && suggestions.length) {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (index <= 0 ? suggestions.length - 1 : index - 1));
    } else if (event.key === "Enter") {
      if (showList && active >= 0 && active < suggestions.length) {
        event.preventDefault();
        choose(suggestions[active].value);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[80px]">
        <div className="flex h-[47px] items-center border-b border-s2s-line pb-[5px] lg:w-[705px]">
          <p aria-live="polite" className={kicker}>
            {String(visible.length).padStart(2, "0")} objects
          </p>
        </div>

        <div ref={boxRef} className="relative lg:w-[312px]">
          <div className="flex h-[47px] items-center border-b border-s2s-line pb-[5px]">
            <label htmlFor={ids.search} className="sr-only">
              Search the archive by place or period
            </label>
            <input
              id={ids.search}
              type="search"
              role="combobox"
              aria-expanded={showList}
              aria-controls={ids.list}
              aria-autocomplete="list"
              aria-activedescendant={active >= 0 ? `${ids.list}-${active}` : undefined}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setOpen(true);
                setActive(-1);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={onKeyDown}
              placeholder="search by place or year"
              autoComplete="off"
              className="w-full bg-transparent pr-10 text-[16px] leading-[28px] text-s2s-ink placeholder:text-s2s-ink focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            <Image
              src={`${S2S_ASSETS}/icon-search.svg`}
              alt=""
              width={23.774}
              height={16.38}
              unoptimized
              className="pointer-events-none absolute right-0 h-[16.38px] w-[23.774px] max-w-none -rotate-[135deg] -scale-y-100"
            />
          </div>

          {showList && (
            <ul
              id={ids.list}
              role="listbox"
              aria-label="Suggestions"
              className="absolute left-0 right-0 top-full z-20 mt-2 max-h-[320px] overflow-auto border border-s2s-line bg-s2s-paper py-1 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            >
              {suggestions.map((item, index) => (
                <li
                  key={`${item.kind}-${item.value}`}
                  id={`${ids.list}-${index}`}
                  role="option"
                  aria-selected={index === active}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    choose(item.value);
                  }}
                  onMouseEnter={() => setActive(index)}
                  className={`flex cursor-pointer items-center justify-between gap-4 px-4 py-[9px] text-[16px] leading-[22px] text-s2s-ink ${
                    index === active ? "bg-s2s-panel" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Image
                      src={`${S2S_ASSETS}/icon-search.svg`}
                      alt=""
                      width={16}
                      height={11}
                      unoptimized
                      className="h-[11px] w-[16px] max-w-none shrink-0 -rotate-[135deg] -scale-y-100 opacity-50"
                    />
                    <span className="truncate">{item.value}</span>
                  </span>
                  <span className="shrink-0 text-[11px] uppercase tracking-[1px] text-s2s-soft">
                    {item.kind}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-10 grid gap-x-[80px] gap-y-12 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3 lg:gap-y-[50px] min-[1920px]:grid-cols-4">
          {visible.map((object) => (
            <li key={object.slug}>
              <ArchiveCard {...object} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-[16px] leading-[28px] text-s2s-muted lg:mt-[50px]">
          No objects match “{query.trim()}”.
        </p>
      )}
    </div>
  );
};

export default ArchiveBrowser;
