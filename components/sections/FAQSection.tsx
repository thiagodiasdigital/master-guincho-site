import type { HomeDataTemplate } from "@/data/home.data";
import type { FaqTemplate } from "@/data/faq.data";

type FAQSectionProps = {
  section: HomeDataTemplate["sections"]["faq"];
  items: FaqTemplate[];
};

export function FAQSection({ section, items }: FAQSectionProps) {
  return (
    <section id="faq" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
          {section.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
          {section.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">{section.description}</p>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-lg border border-brand-blue/15 bg-brand-mist p-5">
              <summary className="cursor-pointer text-lg font-black text-brand-deep">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
