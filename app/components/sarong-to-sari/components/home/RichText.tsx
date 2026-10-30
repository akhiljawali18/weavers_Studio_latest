import { Fragment } from "react";
import { linkEmails } from "../EmailLink";
import type { RichText as RichTextContent, RichTextTone } from "../../types";

const toneClass: Record<RichTextTone, string> = {
  strong: "font-medium",
  bold: "font-bold",
  accent: "font-Bodoni italic text-s2s-maroon",
  maroon: "text-s2s-maroon",
  italic: "italic",
};

type RichTextProps = {
  content: RichTextContent;
};

/** Styled copy from the data files; any email address in it becomes a link. */
const RichText = ({ content }: RichTextProps) => (
  <>
    {content.map((part, index) =>
      typeof part === "string" ? (
        <Fragment key={index}>{linkEmails(part)}</Fragment>
      ) : part.href ? (
        <a
          key={index}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${toneClass[part.tone]} underline underline-offset-2 hover:text-s2s-maroon`}
        >
          {part.text}
        </a>
      ) : (
        <span key={index} className={toneClass[part.tone]}>
          {linkEmails(part.text)}
        </span>
      )
    )}
  </>
);

export default RichText;
