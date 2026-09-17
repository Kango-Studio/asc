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

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const src = isMobile ? "/videos/mobile-h264.mp4" : "/videos/site-h264.mp4";

    let active = true;
    // Set the DOM property before play() for browsers with strict autoplay rules.
    video.muted = true;
    video.defaultMuted = true;
    video.src = src;
    video.load();
    video.play().catch(() => {
      if (active) setStatus("error");
    });

    const fallbackTimer = window.setTimeout(() => {
      setStatus((currentStatus) =>
        currentStatus === "loading" ? "error" : currentStatus
      );
    }, 12000);

    return () => {
      active = false;
      window.clearTimeout(fallbackTimer);
      video.pause();
      video.removeAttribute("src");
      video.load();
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
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[#00B74F] px-6 py-3 font-semibold text-white shadow-lg shadow-green-950/15 transition-colors hover:bg-[#009f45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B74F] focus-visible:ring-offset-4"
          >
            Fale com a ASC
          </Link>
        </div>
      </div>

      <video
        ref={videoRef}
        className={`hero-video absolute inset-0 z-20 block h-full w-full object-cover object-center transition-opacity duration-700 motion-reduce:transition-none ${
          status === "ready" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlaying={() => setStatus("ready")}
        onWaiting={() => setStatus("loading")}
        onPause={() => setStatus("error")}
        onError={() => setStatus("error")}
        aria-hidden="true"
      />
    </section>
  );
};
