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
      className="relative overflow-hidden w-full"
      style={{ height: "100svh" }}
    >
      <video
        ref={videoRef}
        key="hero-video-player"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/fallback-image.jpg"
      />
    </section>
  );
};