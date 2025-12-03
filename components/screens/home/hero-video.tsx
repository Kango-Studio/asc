"use client";

import { useEffect, useState } from "react";

export const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <video 
        key={isMobile ? "mobile" : "desktop"}
        src={isMobile ? "/videos/mobile.mp4" : "/videos/site.mp4"} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}