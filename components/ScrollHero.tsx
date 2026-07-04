"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteConfigTemplate } from "@/config/site.config";
import { heroDataTemplate } from "@/data/hero.data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const HERO_CONFIG = {
  totalFrames: 90,
  extension: ".webp",
  criticalFrames: [0, 44, 89],
  overlays: {
    revealStart: 0,
    revealEnd: 0.054,
    logoFadeStart: 0.008,
    logoFadeEnd: 0.0464,
    scrollIndicatorFadeEnd: 0.048,
    textFadeStart: 0.52,
    textFadeEnd: 0.64
  }
} as const;

const LAST_FRAME_HOLD_START = 0.5;
const BG = "#03050b";
const whatsappHref = buildWhatsAppUrl({
  phone: siteConfigTemplate.phone,
  message: heroDataTemplate.primaryCta.message
});

type FrameImage = ImageBitmap | HTMLImageElement;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function fadeRange(value: number, start: number, end: number, direction: "in" | "out") {
  if (direction === "out") {
    if (value <= start) return 1;
    if (value >= end) return 0;
    return clamp01(1 - (value - start) / (end - start));
  }

  if (value <= start) return 0;
  if (value >= end) return 1;
  return clamp01((value - start) / (end - start));
}

function getFramePath(index: number) {
  return `/sequences/hero/hero-${String(index + 1).padStart(4, "0")}${HERO_CONFIG.extension}`;
}

function loadImageElement(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const image = new window.Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function loadFrameImage(index: number): Promise<FrameImage | null> {
  const path = getFramePath(index);

  try {
    if ("createImageBitmap" in window) {
      const response = await fetch(path);
      if (response.ok) {
        const blob = await response.blob();
        return await createImageBitmap(blob);
      }
    }
  } catch {
    return loadImageElement(path);
  }

  return loadImageElement(path);
}

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const logoLayerRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const copyInnerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const rafIdRef = useRef(0);
  const lastDrawKeyRef = useRef("");
  const readyRef = useRef(false);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const framesRef = useRef<Array<FrameImage | null>>(
    Array.from({ length: HERO_CONFIG.totalFrames }, () => null)
  );

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });

    if (!section || !canvas || !context) return undefined;

    let mounted = true;

    const resolveFrame = () => {
      const rawFrameProgress =
        progressRef.current >= LAST_FRAME_HOLD_START ? 1 : progressRef.current / LAST_FRAME_HOLD_START;
      const frameProgress = Math.pow(rawFrameProgress, 1.45);
      const frameIndex = Math.min(
        Math.floor(frameProgress * (HERO_CONFIG.totalFrames - 1)),
        HERO_CONFIG.totalFrames - 1
      );

      for (let offset = 0; offset < HERO_CONFIG.totalFrames; offset += 1) {
        const back = frameIndex - offset;
        if (back >= 0 && framesRef.current[back]) {
          return { image: framesRef.current[back], frameIndex: back };
        }

        const forward = frameIndex + offset;
        if (forward < HERO_CONFIG.totalFrames && framesRef.current[forward]) {
          return { image: framesRef.current[forward], frameIndex: forward };
        }
      }

      return { image: null, frameIndex };
    };

    const draw = () => {
      if (!readyRef.current) return;

      const { image, frameIndex } = resolveFrame();
      if (!image) return;

      const { width, height } = canvasSizeRef.current;
      const drawKey = `${frameIndex}-${width}-${height}`;
      if (drawKey === lastDrawKeyRef.current) return;
      lastDrawKeyRef.current = drawKey;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.fillStyle = BG;
      context.fillRect(0, 0, width, height);

      const coverScale = Math.max(width / image.width, height / image.height);
      const drawW = Math.ceil(image.width * coverScale);
      const drawH = Math.ceil(image.height * coverScale);
      const x = Math.floor((width - drawW) / 2);
      const y = Math.floor((height - drawH) / 2);

      context.drawImage(image, x, y, drawW, drawH);
    };

    const applyOverlays = () => {
      const progress = progressRef.current;
      const revealOpacity = fadeRange(
        progress,
        HERO_CONFIG.overlays.revealStart,
        HERO_CONFIG.overlays.revealEnd,
        "out"
      );
      const logoOpacity = fadeRange(
        progress,
        HERO_CONFIG.overlays.logoFadeStart,
        HERO_CONFIG.overlays.logoFadeEnd,
        "out"
      );
      const scrollOpacity = fadeRange(progress, 0, HERO_CONFIG.overlays.scrollIndicatorFadeEnd, "out");
      const textOpacity = fadeRange(
        progress,
        HERO_CONFIG.overlays.textFadeStart,
        HERO_CONFIG.overlays.textFadeEnd,
        "in"
      );

      if (revealRef.current) revealRef.current.style.opacity = String(revealOpacity);
      if (logoLayerRef.current) logoLayerRef.current.style.opacity = String(logoOpacity);
      if (scrollIndicatorRef.current) scrollIndicatorRef.current.style.opacity = String(scrollOpacity);
      if (copyInnerRef.current) {
        copyInnerRef.current.style.opacity = String(textOpacity);
        copyInnerRef.current.style.pointerEvents = textOpacity > 0.1 ? "auto" : "none";
      }
    };

    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const canvasWidth = Math.floor(width * dpr);
      const canvasHeight = Math.floor(height * dpr);

      canvasSizeRef.current = { width: canvasWidth, height: canvasHeight };
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      lastDrawKeyRef.current = "";
      draw();
    };

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      progressRef.current = scrollable <= 0 ? 0 : clamp01(-rect.top / scrollable);
      applyOverlays();
      draw();
    };

    const requestProgressUpdate = () => {
      if (rafIdRef.current) return;

      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = 0;
        updateProgress();
      });
    };

    const loadFrame = async (index: number) => {
      const frame = await loadFrameImage(index);
      if (!mounted) return null;
      framesRef.current[index] = frame;
      return frame;
    };

    const loadSequence = async () => {
      await Promise.all(HERO_CONFIG.criticalFrames.map((index) => loadFrame(index)));
      readyRef.current = HERO_CONFIG.criticalFrames.every((index) => framesRef.current[index]);
      draw();

      const remaining = framesRef.current
        .map((_, index) => index)
        .filter((index) => !HERO_CONFIG.criticalFrames.includes(index as 0 | 44 | 89));
      const batchSize = 6;

      for (let i = 0; i < remaining.length && mounted; i += batchSize) {
        await Promise.all(remaining.slice(i, i + batchSize).map((index) => loadFrame(index)));
        draw();
      }
    };

    setupCanvas();
    applyOverlays();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", setupCanvas);
    loadSequence();
    updateProgress();

    return () => {
      mounted = false;
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", setupCanvas);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-[#03050b] md:h-[250vh] xl:h-[300vh]"
      aria-labelledby="hero-title"
    >
      <div className="sticky top-0 h-screen h-[100svh] w-full touch-pan-y overflow-hidden bg-[#03050b]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label={heroDataTemplate.labels.section}
        />

        <div ref={revealRef} className="absolute inset-0 z-[3] bg-[#020a26]" />

        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.18) 0%, transparent 30%, transparent 62%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to right, rgba(2, 10, 38, 0.78) 0%, rgba(2, 10, 38, 0.32) 34%, transparent 58%, rgba(2, 10, 38, 0.08) 100%)"
          }}
        />

        <div
          ref={logoLayerRef}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#020a26]"
        >
          <Image
            src={heroDataTemplate.brandMark.src}
            alt={heroDataTemplate.brandMark.alt}
            width={500}
            height={500}
            priority
            className="h-auto w-[82vw] max-w-[420px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.56)] md:w-[58vw] md:max-w-[520px]"
          />
        </div>

        <div
          ref={scrollIndicatorRef}
          className="pointer-events-none absolute bottom-[22svh] left-1/2 z-20 grid -translate-x-1/2 justify-items-center gap-2 text-white/80 md:bottom-8"
          aria-hidden="true"
        >
          <span className="text-xs font-bold uppercase">{heroDataTemplate.labels.scrollIndicator}</span>
          <svg
            className="motion-safe:animate-bounce"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 4v14m0 0 6-6m-6 6-6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-end px-5 pb-16 pt-28 text-white md:items-start md:px-20 md:pb-14 md:pt-36 xl:pt-32">
          <div ref={copyInnerRef} className="max-w-[760px] opacity-0">
            <p className="m-0 text-xs font-black uppercase leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.76)] md:text-sm">
              {heroDataTemplate.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-3 max-w-[12ch] font-impact text-[32px] font-normal uppercase leading-none text-[#ffd400] drop-shadow-[0_2px_10px_rgba(0,0,0,0.76)] md:max-w-[13ch] md:text-[58px]"
            >
              {heroDataTemplate.title}
            </h1>
            <p className="mt-5 text-sm font-black uppercase leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.76)] md:text-base">
              {heroDataTemplate.subtitle}
            </p>
            <div className="mt-4 hidden flex-wrap gap-2 md:flex">
              {heroDataTemplate.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/85"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-4 hidden max-w-[58ch] text-sm font-bold leading-7 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.76)] md:block">
              Estrutura premium para apresentar guincho, reboque, auto socorro e facilitar a conversao do visitante.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center border border-white px-6 py-3 text-center text-xs font-black uppercase text-white transition hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-[#020a26] focus:outline-none focus:ring-4 focus:ring-[#ffd400]/30 sm:w-auto sm:min-w-[286px]"
            >
              {heroDataTemplate.primaryCta.label}
            </a>
            <a
              href={heroDataTemplate.secondaryCta.href}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center border border-white/25 px-6 py-3 text-center text-xs font-black uppercase text-white/85 transition hover:border-white hover:bg-white/8 focus:outline-none focus:ring-4 focus:ring-white/20 sm:ml-3 sm:w-auto sm:min-w-[286px] md:mt-8"
            >
              {heroDataTemplate.secondaryCta.label}
            </a>
          </div>
        </div>

        <noscript>
          <div className="relative flex min-h-screen items-end bg-[#03050b] px-6 pb-20 text-white md:px-20">
            <Image
              src={heroDataTemplate.fallback.src}
              alt={heroDataTemplate.fallback.alt}
              fill
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10">
              <h1 className="max-w-[13ch] font-impact text-[36px] uppercase leading-none text-[#ffd400] md:text-[58px]">
                {heroDataTemplate.title}
              </h1>
              <p className="mt-4 text-sm font-bold uppercase">{heroDataTemplate.subtitle}</p>
            </div>
          </div>
        </noscript>
      </div>
    </section>
  );
}
