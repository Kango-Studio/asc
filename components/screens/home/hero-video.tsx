"use client";

export const HeroVideo = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full"
      style={{ height: "100svh" }}
    >
      <video
        key="hero-video-player"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/fallback-image.jpg"
      >
        <source src="/videos/mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/site.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </section>
  );
};
