import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfigTemplate } from "../../config/site.config";
import { seoConfigTemplate } from "../../config/seo.config";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { vitrinePages, vitrineSection } from "./vitrineData";

const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/vitrine/`;
const whatsapp = buildWhatsAppUrl({
  phone: siteConfigTemplate.phone,
  message: siteConfigTemplate.primaryCta.message
});

export const metadata: Metadata = {
  title: `Vitrine | ${siteConfigTemplate.siteName}`,
  description:
    "Vitrine por tipo de veículo e carga com atendimento para moto, carro, caminhão, embarcação e outros casos atendidos.",
  alternates: {
    canonical: "/vitrine/"
  },
  openGraph: {
    url: pageUrl,
    title: `Vitrine | ${siteConfigTemplate.siteName}`,
    description:
      "Conheça os tipos de atendimento disponíveis para cada veículo ou carga.",
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
      name: `Vitrine | ${siteConfigTemplate.siteName}`,
      url: pageUrl,
      isPartOf: {
        "@id": `${siteConfigTemplate.siteUrl}/#website`
      },
      inLanguage: "pt-BR"
    },
    {
      "@id": `${pageUrl}#items`,
      "@type": "ItemList",
      name: vitrineSection.title,
      itemListElement: vitrinePages.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${pageUrl}${item.slug}/`,
        item: {
          "@type": "Service",
          name: item.title,
          description: item.summary
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
            name: "Início",
          item: siteConfigTemplate.siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vitrine",
          item: pageUrl
        }
      ]
    }
  ]
};

export default function VitrinePage() {
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
              {vitrineSection.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {vitrineSection.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
              {vitrineSection.description}
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
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {vitrinePages.map((page) => (
              <article key={page.slug} className="overflow-hidden rounded-lg border border-brand-blue/15 bg-brand-mist shadow-soft">
                <div className="relative aspect-[16/10] bg-brand-deep">
                  <Image
                    src={page.image}
                    alt={page.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-blue">
                    {page.keyword}
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-brand-deep">{page.shortTitle}</h2>
                  <p className="mt-4 leading-7 text-slate-700">{page.summary}</p>
                  <Link
                    href={`/vitrine/${page.slug}/`}
                    className="mt-6 inline-flex rounded-md bg-brand-deep px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
                  >
                  Ver detalhes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Vitrine por tipo de veículo e carga
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Escolha o tipo de veículo ou carga para ver a descrição correspondente
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Cada item mostra a categoria atendida, a imagem correspondente e o caminho direto para o WhatsApp.
              </p>
              <p>
                A vitrine ajuda o visitante a encontrar a opção certa sem depender de texto genérico.
              </p>
              <p>
                O visitante chega ao card certo mais rápido e encontra um caminho direto para falar com a operação.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
              Áreas atendidas
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Cobertura real da operação
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
