import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfigTemplate } from "../../../config/site.config";
import { seoConfigTemplate } from "../../../config/seo.config";
import { buildWhatsAppUrl } from "../../../lib/whatsapp";
import { getServicePage, servicePages } from "../serviceData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/servicos/${service.slug}/`;

  return {
    title: `${service.title} | ${siteConfigTemplate.siteName}`,
    description: service.summary,
    alternates: {
      canonical: `/servicos/${service.slug}/`
    },
    openGraph: {
      url: pageUrl,
      title: `${service.title} | ${siteConfigTemplate.siteName}`,
      description: service.summary,
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
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/servicos/${service.slug}/`;
  const whatsapp = buildWhatsAppUrl({
    phone: siteConfigTemplate.phone,
    message: siteConfigTemplate.primaryCta.message
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${pageUrl}#webpage`,
        "@type": "WebPage",
        name: service.title,
        url: pageUrl,
        isPartOf: {
          "@id": `${siteConfigTemplate.siteUrl}/#website`
        },
        inLanguage: "pt-BR"
      },
      {
        "@id": `${pageUrl}#service`,
        "@type": "Service",
        name: service.title,
        description: service.definition,
        provider: {
          "@type": "Organization",
          name: siteConfigTemplate.siteName,
          url: siteConfigTemplate.siteUrl
        },
        areaServed: siteConfigTemplate.serviceAreas
      },
      {
        "@id": `${pageUrl}#faq`,
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
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
            name: "Serviços",
            item: `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/servicos/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-brand-ink">
        <section className="bg-brand-deep px-4 pb-20 pt-28 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-4 text-sm font-black uppercase">
              <Link href="/" className="text-brand-gold transition hover:text-white">
                Início
              </Link>
              <Link href="/servicos/" className="text-brand-gold transition hover:text-white">
                Serviços
              </Link>
            </div>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              {service.shortTitle}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{service.intro}</p>
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
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                O que este serviço resolve
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Estrutura clara para a oferta principal
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>{service.definition}</p>
              <p>{service.summary}</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Ideal para</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Quando usar</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {service.whenToHire.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Entregas esperadas</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Processo sugerido
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Como esta página ajuda na decisão
              </h2>
              <div className="mt-8 grid gap-3">
                {service.processSteps.map((step) => (
                  <div key={step} className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold">
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Cobertura configuravel
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Áreas e escopo definidos pela operação
              </h2>
              <div className="mt-8 grid gap-3">
                {service.coverage.map((item) => (
                  <div key={item} className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
              Perguntas frequentes sobre {service.title.toLowerCase()}
            </h2>
            <div className="mt-10 space-y-4">
              {service.faq.map((item) => (
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
      </main>
    </>
  );
}
