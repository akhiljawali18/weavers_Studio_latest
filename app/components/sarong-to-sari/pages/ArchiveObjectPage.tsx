import BackToTop from "../components/home/BackToTop";
import Decoration from "../components/home/Decoration";
import RichText from "../components/home/RichText";
import {
  bodyText,
  displayTitle,
  labelCaps,
} from "../components/home/typography";
import ObjectGallery from "../components/community/ObjectGallery";
import type { ArchiveObject } from "../data/community";

type ArchiveObjectPageProps = {
  object: ArchiveObject;
};

/**
 * One object from the community archive: its photographs beside the title and
 * catalogue facts, then a grey "Object details" panel with an italic summary and
 * the full description. Spacing follows the design at 1440px.
 */
const ArchiveObjectPage = ({ object }: ArchiveObjectPageProps) => (
  <div className="overflow-x-clip">
    <div className="relative mx-auto flex flex-col gap-10  pt-10 lg:flex-row lg:items-start lg:gap-0 lg:pt-[76px]">
      {/* Gold paisley at the page's top-right edge; the JPEG's white ground is multiplied away. */}
      <Decoration
        file="com-decor-2.jpg"
        width={101}
        height={161}
        className="right-0 top-[71px] mix-blend-multiply"
      />

      <div className="relative w-full sm:max-w-[560px] lg:ml-[4.17%] lg:w-[38.89%] lg:shrink-0">
        <ObjectGallery images={object.images} alt={object.imageAlt} />
        {/* On phones the gold paisley rests on the photograph's top-right corner, as the mobile design draws it. */}
        <Decoration
          file="com-decor-2.jpg"
          width={78}
          height={124}
          className="-right-1 top-9 mix-blend-multiply lg:hidden block"
        />
      </div>

      <div className="lg:ml-[11.39%] lg:w-[41.39%] lg:pt-32 px-5 lg:px-0">
        <h1 className={displayTitle}>
          <span className="italic">{object.titleItalic}</span>
          {object.titleRegular}
        </h1>
        {object.attribution.length > 0 && (
          <p className={`mt-[2px] ${labelCaps}`}>
            {object.attribution.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        )}

        <dl className="mt-[43px] border-b border-s2s-line">
          {object.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[130px_1fr] gap-x-4 border-t border-s2s-line py-[11px] sm:grid-cols-[168px_1fr] sm:gap-x-0"
            >
              <dt className="max-w-[140px] pl-1 text-[14px] font-medium uppercase leading-[24px] tracking-[1.68px] text-s2s-ink">
                {fact.label}
              </dt>
              <dd className="text-[16px] leading-[28px] text-s2s-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <div className="relative mx-auto mt-12 lg:mt-[43px] lg:px-[60px]">
      <section
        aria-labelledby="object-details-heading"
        className="bg-s2s-panel px-5 pb-12 pt-8 lg:px-[88px] lg:pb-[66px] lg:pt-[42px]"
      >
        <h2
          id="object-details-heading"
          className={`border-b border-s2s-line pb-[14px] lg:pl-[21px] ${labelCaps}`}
        >
          Object details
        </h2>
        <div className="relative mt-[38px] flex flex-col gap-[50px] lg:flex-row lg:gap-[107px] lg:pl-[27px]">
          {/* On phones the round paisley sits in the gutter the summary's indent leaves to its left. */}
          <Decoration
            file="decorCommu-1.svg"
            width={92}
            height={209}
            className="-left-[5px] -top-[8px] max-w-none lg:hidden block"
          />
          <p className="pl-[92px] font-Bodoni text-[21px] italic leading-[36px] text-s2s-ink sm:pl-0 lg:w-[338px] lg:shrink-0">
            <RichText content={object.summary} />
          </p>
          <div className={`space-y-7 lg:min-w-0 lg:flex-1 ${bodyText}`}>
            {object.description.map((paragraph, index) => (
              <p key={index}>
                <RichText content={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The ruled corner with the batik square at the panel's lower left, and the
          round paisley (the home page's, mirrored) sitting in it. */}
      <Decoration
        file="com-decor-1.svg"
        width={329}
        height={369}
        className="bottom-[-85px] left-[-1px] mix-blend-multiply lg:block hidden"
      />
      {/* <Decoration
        file="deco-paisley-round.svg"
        width={83}
        height={113}
        className="bottom-[83px] left-[141px] -scale-x-100"
      /> */}
    </div>

    <BackToTop />
  </div>
);

export default ArchiveObjectPage;
