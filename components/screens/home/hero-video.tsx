"use client";
import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const src = isMobile ? "/videos/mobile.mp4" : "/videos/site.mp4";

    video.src = src;
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="home"
      className="hero-video-shell relative w-full overflow-hidden bg-black"
      aria-label="Apresentação da ASC Assessoria Contábil"
    >
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 block h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </section>
  );
};
