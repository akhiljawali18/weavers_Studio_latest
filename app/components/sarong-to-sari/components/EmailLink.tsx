import { Fragment } from "react";
import type { ReactNode } from "react";

type EmailLinkProps = {
  address: string;
  className?: string;
};

/** Gmail's "new message" window with the address already in the To field. */
const gmailCompose = (address: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`;

/** An email address as a link: it opens a new Gmail message to that address in a new tab. */
const EmailLink = ({ address, className = "" }: EmailLinkProps) => (
  <a href={gmailCompose(address)} target="_blank" rel="noopener noreferrer" className={className}>
    {address}
  </a>
);

const emailPattern = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

/** How an address found inside running text looks: the copy's weight steps up, maroon on hover. */
const inlineEmailClass = "font-medium hover:text-s2s-maroon";

/**
 * Turns every email address in a piece of text into an EmailLink, so addresses
 * pasted into content become links without any markup.
 */
export const linkEmails = (text: string): ReactNode =>
  text.split(emailPattern).map((piece, index) =>
    index % 2 === 1 ? (
      <EmailLink key={index} address={piece} className={inlineEmailClass} />
    ) : (
      <Fragment key={index}>{piece}</Fragment>
    )
  );

export default EmailLink;
