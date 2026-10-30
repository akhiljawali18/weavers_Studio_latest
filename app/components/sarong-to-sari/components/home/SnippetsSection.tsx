import Carousel from "./Carousel";
import Decoration from "./Decoration";
import VideoCard from "./VideoCard";
import { homeDisplayTitle, kicker } from "./typography";
import { hiddenOnMobile, snippetVideos } from "../../data/home";
import { sectionGap } from "./spacing";

const SnippetsSection = () => (
  <section
    id="voices"
    aria-labelledby="snippets-heading"
    className={`relative mx-auto flex w-full scroll-mt-[64px] flex-col lg:flex-row ${sectionGap}`}
  >
    <div className="mb-[44px] text-center lg:order-last lg:mb-0 lg:flex-1 lg:pr-[30px] lg:pt-[202px]">
      <h2 id="snippets-heading" className={`italic ${homeDisplayTitle}`}>
        Snippets
      </h2>
      <p className={`md:mt-[9px] ${kicker}`}>From Sarong to Sari</p>
    </div>

    <div className="min-w-0 lg:w-[64.65%] lg:shrink-0">
      <Carousel
        label="Snippets from Sarong to Sari"
        itemLabel="video"
        trackClassName="gap-[18px] scroll-pl-4 px-4 lg:gap-5 lg:scroll-pl-[30px] lg:pl-[30px] lg:pr-0"
        navClassName="mt-[30px]"
        hideNavOnMobile={hiddenOnMobile.carouselArrows}
      >
        {snippetVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </Carousel>
    </div>

    {/* The rule and gold flourish trailing off the right edge. */}
    <Decoration
      file="deco-snippets-flourish.svg"
      width={331}
      height={46}
      className="right-0 top-[489px] lg:block hidden"
    />
  </section>
);

export default SnippetsSection;
