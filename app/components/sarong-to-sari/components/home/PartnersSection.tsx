import type { CSSProperties } from "react";
import ImageSlot from "./ImageSlot";
import SectionHeading from "./SectionHeading";
import { kicker } from "./typography";
import { partners } from "../../data/home";
import type { PartnerLogo } from "../../data/home";
import { sectionGap } from "./spacing";

/**
 * Each logo keeps the box it has in the design; the sizes live with the data.
 * Most of the logo files are JPEGs on white, and multiplying them onto the grey
 * band drops that white box without touching the files.
 */
const LogoBox = ({ logo }: { logo: PartnerLogo }) => (
  <div
    style={
      {
        "--mw": `${logo.mWidth}px`,
        "--mh": `${logo.mHeight}px`,
        "--w": `${logo.width}px`,
        "--h": `${logo.height}px`,
      } as CSSProperties
    }
    className="h-[var(--mh)] w-[var(--mw)] max-w-full shrink-0 lg:h-[var(--h)] lg:w-[var(--w)]"
  >
    <ImageSlot
      src={logo.src}
      alt={logo.name}
      sizes={`${logo.width * 2}px`}
      className="h-full w-full"
      imageClassName="object-contain mix-blend-multiply"
    />
  </div>
);

/** Group labels sit in the medium weight, a step heavier than the section kicker. */
const label = `font-medium ${kicker}`;

/** A thin rule standing between two groups of logos, from the top of the label down. */
const divider =
  "lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:w-px lg:before:bg-s2s-line";

const PartnersSection = () => (
  <section
    aria-labelledby="partners-heading"
    className={`w-full ${sectionGap}`}
  >
    <SectionHeading
      id="partners-heading"
      kicker="Sarong to Sari"
      variant="home"
    >
      <span className="italic">Partners</span>
    </SectionHeading>

    <div className="mt-[42px] bg-s2s-mist">
      <div className="mx-auto px-5 py-14 lg:px-0 lg:pb-[92px] lg:pt-[82px]">
        <div className="grid gap-12 lg:grid-cols-[26.6%_23.4%_50%] lg:gap-0 grid-cols-2">
          <div className="flex flex-col items-center lg:pl-[16.19%]">
            <p className={label}>Presented by</p>
            <div className="mt-[13px] lg:mt-[31px]">
              <LogoBox logo={partners.presentedBy} />
            </div>
          </div>
          <div
            className={`relative flex flex-col items-center ${divider} lg:before:h-[192px]`}
          >
            <p className={label}>Presenting partner</p>
            <div className="mt-[13px] lg:mt-[45px]">
              <LogoBox logo={partners.presentingPartner} />
            </div>
          </div>
          <div className={`relative ${divider} lg:before:h-[192px]`}>
            {/* Emami on a line of its own, the other supporters in a row beneath it. */}
            <div className="md:flex hidden flex-col items-center lg:pr-[5.14%]">
              <p className={label}>Supported by</p>
              {partners.supportedBy.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex flex-wrap items-center justify-center gap-3 lg:flex-nowrap lg:gap-[98px] ${
                    rowIndex === 0 ? "mt-4" : "mt-[26px]"
                  }`}
                >
                  {row.map((logo) => (
                    <LogoBox key={logo.name} logo={logo} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center lg:pr-[5.14%]">
          <p className={label}>Supported by</p>
          {partners.supportedByMobile.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap ${
                rowIndex === 0 ? "mt-4" : "mt-[26px]"
              }`}
            >
              {row.map((logo) => (
                <LogoBox key={logo.name} logo={logo} />
              ))}
            </div>
          ))}
        </div>{" "}
        <div className="mt-12 grid gap-12 lg:mt-[73px] lg:grid-cols-2 lg:gap-0">
          <div>
            <p className={`text-center lg:pl-[6.25%] ${label}`}>
              In collaboration with
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-8 lg:mt-[21px] lg:h-[110px] lg:flex-nowrap lg:justify-between lg:gap-4 lg:pl-[15.42%] lg:pr-[9.17%]">
              {partners.collaboration.map((logo) => (
                <LogoBox key={logo.name} logo={logo} />
              ))}
            </div>
          </div>
          <div className={`relative ${divider} lg:before:h-[160px]`}>
            <p className={`text-center lg:pr-[5.42%] ${label}`}>
              Venue partners
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-8 lg:mt-[39px] lg:h-[80px] lg:flex-nowrap lg:justify-between lg:gap-4 lg:pl-[9.31%] lg:pr-[14.72%]">
              {partners.venues.map((logo) => (
                <LogoBox key={logo.name} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
