"use client";

import { useEffect, type RefObject } from "react";

// Every video on the page that is currently mounted.
const videos = new Set<HTMLVideoElement>();

/**
 * Only one video plays at a time: when this one starts, every other one pauses.
 *
 * It also pauses as soon as it leaves the screen and when it unmounts. Without that
 * a clip could keep playing after navigating away: the old page can be hidden
 * (rather than removed) while the next one loads, and its sound carries on.
 */
export const useSoloVideo = (ref: RefObject<HTMLVideoElement>, active = true) => {
  useEffect(() => {
    const video = ref.current;
    if (!active || !video) {
      return;
    }

    videos.add(video);
    const pauseOthers = () => {
      videos.forEach((other) => {
        if (other !== video && !other.paused) {
          other.pause();
        }
      });
    };
    video.addEventListener("play", pauseOthers);

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        video.pause();
      }
    });
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("play", pauseOthers);
      videos.delete(video);
      video.pause();
    };
  }, [ref, active]);
};
