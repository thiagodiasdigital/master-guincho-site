import type { Metadata } from "next";
import Link from "next/link";
import { siteConfigTemplate } from "../../config/site.config";
import { seoConfigTemplate } from "../../config/seo.config";
import { locationsDataTemplate } from "../../data/locations.data";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { routePages } from "./routeData";

const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/rotas/`;
const whatsapp = buildWhatsAppUrl({
  phone: siteConfigTemplate.phone,
  message: siteConfigTemplate.primaryCta.message
});

export const metadata: Metadata = {
  title: `Cobertura e rotas | ${siteConfigTemplate.siteName}`,
  description:
    "Hub de cobertura geográfica da Master Guincho com páginas de cidades e prioridades geo.",
  alternates: {
    canonical: "/rotas/"
  },
  openGraph: {
    url: pageUrl,
    title: `Cobertura e rotas | ${siteConfigTemplate.siteName}`,
    description:
      "Estrutura para representar localidade, cobertura e contexto geográfico da Master Guincho.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: seoConfigTemplate.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfigTemplate.siteName
      }
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${pageUrl}#webpage`,
      "@type": "WebPage",
      name: `Cobertura e rotas | ${siteConfigTemplate.siteName}`,
      url: pageUrl,
      isPartOf: {
        "@id": `${siteConfigTemplate.siteUrl}/#website`
      },
      inLanguage: "pt-BR"
    },
    {
      "@id": `${pageUrl}#locations`,
      "@type": "ItemList",
      name: locationsDataTemplate.section.title,
      itemListElement: routePages.map((route, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${pageUrl}${route.slug}/`,
        name: route.title
      }))
    }
  ]
};

export default function RoutesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-brand-ink">
        <section className="bg-brand-deep px-4 pb-20 pt-28 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <Link href="/" className="text-sm font-black uppercase text-brand-gold transition hover:text-white">
              Voltar para início
            </Link>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              {locationsDataTemplate.section.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {locationsDataTemplate.section.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
              {locationsDataTemplate.section.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                className="rounded-md bg-brand-gold px-7 py-4 text-center text-sm font-black uppercase text-brand-deep transition hover:bg-[#ffd24a] focus:outline-none focus:ring-4 focus:ring-brand-gold/35"
              >
                {siteConfigTemplate.primaryCta.label}
              </a>
              <Link
                href="/servicos/"
                className="rounded-md border border-white/50 px-7 py-4 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-brand-deep focus:outline-none focus:ring-4 focus:ring-white/25"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {routePages.map((route) => (
              <article key={route.slug} className="rounded-lg border border-brand-blue/15 bg-brand-mist p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-blue">
                  {route.shortTitle}
                </p>
                <h2 className="mt-3 text-2xl font-black text-brand-deep">{route.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{route.intro}</p>
                <Link
                  href={`/rotas/${route.slug}/`}
                  className="mt-6 inline-flex rounded-md bg-brand-deep px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
                >
                  Ver página
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Cobertura operacional
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Localidades reais para copiar e adaptar
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Este hub organiza as cidades atendidas pela Master Guincho e serve como
                ponte entre busca local, cobertura e conversão.
              </p>
              <p>
                Cada item da lista pode receber ajustes por cidade, rodovia ou área de
                prioridade sem alterar a apresentação da página.
              </p>
              <p>
                A relação entre cobertura, serviços e CTA é mantida por configuração e
                dados do projeto.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
