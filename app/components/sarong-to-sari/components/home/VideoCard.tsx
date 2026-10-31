"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ImageSlot from "./ImageSlot";
import { S2S_ASSETS } from "../../data/home";
import { useSoloVideo } from "../../hooks/useSoloVideo";
import type { SnippetVideo } from "../../data/home";

type VideoCardProps = SnippetVideo & {
  /** The card's size; the Snippets' 300px portrait unless a caller sets its own. */
  className?: string;
};

/**
 * A portrait video still with a play button; pressing it plays the clip in place.
 * Without a `poster` the still is the clip's own opening frame (only its first few
 * kilobytes load until it is played). If the file cannot be played the still comes
 * back and the button is retired.
 */
const VideoCard = ({
  title,
  src,
  poster,
  className = "aspect-[300/530] w-[300px] shrink-0 snap-start",
}: VideoCardProps) => {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const playable = Boolean(src) && !failed;
  const videoRef = useRef<HTMLVideoElement>(null);
  useSoloVideo(videoRef, playing && playable);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {playing && playable ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          controls
          playsInline
          onError={() => {
            setFailed(true);
            setPlaying(false);
          }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          disabled={!playable}
          aria-label={playable ? `Play: ${title}` : `${title} (video unavailable)`}
          className="group absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white disabled:cursor-default"
        >
          {poster || !playable ? (
            <ImageSlot src={poster} alt="" tone="dark" sizes="300px" className="absolute inset-0" />
          ) : (
            // "#t=0.1" lands on the first frame, which some browsers otherwise leave black.
            <video
              aria-hidden
              className="absolute inset-0 h-full w-full bg-[#4a4341] object-cover"
              src={`${src}#t=0.1`}
              preload="metadata"
              muted
              playsInline
              onError={() => setFailed(true)}
            />
          )}
          <Image
            src={`${S2S_ASSETS}/icon-play.svg`}
            alt=""
            width={33.5}
            height={33.5}
            unoptimized
            className="absolute left-1/2 top-1/2 h-[33.5px] w-[33.5px] max-w-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      )}
    </div>
  );
};

export default VideoCard;
