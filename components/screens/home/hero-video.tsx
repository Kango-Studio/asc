"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type VideoStatus = "loading" | "ready" | "error";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<VideoStatus>("loading");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;
    let playPending = false;
    let retryFrame = 0;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    const source = window.matchMedia("(max-width: 767px)").matches
      ? "/videos/mobile-web.mp4"
      : "/videos/site-web.mp4";

    // Older browsers may ignore media queries on video sources.
    if (video.currentSrc && !video.currentSrc.endsWith(source)) {
      video.src = source;
      video.load();
    }

    const tryPlay = () => {
      if (!active || playPending || !video.paused || document.hidden) return;
      playPending = true;
      video.muted = true;
      void video.play().then(() => {
        if (active) delete video.dataset.autoplayError;
      }).catch((error: unknown) => {
        if (!active) return;
        const name = error instanceof Error ? error.name : "UnknownError";
        video.dataset.autoplayError = name;
        // Loading a source can interrupt an outstanding play request.
        if (name === "AbortError") {
          retryFrame = requestAnimationFrame(tryPlay);
        } else {
          console.warn("Hero video autoplay failed:", error);
        }
      }).finally(() => {
        playPending = false;
      });
    };

    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    document.addEventListener("touchend", tryPlay, { passive: true });
    document.addEventListener("click", tryPlay);
    tryPlay();

    return () => {
      active = false;
      cancelAnimationFrame(retryFrame);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      document.removeEventListener("touchend", tryPlay);
      document.removeEventListener("click", tryPlay);
      // React Strict Mode runs cleanup during initial mounting in development.
      // Pausing here interrupts native autoplay, including on the network URL.
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-video-shell relative isolate w-full overflow-hidden bg-[#f2faf5] text-center"
    >
      <h1 className="sr-only">
        Contabilidade descomplicada para sua empresa
      </h1>

      {/* Render the fallback on the server, including while the video loads. */}
      <div
        className={`relative z-10 flex min-h-[100svh] items-center justify-center px-6 pb-12 pt-32 ${
          status === "ready" ? "invisible" : ""
        }`}
        aria-hidden={status === "ready"}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <Image
            src="/logo-horizontal-preto.png"
            alt="ASC Assessoria Contábil"
            width={280}
            height={84}
            priority
            className="mb-8 h-auto w-[min(70vw,280px)] object-contain"
          />

          <p
            className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-[-0.03em] text-gray-900 sm:text-5xl md:text-6xl"
            aria-hidden="true"
          >
            Contabilidade descomplicada para sua empresa
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-700 sm:text-lg">
            Atendimento ágil, linguagem acessível e suporte especializado
            para você tomar decisões com mais segurança.
          </p>

          <Link
            href="/contato"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-strong px-6 py-3 font-semibold text-white shadow-lg shadow-green-950/15 transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-4"
          >
            Fale com a ASC
          </Link>
        </div>
      </div>

      <video
        id="hero-presentation"
        ref={videoRef}
        className={`hero-video pointer-events-none absolute inset-0 z-20 block h-full w-full object-cover object-center ${
          status === "error" ? "invisible" : ""
        }`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
        onPlaying={() => setStatus("ready")}
        onError={() => setStatus("error")}
        aria-hidden="true"
      >
        <source src="/videos/mobile-web.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/videos/site-web.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
