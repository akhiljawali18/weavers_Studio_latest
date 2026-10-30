import type { RichText } from "../types";
import { S2S_ASSETS } from "./home";
import objectsJson from "./community-objects.json";

export type ArchiveFact = { label: string; value: string };

/**
 * One object as written in community-objects.json. Every object has the same
 * shape, so adding one is adding an entry to that file: the listing loops over
 * them and each gets its own page at /microsite/community-archive/<slug>.
 *
 * - `titleItalic` / `titleRegular`: the title split into its Bodoni italic and
 *   upright parts, e.g. "Batik" + " Sari".
 * - `images`: file names inside public/images/sarong-to-sari, in slider order;
 *   `null` holds the place of a photograph still to come.
 * - `attribution`: the spaced capitals under the title, one entry per line.
 * - `summary` / `description`: text with emphasis, in the RichText format
 *   (plain strings, or { "text": "…", "tone": "strong" | "accent" | "maroon" }).
 */
type ArchiveObjectRecord = {
  slug: string;
  titleItalic: string;
  titleRegular: string;
  technique: string;
  collection: string;
  date: string;
  images: (string | null)[];
  imageAlt: string;
  attribution: string[];
  facts: ArchiveFact[];
  summary: RichText;
  description: RichText[];
};

export type ArchiveObject = Omit<ArchiveObjectRecord, "images"> & {
  /** Full image paths; `undefined` is a photograph still to come. */
  images: (string | undefined)[];
};

export const archiveObjects: ArchiveObject[] = (objectsJson as ArchiveObjectRecord[]).map((record) => ({
  ...record,
  images: record.images.map((file) => (file ? `${S2S_ASSETS}/${file}` : undefined)),
}));

export const findArchiveObject = (slug: string) => archiveObjects.find((object) => object.slug === slug);

export const communityIntro = [
  "Objects contributed by visitors, families and collectors.",
  "Explore the holdings and add your voice to each record.",
];

/** A term the search box suggests: a place the objects come from, or a period. */
export type ArchiveSuggestion = { value: string; kind: "location" | "year" };

/**
 * The places an object is from. Its last attribution line is always
 * "<place>, …, <date>"; the place parts carry no digits, the date does, so the
 * digit-free comma parts are the locations (e.g. "Kala Bhavana", "Santiniketan").
 */
const locationsOf = (object: ArchiveObject): string[] => {
  const line = object.attribution[object.attribution.length - 1] ?? "";
  return line
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && !/\d/.test(part));
};

const firstYear = (date: string): number => {
  const match = date.match(/\d{4}/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
};

/** Every distinct location (A→Z) then every distinct period (earliest first). */
export const archiveSuggestions: ArchiveSuggestion[] = (() => {
  const locations = new Set<string>();
  const years = new Set<string>();
  for (const object of archiveObjects) {
    locationsOf(object).forEach((location) => locations.add(location));
    if (object.date.trim()) years.add(object.date.trim());
  }
  return [
    ...Array.from(locations)
      .sort((a, b) => a.localeCompare(b))
      .map((value): ArchiveSuggestion => ({ value, kind: "location" })),
    ...Array.from(years)
      .sort((a, b) => firstYear(a) - firstYear(b) || a.localeCompare(b))
      .map((value): ArchiveSuggestion => ({ value, kind: "year" })),
  ];
})();

/** Whether an object matches a search term, by its location or its period. */
export const objectMatches = (object: ArchiveObject, term: string): boolean => {
  const needle = term.trim().toLowerCase();
  if (!needle) return true;
  const inLocation = locationsOf(object).some((location) => location.toLowerCase().includes(needle));
  return inLocation || object.date.toLowerCase().includes(needle);
};
