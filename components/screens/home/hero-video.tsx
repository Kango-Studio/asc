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
    const src = isMobile ? "/videos/mobile.mp4" : "/videos/site.mp4";

    video.src = src;
    video.load();
    video.play().catch(() => {});

    const fallbackTimer = window.setTimeout(() => {
      setStatus((currentStatus) =>
        currentStatus === "loading" ? "error" : currentStatus
      );
    }, 12000);

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  return (
    <section
      id="home"
      className="hero-video-shell relative isolate w-full overflow-hidden bg-[#f2faf5]"
    >
      <h1 className="sr-only">
        Contabilidade descomplicada para sua empresa
      </h1>

      {status === "loading" && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-[#f2faf5] px-6 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center gap-4">
            <span
              className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#00B74F]/20 border-t-[#00B74F] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <p className="font-medium text-gray-700">
              Carregando apresentação…
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-24 text-center">
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
      )}

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
        onCanPlay={() => setStatus("ready")}
        onError={() => setStatus("error")}
        aria-hidden="true"
      />
    </section>
  );
};
