import type { HomeDataTemplate } from "@/data/home.data";

type IntroSectionProps = {
  section: HomeDataTemplate["sections"]["intro"];
};

export function IntroSection({ section }: IntroSectionProps) {
  return (
    <section id="solucoes" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
            {section.title}
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-700">
          {section.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
