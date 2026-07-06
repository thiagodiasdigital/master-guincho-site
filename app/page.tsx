import Image from "next/image";
import { ScrollHero } from "@/components/ScrollHero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeDataTemplate } from "@/data/home.data";
import { locationsDataTemplate } from "@/data/locations.data";
import { showcaseDataTemplate } from "@/data/showcase.data";
import { servicesDataTemplate } from "@/data/services.data";
import { heroDataTemplate } from "@/data/hero.data";
import { createHomeJsonLd } from "@/lib/schema";
import { siteConfigTemplate } from "../config/site.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const siteUrl = siteConfigTemplate.siteUrl;
const whatsapp = buildWhatsAppUrl({
  phone: siteConfigTemplate.phone,
  message: siteConfigTemplate.primaryCta.message
});
const instagram = siteConfigTemplate.socialLinks.instagram;
const linkedin = siteConfigTemplate.socialLinks.linkedin;
const pinterest = siteConfigTemplate.socialLinks.pinterest;
const tiktok = siteConfigTemplate.socialLinks.tiktok;
const xProfile = siteConfigTemplate.socialLinks.x;
const youtube = siteConfigTemplate.socialLinks.youtube;
const facebook = siteConfigTemplate.socialLinks.facebook;
const googleReviews = siteConfigTemplate.googleReviewsUrl;
const phone = `tel:${siteConfigTemplate.phone.replace(/[^\d+]/g, "")}`;
const navItems = siteConfigTemplate.navItems;
const homeSections = homeDataTemplate.sections;
const faqItems = homeSections.faq.items;
const showcaseSection = showcaseDataTemplate.section;
const showcaseItems = showcaseDataTemplate.items;
const serviceSection = servicesDataTemplate.section;
const serviceItems = servicesDataTemplate.items;
const locationSection = locationsDataTemplate.section;
const locationItems = locationsDataTemplate.items;
const business = {
  name: siteConfigTemplate.brandName,
  legalName: siteConfigTemplate.legalName,
  taxId: siteConfigTemplate.document,
  phone: siteConfigTemplate.phone,
  phoneDisplay: siteConfigTemplate.phone,
  email: siteConfigTemplate.email,
  whatsapp,
  instagram,
  linkedin,
  pinterest,
  tiktok,
  x: xProfile,
  youtube,
  facebook,
  googleReviews,
  address: {
    streetAddress: siteConfigTemplate.address.street,
    addressLocality: siteConfigTemplate.address.city,
    addressRegion: siteConfigTemplate.address.state,
    postalCode: siteConfigTemplate.address.postalCode,
    addressCountry: siteConfigTemplate.address.country
  }
};

const socialProfiles = [
  {
    label: "Instagram",
    href: instagram,
    icon: "instagram",
    text: "Veja fotos reais da operação e do atendimento no dia a dia."
  },
  {
    label: "LinkedIn",
    href: linkedin,
    icon: "linkedin",
    text: "Veja a presença profissional da empresa."
  },
  {
    label: "Pinterest",
    href: pinterest,
    icon: "pinterest",
    text: "Consulte referências visuais e materiais de apoio."
  },
  {
    label: "TikTok",
    href: tiktok,
    icon: "tiktok",
    text: "Veja vídeos curtos com atendimentos, deslocamentos e situações reais da operação."
  },
  {
    label: "X",
    href: xProfile,
    icon: "x",
    text: "Siga atualizações curtas sobre a operação e novidades."
  },
  {
    label: "YouTube",
    href: youtube,
    icon: "youtube",
    text: "Veja vídeos e conteúdos institucionais da operação."
  },
  {
    label: "Facebook",
    href: facebook,
    icon: "facebook",
    text: "Acesse o perfil social da Master Guincho."
  },
  {
    label: "WhatsApp",
    href: whatsapp,
    icon: "whatsapp",
    text: "Solicite contato rápido e atendimento direto."
  },
  {
    label: "Ver avaliacoes no Google",
    href: googleReviews,
    icon: "google",
    text: "Consulte avaliações, rota e informações públicas da empresa."
  }
];

const jsonLd = createHomeJsonLd({
  siteUrl,
  siteName: siteConfigTemplate.siteName,
  pageDescription: homeSections.showcase.description,
  business: {
    name: siteConfigTemplate.brandName,
    legalName: siteConfigTemplate.legalName || undefined,
    url: siteUrl,
    telephone: siteConfigTemplate.phone,
    email: siteConfigTemplate.email || undefined,
    sameAs: [instagram, linkedin, pinterest, tiktok, xProfile, youtube, facebook, googleReviews].filter(Boolean),
    address: {
      streetAddress: siteConfigTemplate.address.street,
      addressLocality: siteConfigTemplate.address.city,
      addressRegion: siteConfigTemplate.address.state,
      postalCode: siteConfigTemplate.address.postalCode,
      addressCountry: siteConfigTemplate.address.country
    },
    areaServed: siteConfigTemplate.serviceAreas
  },
  showcase: {
    name: showcaseSection.title,
    items: showcaseItems.map((item) => ({
      name: item.title,
      description: item.description,
      url: item.href || siteUrl
    }))
  },
  services: {
    name: serviceSection.title,
    items: serviceItems.map((item) => ({
      name: item.title,
      description: item.description,
      url: item.href || siteUrl
    }))
  },
  locations: {
    name: locationSection.title,
    items: locationItems.map((item) => ({
      name: item.name,
      description: item.description,
      url: item.href || siteUrl
    }))
  },
  faqItems,
  breadcrumbItems: [
    {
      name: "Início",
      item: siteUrl
    }
  ]
});

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-deep/92 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <a href="#inicio" className="flex items-center gap-3 lg:hidden" aria-label={siteConfigTemplate.siteName}>
            <Image
              src={heroDataTemplate.brandMark.src}
              alt={heroDataTemplate.brandMark.alt}
              width={216}
              height={101}
              className="h-[69px] w-auto object-contain"
              priority
            />
          </a>
          <nav className="hidden items-center gap-5 text-sm font-semibold uppercase text-white/85 lg:col-start-2 lg:flex lg:justify-self-center">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-brand-gold">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-end gap-1 lg:col-start-3 lg:justify-self-end">
            <span className="text-xs font-black uppercase text-brand-gold md:text-sm">Atendimento 24h</span>
              <a
                href={whatsapp}
                className="rounded-md bg-brand-gold px-4 py-3 text-xs font-black uppercase text-brand-deep transition hover:bg-[#ffd24a] focus:outline-none focus:ring-4 focus:ring-brand-gold/35 md:text-sm"
              >
                {siteConfigTemplate.primaryCta.label}
              </a>
          </div>
        </div>
      </header>

      <main id="inicio">
        <ScrollHero />
        <ShowcaseSection
          section={showcaseSection}
          items={showcaseItems}
          fallbackHref={whatsapp}
        />
        <IntroSection section={homeSections.intro} />
        <ServicesSection
          section={homeSections.services}
          eyebrow={serviceSection.eyebrow}
          items={serviceItems}
          fallbackHref={whatsapp}
        />
        <CoverageSection
          section={homeSections.coverage}
          eyebrow={locationSection.eyebrow}
          items={locationItems}
        />
        <DifferentialsSection section={homeSections.differentiators} />
        <FAQSection section={homeSections.faq} items={faqItems} />
        <FinalCTASection
          section={homeSections.finalCta}
          socialProfiles={socialProfiles}
          siteName={siteConfigTemplate.siteName}
          whatsappHref={whatsapp}
          secondaryHref={siteConfigTemplate.googleBusinessUrl}
        />
      </main>

      <footer className="bg-[#071827] px-4 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Image
              src={heroDataTemplate.brandMark.src}
              alt={heroDataTemplate.brandMark.alt}
              width={245}
              height={115}
              className="h-[80.5px] w-auto object-contain"
            />
            <p className="mt-5 font-black">{business.name}</p>
            <p className="mt-2 text-white/70">{siteConfigTemplate.footerDescription}</p>
            {business.taxId ? <p className="mt-2 text-white/70">CNPJ: {business.taxId}</p> : null}
            {business.legalName ? <p className="mt-2 text-white/70">{business.legalName}</p> : null}
            <p className="mt-2 max-w-md text-white/70">
              {`${business.address.streetAddress} - ${business.address.addressLocality} - ${business.address.addressRegion}, ${business.address.postalCode}`}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-black">Contato</h2>
            <div className="mt-4 grid gap-3 text-white/75">
              <a href={phone} className="hover:text-brand-gold">{business.phoneDisplay}</a>
              {business.email ? (
                <a href={`mailto:${business.email}`} className="hover:text-brand-gold">
                  {business.email}
                </a>
              ) : null}
              {socialProfiles.filter((profile) => Boolean(profile.href)).map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold"
                >
                  {profile.label === "WhatsApp" ? `WhatsApp ${siteConfigTemplate.siteName}` : profile.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-black">Navegação</h2>
            <div className="mt-4 grid gap-3 text-white/75">
              {navItems.map(({ label, href }) => (
                <a key={href} href={href} className="hover:text-brand-gold">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <p>
            Powered by{" "}
            <a
              href="https://agenciadiasdigital.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-gold transition hover:text-white"
            >
              Agência Dias Digital
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}


