import Image from "next/image";
import ImageSlot from "./ImageSlot";
import { S2S_ASSETS, tagoreQuote } from "../../data/home";
import { sectionGap } from "./spacing";

type TurnedClusterProps = {
  /** The motif's own (upright) size; the box it sits in is that turned on its side. */
  width: number;
  height: number;
  className: string;
};

/** The hero's batik cluster again, turned a quarter clockwise. */
const TurnedCluster = ({ width, height, className }: TurnedClusterProps) => (
  <div aria-hidden className={`pointer-events-none absolute ${className}`} style={{ width: height, height: width }}>
    <Image
      src={`${S2S_ASSETS}/deco-batik-cluster.svg`}
      alt=""
      width={width}
      height={height}
      unoptimized
      className="absolute max-w-none rotate-90"
      style={{ width, height, left: (height - width) / 2, top: (width - height) / 2 }}
    />
  </div>
);

/** Full-width maroon band carrying Tagore's line from 1927. */
const QuoteBand = () => (
  <section aria-label="From Rabindranath Tagore" className={`relative w-full bg-s2s-maroon ${sectionGap}`}>
    <ImageSlot src={tagoreQuote.background} alt="" tone="none" className="absolute inset-0" />
    <figure className="relative mx-auto flex min-h-[513px] max-w-[510px] flex-col items-center justify-center px-5 py-16 text-center text-white">
      <blockquote className="max-w-[324px] font-Bodoni text-[24px] italic leading-[36px] lg:max-w-none">
        {tagoreQuote.text}
      </blockquote>
      <figcaption className="mt-[30px] text-[16px] uppercase leading-[19px] tracking-[1.92px] lg:mt-[35px]">
        {tagoreQuote.attribution}
      </figcaption>
    </figure>

    {/* The cluster spills over the band's lower edge: larger on desktop, smaller
        and tucked to the right on phones. */}
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 mx-auto hidden h-full lg:block">
      <TurnedCluster width={124} height={260} className="-bottom-[36px] left-[77.43%]" />
    </div>
    <TurnedCluster width={81} height={169} className="-bottom-[23px] right-4 lg:hidden" />
  </section>
);

export default QuoteBand;
