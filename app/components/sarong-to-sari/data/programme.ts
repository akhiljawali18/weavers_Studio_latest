import type { RichText } from "../types";

export const eventTypes = ["workshop", "performance", "talk", "tour"] as const;

export type EventType = (typeof eventTypes)[number];

export const eventTypeLabel: Record<EventType, string> = {
  workshop: "Workshop",
  performance: "Performance",
  talk: "Talk",
  tour: "Tour",
};

export const typesWithExpert: readonly EventType[] = ["workshop"];

export type Paragraph = string | RichText;

export const programmeIntro = "";
