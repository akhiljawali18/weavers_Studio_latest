import type { SarongToSariNavItem } from "../types";

// The Sarong to Sari header. "the journey" is a section of the home page, so it is a
// fragment; the other links have pages of their own.
export const sarongToSariNavigation: SarongToSariNavItem[] = [
  { label: "exhibition", href: "/sarong-to-sari" },
  { label: "the journey", href: "/sarong-to-sari#journey" },
  { label: "programme", href: "/sarong-to-sari/programme" },
  { label: "voices", href: "/sarong-to-sari/voices" },
  { label: "community archive", href: "/sarong-to-sari/community-archive" },
];
