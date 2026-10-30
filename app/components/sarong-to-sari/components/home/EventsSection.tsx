import EventsCarousel from "./EventsCarousel";
import { programmeEvents } from "../../data/home";

const EventsSection = () => (
  <section
    id="programme"
    aria-label="Programme"
    className={`relative mx-auto w-full scroll-mt-[64px] lg:mt-[50px] mt-[0px]`}
  >
    <EventsCarousel events={programmeEvents} />
  </section>
);

export default EventsSection;
