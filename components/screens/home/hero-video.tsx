"use client";

import { useEffect, useState, useRef } from "react";

export const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log("Autoplay bloqueado:", error);
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo);
      return () => video.removeEventListener("loadeddata", playVideo);
    }
  }, [isMobile]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <video 
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        src={isMobile ? "/videos/mobile.mp4" : "/videos/site.mp4"} 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}