import Image from "next/image";
import Carousel from "./Carousel";
import ImageSlot from "./ImageSlot";
import SectionHeading from "./SectionHeading";
import { bodyText } from "./typography";
import {
  S2S_ASSETS,
  galleries,
  galleriesIntro,
  hiddenOnMobile,
} from "../../data/home";
import { sectionGap } from "./spacing";

const GalleriesSection = () => (
  <section
    id="galleries"
    aria-labelledby="galleries-heading"
    className={`relative mx-auto flex w-full scroll-mt-[64px] flex-col lg:flex-row ${sectionGap}`}
  >
    <div className="px-4 pb-[33px] lg:w-[33.61%] lg:shrink-0 lg:px-0 lg:pb-0 lg:pl-[10.28%] lg:pt-[172px]">
      <div className="lg:w-[259px]">
        <SectionHeading
          id="galleries-heading"
          kicker="The exhibition"
          variant="home"
        >
          <span className="italic">four</span> sections
        </SectionHeading>
        <p
          className={`mt-[21px] lg:mt-[41px] lg:block ${hiddenOnMobile.galleriesIntro ? "hidden" : ""} ${bodyText}`}
        >
          {galleriesIntro}
        </p>
      </div>
    </div>

    <div className="relative min-w-0 lg:flex-1 lg:pt-[44px]">
      <span
        aria-hidden
        className="absolute left-0 top-0 hidden h-[626px] w-px bg-s2s-line lg:block"
      />
      <span
        aria-hidden
        className="absolute -left-[37px] right-0 top-[43px] hidden h-px bg-s2s-line lg:block"
      />
      {/* The line's tilde lead-in, shown through a window onto the Snippets flourish,
          where the same stroke is drawn. */}
      <span
        aria-hidden
        className="absolute -left-[74px] top-[2px] hidden h-[46px] w-[38px] overflow-hidden lg:block"
      >
        <Image
          src={`${S2S_ASSETS}/deco-snippets-flourish.svg`}
          alt=""
          width={331}
          height={46}
          unoptimized
          className="absolute left-0 top-0 h-[46px] w-[331px] max-w-none"
        />
      </span>
      <Carousel
        label="The four galleries"
        itemLabel="gallery"
        trackClassName="gap-[18px] scroll-pl-4 px-4 lg:gap-5 lg:scroll-pl-[30px] lg:pl-[30px] lg:pr-0"
        navClassName="mt-[30px] lg:mt-[21px]"
        hideNavOnMobile={hiddenOnMobile.carouselArrows}
      >
        {galleries.map((gallery) => (
          <article
            key={gallery.title}
            className="w-[330px] shrink-0 snap-start lg:min-h-[541px]"
          >
            <ImageSlot
              src={gallery.image}
              alt={gallery.imageAlt}
              sizes="330px"
              className="aspect-[330/370] w-full"
            />
            <h3 className="mt-[10px] text-[15px] font-medium leading-[25px] text-s2s-ink">
              {gallery.title}
            </h3>
            {/* The subtitle is the first line of the description, both at 80% opacity. */}
            <p className="mt-[10px] text-[15px] leading-[25px] text-s2s-ink opacity-80">
              {gallery.subtitle && (
                <>
                  <span className="font-Bodoni italic text-s2s-maroon">
                    {gallery.subtitle}
                  </span>
                  <br />
                </>
              )}
              {gallery.description}
            </p>
          </article>
        ))}
      </Carousel>
    </div>
  </section>
);

export default GalleriesSection;
