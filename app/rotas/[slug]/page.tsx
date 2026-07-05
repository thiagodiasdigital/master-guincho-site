import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfigTemplate } from "../../../config/site.config";
import { seoConfigTemplate } from "../../../config/seo.config";
import { buildWhatsAppUrl } from "../../../lib/whatsapp";
import { getRoutePage, routePages } from "../routeData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routePages.map((route) => ({
    slug: route.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoutePage(slug);

  if (!route) {
    return {};
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/rotas/${route.slug}/`;
  const state = route.state ?? "MG";
  const pageTitle = `Guincho 24h em ${route.title}, ${state} | ${siteConfigTemplate.siteName}`;

  return {
    title: pageTitle,
    description: `A Master Guincho atende ${route.title}, ${state}, com guincho, reboque e auto socorro conforme disponibilidade da operação. Envie sua localização pelo WhatsApp.`,
    alternates: {
      canonical: `/rotas/${route.slug}/`
    },
    openGraph: {
      url: pageUrl,
      title: pageTitle,
      description: `A Master Guincho atende ${route.title}, ${state}, com guincho, reboque e auto socorro conforme disponibilidade da operação. Envie sua localização pelo WhatsApp.`,
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

export default async function RouteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRoutePage(slug);

  if (!route) {
    notFound();
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/rotas/${route.slug}/`;
  const state = route.state ?? "MG";
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
        name: `Guincho 24h em ${route.title}, ${state}`,
        url: pageUrl,
        isPartOf: {
          "@id": `${siteConfigTemplate.siteUrl}/#website`
        },
        inLanguage: "pt-BR"
      },
      {
        "@id": `${pageUrl}#service`,
        "@type": "Service",
        name: `Guincho 24h em ${route.title}, ${state}`,
        description: route.routeSummary,
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
        mainEntity: route.faq.map((item) => ({
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
            name: "Rotas",
            item: `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/rotas/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: route.title,
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
              <Link href="/rotas/" className="text-brand-gold transition hover:text-white">
                Rotas
              </Link>
            </div>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
              {route.shortTitle}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Guincho 24h em {route.title}, {route.state ?? "MG"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{route.intro}</p>
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
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                A Master Guincho atende esta cidade?
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Cobertura local e regional
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>{route.routeSummary}</p>
              <p>
                A cidade entra como área atendida conforme disponibilidade da operação e do deslocamento da equipe.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Quais serviços podem ser solicitados</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {route.demand.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Quais veículos podem ser atendidos</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {route.serviceFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Como chamar pelo WhatsApp</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {route.coverage.map((item) => (
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
                O que informar para agilizar o atendimento
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Envie localização, veículo e destino
              </h2>
              <div className="mt-8 grid gap-3">
                {route.operationalNotes.map((note) => (
                  <div key={note} className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold">
                    {note}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Relação com Ituiutaba e região
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Ituiutaba segue como base da operação
              </h2>
              <div className="mt-8 grid gap-3">
                {route.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold transition hover:border-brand-blue hover:bg-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {route.references.length > 0 && (
          <section className="bg-brand-deep px-4 py-16 text-white md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
                Referencias externas
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {route.references.map((reference) => (
                  <a
                    key={reference.href}
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/15 bg-white/8 px-5 py-4 font-bold transition hover:bg-white hover:text-brand-deep"
                  >
                    {reference.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
              Perguntas frequentes sobre {route.shortTitle.toLowerCase()}
            </h2>
            <div className="mt-10 space-y-4">
              {route.faq.map((item) => (
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
