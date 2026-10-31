import Carousel from "./Carousel";
import Decoration from "./Decoration";
import ImageSlot from "./ImageSlot";
import RichText from "./RichText";
import { team } from "../../data/home";
import { sectionGap } from "./spacing";

const TeamSection = () => (
  <section
    aria-labelledby="team-heading"
    className={`relative mx-auto flex w-full flex-col lg:min-h-[685px] lg:flex-row ${sectionGap}`}
  >
    <div className="px-5 pb-8 lg:w-[23.61%] lg:shrink-0 lg:px-0 lg:pb-0 lg:pt-[268px]">
      <h2
        id="team-heading"
        className="text-center text-[16px] font-medium uppercase leading-[19px] tracking-[1.92px] text-s2s-ink"
      >
        Meet the team
      </h2>
    </div>

    <Decoration
      file="deco-paisley-gold.svg"
      width={187}
      height={99}
      className="left-0 top-[459px] lg:block hidden"
    />

    <div className="relative min-w-0 lg:flex-1 lg:pt-[53px]">
      <span
        aria-hidden
        className="absolute left-0 top-0 hidden h-[685px] w-px bg-s2s-line lg:block"
      />
      <span
        aria-hidden
        className="absolute -left-[63px] right-0 top-[52px] hidden h-px bg-s2s-line lg:block"
      />
      <Carousel
        label="The Sarong to Sari team"
        itemLabel="team member"
        trackClassName="gap-5 scroll-pl-5 px-5 lg:scroll-pl-5 lg:pl-5 lg:pr-0"
        navClassName="mt-[30px] lg:mt-[21px]"
      >
        {team.map((member) => (
          <article
            key={member.nameItalic + member.nameRegular}
            className="w-[280px] shrink-0 snap-start md:w-[327px]"
          >
            <div className="relative aspect-[327/505] w-full">
              <ImageSlot
                src={member.image}
                alt={`${member.nameItalic}${member.nameRegular}`.trim()}
                tone="dark"
                sizes="327px"
                className="absolute inset-0"
              />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-Bodoni text-[34px] font-normal leading-[36px] md:text-[40px] md:leading-[40px]">
                  <span className="italic">{member.nameItalic}</span>
                  {member.nameRegular}
                </h3>
                <p className="mt-[9px] text-[14px] uppercase leading-[17px] tracking-[1.68px]">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="mt-[10px] px-3 text-[14px] leading-[25px] text-s2s-ink">
              <RichText content={member.bio} />
            </p>
          </article>
        ))}
      </Carousel>
    </div>
  </section>
);

export default TeamSection;
