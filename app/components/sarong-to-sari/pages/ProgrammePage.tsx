import BackToTop from "../components/home/BackToTop";
import ImageSlot from "../components/home/ImageSlot";
import SectionHeading from "../components/home/SectionHeading";
import { bodyText } from "../components/home/typography";
import ProgrammeListing from "../components/programme/ProgrammeListing";
import { programmeIntro } from "../data/programme";

const ProgrammePage = ({ allTickets }: any) => {
    return (
        <div className="overflow-x-clip pt-10 lg:pt-[56px]">
            <SectionHeading as="h1" kicker="A season of" className="px-5">
                <span className="italic">performances, talks and</span> workshops
            </SectionHeading>

            <ImageSlot src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/8c23a859-2cf7-4b6f-a3c3-4819f6bd0c67.jpg`} alt="A speaker addressing a full house on tiered seating" priority sizes="100vw" className="mx-auto mt-10 aspect-[390/420] w-full lg:mt-[50px] lg:aspect-[1440/605]" />

            {programmeIntro && <p className={`mx-auto mt-10 max-w-[687px] px-5 text-center lg:mt-[50px] ${bodyText}`}>{programmeIntro}</p>}

            {/* 1098px of cards at 1440, three 312px columns. */}
            <section aria-label="Events" className="mx-auto mt-12 max-w-[1138px] px-5 lg:mt-[81px] min-[1440px]:max-w-[79%]">
                <ProgrammeListing items={allTickets} />
            </section>

            <BackToTop />
        </div>
    );
};

export default ProgrammePage;
