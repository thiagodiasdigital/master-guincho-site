"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type VehicleCard = {
  title: string;
  copy: string;
  href: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

type VehicleCarouselProps = {
  items: VehicleCard[];
};

export function VehicleCarousel({ items }: VehicleCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item) => (
            <article key={item.title} className="min-w-full px-1 md:px-3">
              <div className="grid min-h-[510px] overflow-hidden rounded-lg border border-white/15 bg-white text-brand-ink shadow-soft md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative flex min-h-[260px] items-end overflow-hidden bg-brand-deep p-6 text-white md:min-h-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className={item.imageFit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,42,86,0.9)_0%,rgba(6,42,86,0.2)_70%)]" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <h3 className="mb-5 text-3xl font-black uppercase leading-tight text-brand-deep md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-8 text-slate-700">{item.copy}</p>
                  <a
                    href={item.href}
                    className="mt-8 inline-flex w-fit rounded-md bg-brand-gold px-6 py-3 text-sm font-black uppercase text-brand-deep transition hover:bg-[#ffd24a] focus:outline-none focus:ring-4 focus:ring-brand-gold/35"
                  >
                    Solicitar orcamento
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => move(-1)}
          className="rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-brand-deep focus:outline-none focus:ring-4 focus:ring-white/25"
          aria-label="Card anterior"
        >
          Anterior
        </button>
        <div className="flex items-center gap-2" aria-label="Controle do carrossel">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={`h-3 w-3 rounded-full transition ${
                active === index ? "bg-brand-gold" : "bg-white/45 hover:bg-white"
              }`}
              aria-label={`Ir para ${item.title}`}
              aria-current={active === index}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(1)}
          className="rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-brand-deep focus:outline-none focus:ring-4 focus:ring-white/25"
          aria-label="Proximo card"
        >
          Proximo
        </button>
      </div>
    </div>
  );
}
