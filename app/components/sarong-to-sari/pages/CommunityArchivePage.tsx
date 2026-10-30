import Image from "next/image";
import ArchiveBrowser from "../components/community/ArchiveBrowser";
import BackToTop from "../components/home/BackToTop";
import { bodyText, displayTitle, kicker } from "../components/home/typography";
import { S2S_ASSETS } from "../data/home";
import { archiveObjects, communityIntro } from "../data/community";

/**
 * "Community archive": a grey banner introducing the collection, then every object,
 * searchable. Spacing follows the design at 1440px.
 */
const CommunityArchivePage = () => (
  <div className="overflow-x-clip">
    <div className="relative mx-auto mt-0 lg:mt-[54px]">
      <section
        aria-labelledby="community-archive-heading"
        className="bg-s2s-mist px-5 py-12 lg:w-[95.83%] lg:pb-[86px] lg:pl-[11.94%] lg:pr-0 lg:pt-[54px]"
      >
        <div className="text-center lg:inline-block">
          <p className={kicker}>A collection</p>
          <h1
            id="community-archive-heading"
            className={`-mt-[3px] ${displayTitle}`}
          >
            <span className="italic">built by</span> its community
          </h1>
        </div>
        <p className={`mt-6 lg:mt-[27px] ${bodyText}`}>
          {communityIntro.map((line, index) => (
            <span key={index} className="lg:block">
              {line}{" "}
            </span>
          ))}
        </p>
      </section>

      {/* The vertical rule with the boat motif and the gold wave riding the banner's
          lower edge, all in one export. Its rule (597px into the image) stays 90px
          inside the banner's right edge at any width; the banner is 95.83% wide, so
          the image's right edge sits at calc(4.17% - 56px). It starts 53px into the
          banner and runs past its foot, as in the design. The JPEG's white ground is
          multiplied away. */}
      <Image
        src={`${S2S_ASSETS}/deco-community-banner.jpg`}
        alt=""
        aria-hidden
        width={743}
        height={288}
        unoptimized
        style={{ width: 743, height: 288 }}
        className="pointer-events-none absolute right-[calc(4.17%-56px)] top-[53px] hidden max-w-none mix-blend-multiply lg:block"
      />
    </div>

    <section
      aria-label="Objects"
      className="mx-auto mt-14 max-w-[1137px] px-5 lg:mt-[95px] min-[1440px]:max-w-[79%]"
    >
      <ArchiveBrowser objects={archiveObjects} />
    </section>

    <BackToTop />
  </div>
);

export default CommunityArchivePage;
