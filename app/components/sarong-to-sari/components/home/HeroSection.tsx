import { Fragment } from "react";
import Image from "next/image";
import Decoration from "./Decoration";
import HeroVideo from "./HeroVideo";
import RichText from "./RichText";
import UnderlineLink from "./UnderlineLink";
import { bodyText, homeDisplayTitle, kicker } from "./typography";
import {
  S2S_ASSETS,
  exhibitionVenues,
  heroIntro,
  heroVideo,
  hiddenOnMobile,
} from "../../data/home";

/** Breaks the line wherever the data has "\n", on phones only; on desktop the words run on. */
const MobileLines = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((part, index) => (
      <Fragment key={index}>
        {index > 0 && (
          <>
            {" "}
            <br className="lg:hidden" />
          </>
        )}
        {part}
      </Fragment>
    ))}
  </>
);

const HeroSection = () => (
  <section
    id="exhibition"
    className="relative mx-auto w-full scroll-mt-[64px] px-5 pt-[30px] lg:px-[72px] lg:pt-[44px]"
  >
    {/* Flush under the header: centred above the title on phones (the negative margin
        cancels the section's top padding), in the top-left corner on desktop. */}
    <Image
      src={`${S2S_ASSETS}/wsrc-logo.jpg`}
      alt="Weavers Studio Resource Centre"
      width={211}
      height={136}
      priority
      className={`mx-auto -mt-[30px] mb-6 h-auto w-[140px] lg:absolute lg:left-[31px] lg:top-0 lg:m-0 lg:w-[211px] ${
        hiddenOnMobile.wsrcLogo ? "hidden lg:block" : "block"
      }`}
    />

    <div className="text-center">
      {/* The WSRC logo above already carries the full name, so phones show just
          "presents", as the mobile design does; desktop keeps the full line. */}
      <p className={kicker}>
        <span className="lg:hidden">presents</span>
        <span className="hidden lg:inline">
          Weavers Studio Resource Centre presents
        </span>
      </p>
      <h1 className={`-mt-[12px] md:-mt-[3px] ${homeDisplayTitle}`}>
        <span className="italic">Sarong</span> to{" "}
        <span className="italic">Sari</span>
      </h1>
      <p className="text-[12px] uppercase leading-[14px] tracking-[1.44px] text-s2s-ink md:mt-[7px] md:text-[14px] md:leading-[17px] md:tracking-[1.68px]">
        — Exhibition —
      </p>
      <p
        className={`mx-auto mt-[23px] max-w-[329px] md:mt-[25px] md:max-w-[647px] ${bodyText}`}
      >
        <RichText content={heroIntro} />
      </p>
    </div>

    {/* A tall portrait frame on phones, the wide landscape one from `lg`. */}
    <div className="relative mx-auto mt-[34px] max-w-[317px] lg:mt-10 lg:max-w-none">
      <HeroVideo
        src={heroVideo.src}
        mobileSrc={heroVideo.mobileSrc}
        poster={heroVideo.poster}
      />
      <span
        aria-hidden
        className="absolute -left-[52px] -right-[36px] bottom-0 hidden h-px bg-s2s-line lg:block"
      />
      {/* <Decoration
        file="deco-batik-cluster.svg"
        width={79}
        height={166}
        className="-right-[23px] -top-[11px] lg:block hidden"
      /> */}
      <Decoration
        file="deco-paisley-maroon.svg"
        width={95}
        height={118}
        className="-left-[21px] bottom-0 lg:hidden block"
      />
      {/* Desktop: the cluster overlaps the film's top-right corner and the paisley
          sits on its foot, so both are pinned to the film and follow its height. */}
      {/* <Decoration
        file="deco-batik-cluster.svg"
        width={124}
        height={260}
        className="-right-[42px] -top-[48px]"
      /> */}
      <Decoration
        file="deco-paisley-maroon.svg"
        width={130}
        height={161}
        className="-bottom-px -left-[47px] lg:block hidden"
      />
    </div>

    <ul className="mt-[33px] flex flex-col gap-[15px] lg:mt-12 lg:grid lg:grid-cols-[441fr_412fr_443fr] lg:gap-0">
      {exhibitionVenues.map((item, index) => (
        <li
          key={item.dates}
          className={`relative text-center ${bodyText} lg:min-h-[68px] lg:pt-[6px] ${
            index > 0
              ? // A short rule between venues on phones; a full-height one on desktop.
                "pt-4 before:absolute before:left-1/2 before:top-0 before:h-px before:w-[288px] before:-translate-x-1/2 before:bg-s2s-line lg:border-l lg:border-s2s-line lg:before:hidden"
              : ""
          }`}
        >
          <span className="block font-medium">
            <MobileLines text={item.dates} />
          </span>
          <span className="block">
            <MobileLines text={item.venue} />
          </span>
        </li>
      ))}
    </ul>

    {/* Side by side on phones too. The second label runs past its 132px box, so the
        pair sits 10px left of centre to look centred, as in the mobile design. */}
    <div className="mt-[44px] flex flex-wrap justify-center gap-x-[31px] gap-y-6 pr-[21px] lg:mt-[60px] lg:gap-x-[140px] lg:pr-0">
      <UnderlineLink href="#journey">follow the journey</UnderlineLink>
      <UnderlineLink href="/sarong-to-sari/programme">
        programmes &amp; events
      </UnderlineLink>
    </div>
  </section>
);

export default HeroSection;
