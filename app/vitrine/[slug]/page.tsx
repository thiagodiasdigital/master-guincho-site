import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfigTemplate } from "../../../config/site.config";
import { seoConfigTemplate } from "../../../config/seo.config";
import { buildWhatsAppUrl } from "../../../lib/whatsapp";
import { getVitrinePage, vitrinePages } from "../vitrineData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return vitrinePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getVitrinePage(slug);

  if (!page) {
    return {};
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/vitrine/${page.slug}/`;

  return {
    title: `${page.title} | ${siteConfigTemplate.siteName}`,
    description: page.summary,
    alternates: {
      canonical: `/vitrine/${page.slug}/`
    },
    openGraph: {
      url: pageUrl,
      title: `${page.title} | ${siteConfigTemplate.siteName}`,
      description: page.summary,
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
    },
    keywords: [page.keyword, page.shortTitle, "Master Guincho", "Ituiutaba"]
  };
}

export default async function VitrineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getVitrinePage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/vitrine/${page.slug}/`;
  const whatsapp = buildWhatsAppUrl({
    phone: siteConfigTemplate.phone,
    message: `${siteConfigTemplate.primaryCta.message} Quero saber sobre ${page.keyword}.`
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${pageUrl}#webpage`,
        "@type": "WebPage",
        name: page.title,
        url: pageUrl,
        isPartOf: {
          "@id": `${siteConfigTemplate.siteUrl}/#website`
        },
        inLanguage: "pt-BR"
      },
      {
        "@id": `${pageUrl}#service`,
        "@type": "Service",
        name: page.title,
        description: page.definition,
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
        mainEntity: page.faq.map((item) => ({
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
            name: "Vitrine",
            item: `${siteConfigTemplate.siteUrl.replace(/\/$/, "")}/vitrine/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.shortTitle,
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
        <section className="bg-brand-deep px-4 pb-16 pt-28 text-white md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex flex-wrap gap-4 text-sm font-black uppercase">
                <Link href="/" className="text-brand-gold transition hover:text-white">
                  Início
                </Link>
                <Link href="/vitrine/" className="text-brand-gold transition hover:text-white">
                  Vitrine
                </Link>
              </div>
              <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-brand-gold">
                {page.keyword}
              </p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
                {page.intro}
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
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#021024] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <Image
                src={page.image}
                alt={page.alt}
                fill
                priority
                className="object-contain p-6"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Definição
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                {page.shortTitle}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>{page.definition}</p>
              <p>{page.summary}</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-mist px-4 py-16 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Ideal para</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {page.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Quando usar</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {page.whenToHire.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-deep">Benefícios</h2>
              <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                {page.benefits.map((item) => (
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
                Cobertura
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Cobertura local e regional
              </h2>
              <div className="mt-8 grid gap-3">
                {page.coverage.map((item) => (
                  <div key={item} className="rounded-lg border border-brand-blue/15 bg-brand-mist px-5 py-4 font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">
                Serviços relacionados
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
                Conecte a vitrine com a oferta principal
              </h2>
              <div className="mt-8 grid gap-3">
                {page.relatedServices.map((service) => (
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

        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
              Perguntas frequentes sobre {page.shortTitle.toLowerCase()}
            </h2>
            <div className="mt-10 space-y-4">
              {page.faq.map((item) => (
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
