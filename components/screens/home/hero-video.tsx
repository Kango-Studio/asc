"use client";

import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play ensures video starts even if the browser blocked the attribute initially
    const playVideo = async () => {
      try {
        video.muted = true; // Ensure it is muted to allow autoplay
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked/failed:", error);
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo);
      return () => video.removeEventListener("loadeddata", playVideo);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/site.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}