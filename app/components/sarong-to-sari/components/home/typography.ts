/**
 * The handful of text styles the Sarong to Sari design repeats on every section.
 * Named here for the same reason as ../buttons.ts: a change to how a kicker looks
 * should be one edit, not a hunt through nine files.
 */

/** Small spaced capitals above (or under) a section title. */
export const kicker =
  "text-[14px] uppercase leading-[17px] tracking-[1.68px] text-s2s-ink md:text-[16px] md:leading-[19px] md:tracking-[1.92px]";

/** The maroon Bodoni display line: "Sarong to Sari", "Tagore's voyage", "Partners". */
export const displayTitle =
  "font-Bodoni text-[36px] font-normal leading-[46px] tracking-[-1.35px] text-s2s-maroon md:text-[45px] md:leading-[58px]";

/**
 * The display title as the home page's mobile design sets it: a 58px line, like
 * desktop, and the tracking scaled to the 36px size. Other pages keep
 * `displayTitle` until their own mobile designs are checked.
 */
export const homeDisplayTitle =
  "font-Bodoni text-[36px] font-normal leading-[58px] tracking-[-1.08px] text-s2s-maroon md:text-[45px] md:tracking-[-1.35px]";

export const bodyText = "text-[16px] leading-[28px] text-s2s-ink";

/** Black spaced capitals in the medium weight: "With Sabine Bolk", "Object details". */
export const labelCaps = "text-[14px] font-medium uppercase leading-[24px] tracking-[1.68px] text-black";
