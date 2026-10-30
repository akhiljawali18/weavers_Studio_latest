import BackToTop from "../components/home/BackToTop";
import Decoration from "../components/home/Decoration";
import { displayTitle, kicker } from "../components/home/typography";
import VoiceCard from "../components/voices/VoiceCard";
import { voices } from "../data/voices";

/** "Voices": the artists, scholars and curators of Sarong to Sari, three to a row. */
const VoicesPage = () => (
  <section
    aria-labelledby="voices-heading"
    className="relative mx-auto w-full px-5 pt-8 lg:px-[60px] lg:pt-[79px]"
  >
    {/* The gold paisley from the team section, turned to face into the page. */}
    <Decoration
      file="deco-paisley-gold.svg"
      width={226}
      height={120}
      className="right-0 top-[49px] -scale-x-100 lg:block hidden"
    />
    <Decoration
      file="deco-paisley-gold.svg"
      width={126}
      height={120}
      className="right-0 top-[49px] -scale-x-100 lg:hidden block"
    />

    <p className={kicker}>Artists, scholars and curators</p>
    <h1 id="voices-heading" className={`-mt-[3px] ${displayTitle}`}>
      <span className="italic">from India and</span> Indonesia
    </h1>

    <ul className="mt-12 grid gap-x-[26px] gap-y-[20px] sm:grid-cols-2 lg:mt-[81px] lg:grid-cols-3 lg:gap-y-[60px] min-[1920px]:grid-cols-4">
      {voices.map((voice) => (
        <li key={voice.id}>
          <VoiceCard {...voice} />
        </li>
      ))}
    </ul>

    <BackToTop />
  </section>
);

export default VoicesPage;
