"use client";

import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {}
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo);
      return () => video.removeEventListener("loadeddata", playVideo);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        aspectRatio: "16 / 9",
      }}
    >
      <video
        ref={videoRef}
        className="hero-video absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/site.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
