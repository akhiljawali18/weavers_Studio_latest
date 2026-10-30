"use client";

import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { sarongToSariNavigation } from "../data/navigation";
import { S2S_ASSETS } from "../data/home";
import { useSarongToSariNav } from "../hooks/useSarongToSariNav";
import { CloseIcon } from "./icons";
import { SocialIcons } from "./MicrositeFooter";
import { stitchMask } from "./home/UnderlineLink";
// import ActionButtons from "../../layout/header/ActionButtons";

type NavLinkProps = {
  href: string;
  label: string;
  onNavigate?: () => void;
};

const NavLink = ({ href, label, onNavigate }: NavLinkProps) => {
  const isActive = useSarongToSariNav(href);
  const shown = isActive
    ? "opacity-100"
    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100";
  const hidden = isActive
    ? "opacity-0"
    : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0";

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className="group relative inline-grid whitespace-nowrap lowercase text-s2s-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon"
    >
      <span
        className={`[grid-area:1/1] text-[15px] leading-[24.8px] transition-opacity duration-200 ${hidden}`}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={`[grid-area:1/1] font-Bodoni text-[16px] italic leading-[24.8px] transition-opacity duration-200 ${shown}`}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={`absolute left-0 top-[24px] h-[3.5px] w-[max(79.73px,calc(100%-5px))] origin-left transition-transform duration-300 ${stitchMask} ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`}
      >
        <Image
          src={`${S2S_ASSETS}/nav-underline.svg`}
          alt=""
          fill
          unoptimized
        />
      </span>
    </Link>
  );
};

/** A link in the maroon phone menu: white lowercase, the current page in Bodoni italic. */
const MobileNavLink = ({ href, label, onNavigate }: Required<NavLinkProps>) => {
  const isActive = useSarongToSariNav(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`block w-fit lowercase text-white transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${isActive ? "font-Bodoni text-[16px] italic leading-[24.8px]" : "text-[15px] leading-[24.8px]"}`}
    >
      {label}
    </Link>
  );
};

const MicrositeHeader = () => {
  //   const Navbar = useSelector((reduxState: any) => reduxState.Navbar);

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // While the menu covers the screen the page behind it must not scroll, and Escape
  // closes it, as it would a dialog.
  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  //   const bagCount = useMemo(() => {
  //     return Navbar?.bagCount;
  //   }, [Navbar?.bagCount]);

  return (
    // The white strip above the header (the `before:` layer) sits off-screen while the
    // header is stuck at the top. It covers the hairline of page that some screens and
    // zoom levels show above a sticky element when they round its position.
    <header className="sticky top-0 z-40 bg-white shadow-[0px_5px_34px_0px_rgba(127,102,91,0.1)] before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-[3px] before:bg-white before:content-['']">
      <div className="mx-auto flex h-[57px] items-center pl-4 pr-[14px] lg:h-[64px] lg:px-[60px]">
        <Link
          href="/sarong-to-sari"
          className="shrink-0"
          aria-label="Sarong to Sari home"
        >
          <Image
            src={`${S2S_ASSETS}/s2s-logo.svg`}
            alt=""
            width={94.996}
            height={42.012}
            unoptimized
            priority
            className="h-auto w-[76px] lg:w-[95px]"
          />
        </Link>

        <nav
          aria-label="Microsite navigation"
          className="hidden lg:ml-[123px] lg:mr-[32px] lg:flex lg:flex-1 lg:items-center lg:justify-between xl:grid xl:grid-cols-[22.9fr_23.7fr_24.4fr_17.2fr_11.8fr]"
        >
          {sarongToSariNavigation?.map((item, index) => (
            <div
              key={item.href}
              className={
                index === sarongToSariNavigation?.length - 1
                  ? "xl:justify-self-end"
                  : ""
              }
            >
              <NavLink href={item.href} label={item.label} />
            </div>
          ))}
        </nav>

        {/* <ActionButtons bagCount={bagCount} /> */}

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="microsite-menu"
          aria-label="Open menu"
          className="ml-[18px] flex h-[25px] w-[25px] items-center justify-center rounded-sm text-s2s-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-s2s-maroon lg:hidden"
        >
          <Image
            src={`${S2S_ASSETS}/icon-menu.svg`}
            alt=""
            width={25}
            height={25}
            unoptimized
          />
        </button>
      </div>

      {/* Phones: the menu covers the whole screen in maroon, with the white logo and a
          close button where the header's logo and hamburger were. */}
      {menuOpen && (
        <div
          id="microsite-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-s2s-maroon animate-in fade-in duration-200 lg:hidden"
        >
          <div className="flex h-[57px] shrink-0 items-center pl-4 pr-[14px]">
            <Link
              href="/sarong-to-sari"
              onClick={closeMenu}
              aria-label="Sarong to Sari home"
              className="shrink-0"
            >
              <Image
                src={`${S2S_ASSETS}/mobileLogo.png`}
                alt=""
                width={76}
                height={34}
                unoptimized
                priority
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
              className="ml-auto flex h-[25px] w-[25px] items-center justify-center rounded-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CloseIcon className="h-[22px] w-[22px]" />
            </button>
          </div>

          <nav aria-label="Microsite navigation" className="px-4 pt-[34px]">
            <ul className="flex flex-col gap-[17px]">
              {sarongToSariNavigation?.map((item) => (
                <li key={item.href}>
                  <MobileNavLink
                    href={item.href}
                    label={item.label}
                    onNavigate={closeMenu}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <SocialIcons
            inverted
            className="mt-auto gap-[22px] px-4 pb-[88px] pt-10"
          />
        </div>
      )}
    </header>
  );
};

export default MicrositeHeader;
