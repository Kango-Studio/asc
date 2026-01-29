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
      } catch (error) {
        console.log("Autoplay blocked:", error);
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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
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
