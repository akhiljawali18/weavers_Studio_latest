"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageSlot from "./ImageSlot";
import { S2S_ASSETS } from "../../data/home";
import { useSoloVideo } from "../../hooks/useSoloVideo";

type HeroVideoProps = {
  /** The landscape film shown from `lg` up. */
  src?: string;
  /** The portrait film the mobile design uses below `lg`; falls back to `src`. */
  mobileSrc?: string;
  poster?: string;
};

type NetworkInformation = { saveData?: boolean };

/** Visitors who asked for less data or less motion keep the still and never fetch the film. */
const videoIsWelcome = () => {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !connection?.saveData && !reducedMotion;
};

/**
 * The opening film.
 *
 * The still is what paints first; the video file is not requested until the page
 * has finished loading and the hero is actually on screen, so it never competes
 * with the page itself. It then plays muted (browsers only autoplay silent video),
 * fades in over the still once it is running, and pauses whenever it is scrolled
 * out of view. The speaker in the corner turns the sound on.
 */
const HeroVideo = ({ src, mobileSrc, poster }: HeroVideoProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  // The portrait film on phones, the landscape one from `lg`; kept in sync if the
  // viewport crosses the breakpoint.
  const [activeSrc, setActiveSrc] = useState(src);
  useSoloVideo(videoRef, load && Boolean(activeSrc));

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const pick = () => setActiveSrc(wide.matches ? src : mobileSrc ?? src);
    pick();
    wide.addEventListener("change", pick);
    return () => wide.removeEventListener("change", pick);
  }, [src, mobileSrc]);

  // Decide when to fetch the film: after the window's load event, once the hero is visible.
  useEffect(() => {
    const frame = frameRef.current;
    if (!activeSrc || !frame || !videoIsWelcome()) {
      return;
    }

    let observer: IntersectionObserver | undefined;
    const watch = () => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setLoad(true);
            observer?.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(frame);
    };

    if (document.readyState === "complete") {
      watch();
    } else {
      window.addEventListener("load", watch, { once: true });
    }
    return () => {
      window.removeEventListener("load", watch);
      observer?.disconnect();
    };
  }, [activeSrc]);

  // Once loaded, play only while on screen.
  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!load || !frame || !video) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.some((entry) => entry.isIntersecting);
      if (visible) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [load]);

  // React does not keep the `muted` attribute in sync after the first render, so
  // the property is set directly.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted, load]);

  return (
    // Portrait on phones, as the mobile design draws it: the landscape still and film
    // are cropped to its centre.
    <div ref={frameRef} className="relative aspect-[317/564] w-full overflow-hidden lg:aspect-[1296/504]">
      <ImageSlot
        src={poster}
        alt="Sarong to Sari exhibition film"
        className="absolute inset-0"
        sizes="(min-width: 992px) 100vw, 317px"
        priority
      />
      {load && activeSrc && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={activeSrc}
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          // A missing or unplayable file leaves the still in place.
          onError={() => setLoad(false)}
          aria-hidden
        />
      )}
      <button
        type="button"
        onClick={() => setMuted((value) => !value)}
        disabled={!playing}
        aria-pressed={!muted}
        aria-label={muted ? "Turn on the film's sound" : "Mute the film"}
        className="absolute bottom-[3.97%] right-[1.85%] flex rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-default"
      >
        <Image
          src={`${S2S_ASSETS}/icon-mute.svg`}
          alt=""
          width={20.435}
          height={21.3805}
          unoptimized
          className={`h-[21.38px] w-[20.44px] max-w-none transition-opacity ${muted ? "" : "opacity-60"}`}
        />
      </button>
    </div>
  );
};

export default HeroVideo;
