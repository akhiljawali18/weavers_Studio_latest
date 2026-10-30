import Image from "next/image";
import EmailLink from "./EmailLink";
import { S2S_ASSETS } from "../data/home";

// Weavers Studio's own pages; each opens in a new tab so the microsite stays open.
// An icon without an `href` shows but is not a link yet.
const socialLinks: {
  name: string;
  icon: string;
  width: number;
  height: number;
  href?: string;
}[] = [
  {
    name: "Instagram",
    icon: "icon-instagram.svg",
    width: 24,
    height: 26,
    href: "https://www.instagram.com/weaversstudiokolkata?dlrf=MWl3YzEyYmg2dW44Nw==",
  },
  {
    name: "Facebook",
    icon: "icon-facebook.svg",
    width: 24,
    height: 24,
    href: "https://www.facebook.com/share/1GjLuHSSMb/",
  },
  {
    name: "LinkedIn",
    icon: "icon-linkedin.svg",
    width: 24,
    height: 24,
    href: "https://www.linkedin.com/company/weavers-studio-kolkata?originalSubdomain=in",
  },
  // The link is still to come.
  {
    name: "YouTube",
    icon: "icon-youtube.svg",
    width: 27,
    height: 23,
    href: "https://youtube.com/@weaversstudiokolkata?si=wBJQNQgooBBZd5B5",
  },
];

/**
 * The row of social links; the gap is set by the caller (tighter on phones).
 * `inverted` turns the grey glyphs white, for the maroon mobile menu.
 */
export const SocialIcons = ({ className = "", inverted = false }: { className?: string; inverted?: boolean }) => (
  <ul aria-label="Social media" className={`flex items-center ${className}`}>
    {socialLinks.map((social) => (
      <li key={social.name}>
        {social.href ? (
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Weavers Studio on ${social.name} (opens in a new tab)`}
            className={`block rounded-sm transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 ${
              inverted ? "focus-visible:ring-white" : "focus-visible:ring-s2s-maroon"
            }`}
          >
            <Image
              src={`${S2S_ASSETS}/${social.icon}`}
              alt=""
              width={social.width}
              height={social.height}
              unoptimized
              className={inverted ? "brightness-0 invert" : undefined}
            />
          </a>
        ) : (
          <Image
            src={`${S2S_ASSETS}/${social.icon}`}
            alt={social.name}
            width={social.width}
            height={social.height}
            unoptimized
            className={`block ${inverted ? "brightness-0 invert" : ""}`}
          />
        )}
      </li>
    ))}
  </ul>
);

const MicrositeFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#eeeeee] bg-s2s-paper">
      {/* ─── Phones: the stacked layout the mobile design draws ───
          Everything hangs from the 16px left edge: logo, the two text blocks, the
          copyright line (which sits between Contact and the icons here, unlike the
          desktop column), the social icons, and the batik tucked into the bottom-right. */}
      <div className="relative overflow-hidden px-4 pb-[90px] pt-7 text-[14px] font-medium leading-[25px] lg:hidden">
        <Image src={`${S2S_ASSETS}/footer-logo.svg`} alt="Sarong to Sari" width={200} height={76} unoptimized className="h-auto w-[140px]" />

        <div className="mt-[23px]">
          <p className="text-s2s-soft">Presented by</p>
          <p className="text-s2s-ink">Weavers Studio Resource Centre, Kolkata</p>
        </div>

        <address className="mt-[10px] not-italic">
          <p className="text-s2s-soft">Contact Us</p>
          <EmailLink address="wsrc@weaversstudio.in" className="block text-s2s-ink hover:text-s2s-maroon" />
          <a href="tel:+919874314888" className="block tracking-[0.7px] text-s2s-ink hover:text-s2s-maroon">
            {" "}
            +91 98743 14888
          </a>
        </address>

        <p className="mt-[10px] text-[11px] font-normal uppercase tracking-[1px] text-s2s-soft">©{year} Weavers Studio</p>

        <SocialIcons className="mt-[19px] gap-[15px]" />

        {/* The batik rests in the bottom-right corner; multiplying drops its white ground. */}
        <Image
          src={`${S2S_ASSETS}/footer-batik.jpg`}
          alt=""
          aria-hidden
          width={286}
          height={123}
          unoptimized
          className="pointer-events-none absolute bottom-0 right-0 w-[190px] mix-blend-multiply"
        />
      </div>

      {/* ─── Desktop: the five-column grid (logo, two text columns, icons, batik) ─── */}
      <div className="mx-auto hidden text-[14px] leading-[25px] lg:grid lg:min-h-[150px] lg:grid-cols-[minmax(0,247fr)_minmax(0,313fr)_minmax(175px,335fr)_auto_auto] lg:items-center lg:gap-0 lg:pb-6 lg:pl-[60px] lg:pr-0 lg:pt-0">
        <Image
          src={`${S2S_ASSETS}/footer-logo.svg`}
          alt="Sarong to Sari"
          width={200}
          height={76}
          unoptimized
          className="h-auto max-w-full lg:mt-[42px] lg:self-start lg:pr-5"
        />

        <div className="lg:mt-[42px] lg:self-start lg:pr-5">
          <p className="text-s2s-soft">Presented by</p>
          <p className="text-s2s-ink">Weavers Studio Resource Centre, Kolkata</p>
          <p className="text-[11px] uppercase tracking-[1px] text-s2s-soft">©{year} Weavers Studio</p>
        </div>

        <address className="not-italic lg:mt-[42px] lg:self-start lg:pr-5">
          <p className="text-s2s-soft">Contact Us</p>
          <EmailLink address="wsrc@weaversstudio.in" className="block text-s2s-ink hover:text-s2s-maroon" />
          <a href="tel:+919874314888" className="block tracking-[0.7px] text-s2s-ink hover:text-s2s-maroon">
            +91 98743 14888
          </a>
        </address>

        <SocialIcons className="gap-[22px]" />

        <Image
          src={`${S2S_ASSETS}/footer-batik.jpg`}
          alt=""
          aria-hidden
          width={286}
          height={123}
          unoptimized
          className="w-full mix-blend-multiply lg:col-start-5 lg:-mb-6 lg:ml-[34px] lg:block lg:self-end"
        />
      </div>
    </footer>
  );
};

export default MicrositeFooter;
