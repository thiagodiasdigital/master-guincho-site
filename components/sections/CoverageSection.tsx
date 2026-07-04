import Link from "next/link";
import type { HomeDataTemplate } from "@/data/home.data";
import type { LocationTemplateItem, LocationsDataTemplate } from "@/data/locations.data";

type CoverageSectionProps = {
  section: HomeDataTemplate["sections"]["coverage"];
  eyebrow: LocationsDataTemplate["section"]["eyebrow"];
  items: LocationTemplateItem[];
};

export function CoverageSection({ section, eyebrow, items }: CoverageSectionProps) {
  return (
    <section id="cobertura" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
              {section.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              {section.description}
            </p>
          </div>
          <div className="grid gap-4">
            {items.map((location) =>
              location.href ? (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold text-brand-ink transition hover:border-brand-blue hover:bg-white"
                >
                  <span className="block text-xs font-black uppercase tracking-[0.12em] text-brand-blue">
                    {location.type}
                  </span>
                  <span className="mt-1 block text-base">{location.name}</span>
                  <span className="mt-1 block text-sm font-normal text-slate-600">
                    {location.description}
                  </span>
                </Link>
              ) : (
                <div
                  key={location.slug}
                  className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold text-brand-ink"
                >
                  <span className="block text-xs font-black uppercase tracking-[0.12em] text-brand-blue">
                    {location.type}
                  </span>
                  <span className="mt-1 block text-base">{location.name}</span>
                  <span className="mt-1 block text-sm font-normal text-slate-600">
                    {location.description}
                  </span>
                </div>
              )
            )}
            <Link
              href="/rotas/"
              className="rounded-lg bg-brand-deep px-5 py-4 text-center font-black uppercase text-white transition hover:bg-brand-blue"
            >
              Ver mais areas atendidas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
