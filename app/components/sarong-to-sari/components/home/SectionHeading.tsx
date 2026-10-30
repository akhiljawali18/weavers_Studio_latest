import type { ReactNode } from "react";
import { displayTitle, homeDisplayTitle, kicker as kickerClass } from "./typography";

type SectionHeadingProps = {
  kicker: string;
  children: ReactNode;
  id?: string;
  className?: string;
  /** `h1` when the heading names the whole page rather than one section of it. */
  as?: "h1" | "h2";
  /** `start-on-mobile` sets it flush left on phones and centred from `lg`, as "Tagore's voyage" is. */
  align?: "center" | "start-on-mobile";
  /** `home` follows the home page's mobile design: a 58px title line tucked 5px under the kicker. */
  variant?: "default" | "home";
};

/** Spaced capitals over a Bodoni title: the heading every section opens with. */
const SectionHeading = ({
  kicker,
  children,
  id,
  className = "",
  as: Heading = "h2",
  align = "center",
  variant = "default",
}: SectionHeadingProps) => (
  <div className={`${align === "center" ? "text-center" : "text-left lg:text-center"} ${className}`}>
    <p className={kickerClass}>{kicker}</p>
    <Heading
      id={id}
      className={variant === "home" ? `-mt-[5px] md:-mt-[3px] ${homeDisplayTitle}` : `-mt-[3px] ${displayTitle}`}
    >
      {children}
    </Heading>
  </div>
);

export default SectionHeading;
