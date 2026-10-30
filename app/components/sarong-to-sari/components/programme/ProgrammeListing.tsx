"use client";

import { useId, useMemo, useState } from "react";
import ProgrammeCard from "./ProgrammeCard";
import { kicker } from "../home/typography";
import { eventTypes } from "../../data/programme";
import type { EventType } from "../../data/programme";

type Filter = "all" | EventType;

const chipBase = "h-[34px] rounded-[4px] border border-s2s-maroon px-[15px] text-[14px] lowercase leading-none transition-colors duration-200 " + "focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-2";

type ProgrammeListingProps = {
    items: any;
};

/** The "sort by event type" chips and the grid of events they filter. */
const ProgrammeListing = ({ items }: ProgrammeListingProps) => {
    const [filter, setFilter] = useState<Filter>("all");
    const labelId = useId();

    const visible = useMemo(
        () =>
            filter === "all"
                ? items ?? []
                : (items ?? []).filter((item: any) => item?.Ticket_Json?.type === filter),
        [filter, items],
    );
    return (
        <div>
            {/* The chips are centred in the space to the right of the label. */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-[10px]">
                <p id={labelId} className={`shrink-0 font-medium ${kicker}`}>
                    Sort by event type
                </p>
                <div role="group" aria-labelledby={labelId} className="flex flex-wrap gap-x-[10px] gap-y-[11px] lg:flex-1 lg:justify-start">
                    {(["all", ...eventTypes] as Filter[]).map((type) => {
                        const active = filter === type;
                        return (
                            <button key={type} type="button" onClick={() => setFilter(type)} aria-pressed={active} className={`${chipBase} ${active ? "bg-s2s-maroon text-white" : "bg-white text-s2s-maroon hover:bg-s2s-maroon hover:text-white"}`}>
                                {type}
                            </button>
                        );
                    })}
                </div>
            </div>

            {visible?.length > 0 ? (
                <ul className="mt-10 grid gap-x-[81px] gap-y-12 sm:grid-cols-2 lg:mt-[59px] lg:grid-cols-3 lg:gap-y-[50px] min-[1920px]:grid-cols-4">
                    {visible?.map((item) => (
                        <li key={item?.Ticket_Json?.slug ?? item?.slug}>
                            <ProgrammeCard ticket={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mt-10 text-center text-[16px] leading-[28px] text-s2s-muted lg:mt-[59px]" aria-live="polite">
                    Nothing in this category has been announced yet.
                </p>
            )}
        </div>
    );
};

export default ProgrammeListing;
