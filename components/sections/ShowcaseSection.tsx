import type { ShowcaseDataTemplate } from "@/data/showcase.data";
import { VehicleCarousel } from "@/components/VehicleCarousel";

type ShowcaseSectionProps = {
  section: ShowcaseDataTemplate["section"];
  items: ShowcaseDataTemplate["items"];
  fallbackHref: string;
};

export function ShowcaseSection({ section, items, fallbackHref }: ShowcaseSectionProps) {
  const showcaseCards = items.map((item) => ({
    title: item.title,
    copy: item.description,
    href: item.href || fallbackHref,
    image: item.image,
    imageAlt: item.alt,
    imageFit: "contain" as const
  }));

  return (
    <section id="frota" className="bg-brand-deep px-4 py-20 text-white md:px-8" aria-labelledby="carousel-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            {section.eyebrow}
          </p>
          <h2 id="carousel-title" className="mt-3 text-3xl font-black md:text-5xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            {section.description}
          </p>
        </div>
        <VehicleCarousel items={showcaseCards} />
      </div>
    </section>
  );
}
