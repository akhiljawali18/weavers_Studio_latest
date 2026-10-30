import Image from "next/image";
import { S2S_ASSETS } from "../../data/home";

type DecorationProps = {
  /** File name inside the Sarong to Sari asset folder. */
  file: string;
  width: number;
  height: number;
  /** Placement, e.g. `left-[25px] top-[617px]`. Add `hidden lg:block` or `lg:hidden` to limit it to one layout. */
  className: string;
};

/**
 * A purely ornamental motif from the design, pinned in place. Which screen sizes
 * show it is up to the caller, through `className`.
 */
const Decoration = ({ file, width, height, className }: DecorationProps) => (
  <Image
    src={`${S2S_ASSETS}/${file}`}
    alt=""
    aria-hidden
    width={width}
    height={height}
    unoptimized
    style={{ width, height }}
    className={`pointer-events-none absolute max-w-none ${className}`}
  />
);

export default Decoration;
