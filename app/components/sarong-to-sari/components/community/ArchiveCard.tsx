import Link from "next/link";
import ImageSlot from "../home/ImageSlot";
import type { ArchiveObject } from "../../data/community";

/**
 * One object in the archive: a square photograph cropped from the top, its title
 * in Bodoni italic, and "technique • collection • date". Opens the object's page.
 */
const ArchiveCard = ({ slug, titleItalic, titleRegular, technique, collection, date, images, imageAlt }: ArchiveObject) => (
  <Link
    href={`/sarong-to-sari/community-archive/${slug}`}
    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon focus-visible:ring-offset-4"
  >
    <ImageSlot
      src={images[0]}
      alt={imageAlt}
      tone="none"
      sizes="(min-width: 992px) 312px, (min-width: 576px) 50vw, 100vw"
      className="aspect-square w-full bg-[#d9d9d9]"
      imageClassName="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
    <h3 className="mt-[22px] font-Bodoni text-[24px] font-normal italic leading-[36px] text-s2s-ink transition-colors duration-300 group-hover:text-s2s-maroon">
      {titleItalic}
      {titleRegular}
    </h3>
    <p className="mt-[2px] text-[15px] leading-[25px] text-s2s-ink">
      {technique} • {collection} • {date}
    </p>
  </Link>
);

export default ArchiveCard;
