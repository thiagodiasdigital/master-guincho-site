import type { Metadata } from "next";
import Link from "next/link";
import { siteConfigTemplate } from "../../config/site.config";
import { seoConfigTemplate } from "../../config/seo.config";
import { servicesDataTemplate } from "../../data/services.data";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { servicePages } from "./serviceData";

const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/servicos/`;
const whatsapp = buildWhatsAppUrl({
  phone: siteConfigTemplate.phone,
  message: siteConfigTemplate.primaryCta.message
});

export const metadata: Metadata = {
  title: `Servicos | ${siteConfigTemplate.siteName}`,
  description:
    "Hub de servicos da Master Guincho com paginas para guincho, reboque, auto socorro e taxi 24h.",
  alternates: {
    canonical: "/servicos/"
  },
  openGraph: {
    url: pageUrl,
    title: `Servicos | ${siteConfigTemplate.siteName}`,
    description:
      "Estrutura para organizar servicos, argumentos de valor e conversao da Master Guincho.",
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
      name: `Servicos | ${siteConfigTemplate.siteName}`,
      url: pageUrl,
      isPartOf: {
        "@id": `${siteConfigTemplate.siteUrl}/#website`
      },
      inLanguage: "pt-BR"
    },
    {
      "@id": `${pageUrl}#services`,
      "@type": "ItemList",
      name: servicesDataTemplate.section.title,
      itemListElement: servicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${pageUrl}${service.slug}/`,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.summary
        }
      }))
    },
    {
      "@id": `${pageUrl}#breadcrumb`,
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteConfigTemplate.siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicos",
          item: pageUrl
        }
      ]
    }
  ]
};

export default function ServicesPage() {
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
              Voltar para inicio
            </Link>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              {servicesDataTemplate.section.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {servicesDataTemplate.section.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
              {servicesDataTemplate.section.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                className="rounded-md bg-brand-gold px-7 py-4 text-center text-sm font-black uppercase text-brand-deep transition hover:bg-[#ffd24a] focus:outline-none focus:ring-4 focus:ring-brand-gold/35"
              >
                {siteConfigTemplate.primaryCta.label}
              </a>
              <Link
                href="/rotas/"
                className="rounded-md border border-white/50 px-7 py-4 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-brand-deep focus:outline-none focus:ring-4 focus:ring-white/25"
              >
                Ver cobertura
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicePages.map((service) => (
              <article key={service.slug} className="rounded-lg border border-brand-blue/15 bg-brand-mist p-6">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-blue">
                  {service.shortTitle}
                </p>
                <h2 className="mt-3 text-2xl font-black text-brand-deep">{service.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{service.summary}</p>
                <Link
                  href={`/servicos/${service.slug}/`}
                  className="mt-6 inline-flex rounded-md bg-brand-deep px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
                >
                  Ver detalhes
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Estrutura comercial
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Servicos modelados para conversao
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Este hub organiza as ofertas principais da Master Guincho em cards
                reutilizaveis e prontos para navegação local.
              </p>
              <p>
                Cada pagina interna aprofunda um servico com contexto, pergunta frequente
                e chamada objetiva para o WhatsApp.
              </p>
              <p>
                A arquitetura favorece SEO, GEO e AIO sem sacrificar a leitura rapida do
                usuario.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
              Areas atendidas
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
              Cobertura configurada pela operacao real
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {siteConfigTemplate.serviceAreas.map((area) => (
                <div key={area} className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
