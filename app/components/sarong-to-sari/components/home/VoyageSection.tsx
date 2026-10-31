import Decoration from "./Decoration";
import ImageSlot from "./ImageSlot";
import RichText from "./RichText";
import SectionHeading from "./SectionHeading";
import { bodyText } from "./typography";
import {
  hiddenOnMobile,
  voyageImage,
  voyageIntro,
  voyageParagraphs,
} from "../../data/home";
import { sectionGap } from "./spacing";

const [firstParagraph, secondParagraph] = voyageParagraphs;

const VoyageSection = () => (
  <section
    id="journey"
    aria-labelledby="voyage-heading"
    className={`relative mx-auto w-full scroll-mt-[64px] ${sectionGap}`}
  >
    <div className="flex flex-col lg:flex-row">
      <div
        className={`pl-4 pr-[28px] lg:w-[49.375%] lg:shrink-0 lg:pb-0 lg:pl-[10.28%] lg:pr-0 lg:pt-[80px] ${
          hiddenOnMobile.voyagePortrait ? "" : "pb-10"
        }`}
      >
        <div className="lg:max-w-[448px]">
          <SectionHeading
            id="voyage-heading"
            kicker="A century since"
            align="start-on-mobile"
            variant="home"
          >
            <span className="italic">Tagore’s</span> voyage
          </SectionHeading>
          <p className={`mt-[21px] lg:mt-10 ${bodyText}`}>
            <RichText content={voyageIntro} />
          </p>
        </div>
      </div>
      <ImageSlot
        src={voyageImage.src}
        alt={voyageImage.alt}
        sizes="(min-width: 992px) 51vw, 100vw"
        className={`aspect-[729/411] w-full lg:block lg:w-[50.625%] ${hiddenOnMobile.voyagePortrait ? "hidden" : ""}`}
      />
    </div>

    {/* On phones the first paragraph is indented beside a ruled line that ends in
        the wave ornament, and the second runs full width beneath it. */}
    <div
      className={`relative flex flex-col gap-[37px] lg:min-h-[411px] lg:flex-row lg:gap-[50px] lg:pl-[35.28%] lg:pr-[10.28%] lg:pt-[123px] ${
        hiddenOnMobile.voyagePortrait ? "pt-[58px]" : "pt-10"
      }`}
    >
      {/* The ruled margin with the wave ornament at its foot (desktop only). */}
      <Decoration
        file="deco-voyage-wave.svg"
        width={700}
        height={377}
        className="left-0 top-[35px] hidden lg:block"
      />
      {/* The two columns split the width evenly, as in the design. Between 1200 and
          1439px the second paragraph, which is a little longer, gets 51% so the two
          still end on the same line there. */}
      <div className="relative min-h-[350px] pl-[92px] pr-[15px] lg:min-h-0 lg:flex-1 lg:p-0 xl:flex-[49_1_0%] min-[1440px]:flex-1">
        <Decoration
          file="deco-voyage-wave.svg"
          width={520}
          height={420}
          className="-left-[78px] top-[30px] lg:hidden"
        />
        <p className={`relative ${bodyText}`}>
          <RichText content={firstParagraph} />
        </p>
      </div>
      {/* Both paragraphs are justified on desktop, so their right edges line up. */}
      <p
        className={`pl-[17px] pr-[28px] lg:flex-1 lg:p-0 xl:flex-[51_1_0%] min-[1440px]:flex-1 ${bodyText}`}
      >
        <RichText content={secondParagraph} />
      </p>
    </div>
  </section>
);

export default VoyageSection;
