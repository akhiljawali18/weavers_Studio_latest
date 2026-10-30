export type SarongToSariNavItem = {
  label: string;
  href: string;
};

export type RichTextTone = "strong" | "bold" | "accent" | "maroon" | "italic";

export type RichText = Array<string | { text: string; tone: RichTextTone; href?: string }>;
