import Link from "next/link";
import type { HomeDataTemplate } from "@/data/home.data";
import type { ServiceTemplateItem, ServicesDataTemplate } from "@/data/services.data";

type ServicesSectionProps = {
  section: HomeDataTemplate["sections"]["services"];
  eyebrow: ServicesDataTemplate["section"]["eyebrow"];
  items: ServiceTemplateItem[];
  fallbackHref: string;
};

export function ServicesSection({ section, eyebrow, items, fallbackHref }: ServicesSectionProps) {
  return (
    <section id="servicos" className="bg-brand-mist px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
            {section.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {section.description}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service) => (
            <article key={service.title} className="rounded-lg bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-brand-deep">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-mist px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={service.href || fallbackHref}
                className="mt-5 inline-flex text-sm font-black uppercase text-brand-blue transition hover:text-brand-deep"
              >
                {service.ctaLabel}
              </a>
            </article>
          ))}
        </div>
        <Link
          href="/servicos/"
          className="mt-10 inline-flex rounded-md bg-brand-deep px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
        >
          Ver todos os serviços
        </Link>
      </div>
    </section>
  );
}
