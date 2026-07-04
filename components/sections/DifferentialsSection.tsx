import type { HomeDataTemplate } from "@/data/home.data";

type DifferentialsSectionProps = {
  section: HomeDataTemplate["sections"]["differentiators"];
};

export function DifferentialsSection({ section }: DifferentialsSectionProps) {
  return (
    <section className="bg-brand-deep px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">{section.title}</h2>
          <p className="mt-4 text-lg leading-8 text-white/80">{section.description}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/15 bg-white/8 p-5">
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
