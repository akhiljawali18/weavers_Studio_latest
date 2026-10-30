import SectionHeading from "../components/sarong-to-sari/components/home/SectionHeading";
import UnderlineLink from "../components/sarong-to-sari/components/home/UnderlineLink";
import { bodyText } from "../components/sarong-to-sari/components/home/typography";

// Shown for an event or archive object that does not exist, inside the
// microsite's own header and footer.
export default function MicrositeNotFound() {
  return (
    <section className="px-5 py-24 text-center lg:py-[160px]">
      <SectionHeading as="h1" kicker="Page not found">
        <span className="italic">nothing</span> here
      </SectionHeading>
      <p className={`mx-auto mt-6 max-w-[480px] ${bodyText}`}>
        The page you were looking for has moved or never existed.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-x-[80px] gap-y-6">
        <UnderlineLink href="/sarong-to-sari" variant="compact">
          back to the exhibition
        </UnderlineLink>
        <UnderlineLink href="/sarong-to-sari/programme" variant="compact">
          see the programme
        </UnderlineLink>
      </div>
    </section>
  );
}
