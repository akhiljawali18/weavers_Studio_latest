import BackToTop from "../components/home/BackToTop";
import CommunitySection from "../components/home/CommunitySection";
import EventsSection from "../components/home/EventsSection";
import GalleriesSection from "../components/home/GalleriesSection";
import HeroSection from "../components/home/HeroSection";
import PartnersSection from "../components/home/PartnersSection";
import QuoteBand from "../components/home/QuoteBand";
import SnippetsSection from "../components/home/SnippetsSection";
import TeamSection from "../components/home/TeamSection";
import VoyageSection from "../components/home/VoyageSection";

/** The Sarong to Sari exhibition home page, section by section as laid out in Figma. */
const HomePage = () => {
  return (
    <div className="overflow-x-clip">
      <HeroSection />
      <SnippetsSection />
      <VoyageSection />
      <QuoteBand />
      <GalleriesSection />
      <EventsSection />
      <TeamSection />
      <PartnersSection />
      <CommunitySection />
      <BackToTop />
    </div>
  );
};

export default HomePage;
