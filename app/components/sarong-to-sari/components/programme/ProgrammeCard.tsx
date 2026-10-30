import Link from "next/link";
import ImageSlot from "../home/ImageSlot";
import { eventTypeLabel } from "../../data/programme";

const ProgrammeCard = ({ ticket }: any) => {
    const { titleItalic, titleRegular, type, host } = ticket?.Ticket_Json;

    return (
        <Link href={`/sarong-to-sari/programme/${ticket?.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-4">
            <ImageSlot src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${ticket?.product_images[0]?.directus_files_id?.id}`} alt="card_image" sizes="(min-width: 992px) 312px, (min-width: 576px) 50vw, 100vw" className="aspect-[358/278] w-full sm:aspect-[3/4]" imageClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
            <h3 className="mt-[22px] font-Bodoni text-[24px] font-normal leading-[36px] text-s2s-ink transition-colors duration-300 group-hover:text-s2s-maroon">
                <span className="italic">{titleItalic}</span>
                {titleRegular}
            </h3>
            <p className="mt-[2px] text-[15px] leading-[25px] text-s2s-ink">
                {eventTypeLabel[type]}
                {host && ` • ${host}`}
            </p>
        </Link>
    );
};

export default ProgrammeCard;
