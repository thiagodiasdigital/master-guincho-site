export type SeoConfigTemplate = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  canonicalBaseUrl: string;
  indexable: boolean;
  defaultOgImage: string;
  robots: {
    production: string;
    preview: string;
  };
  openGraph: {
    type: "website";
    locale: string;
  };
};

// robots/index devem ser controlados por ambiente, especialmente em preview.
export const seoConfigTemplate: SeoConfigTemplate = {
  defaultTitle: "Master Guincho | Guincho e Auto Socorro 24h em Ituiutaba",
  titleTemplate: "%s | Master Guincho",
  defaultDescription:
    "Guincho, reboque, auto socorro e taxi 24h em Ituiutaba e regiao, com atendimento para carros, motos, caminhonetes, vans, caminhões, cargas especiais, embarcacoes e maquinas.",
  canonicalBaseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://master-guincho.vercel.app",
  indexable: process.env.NEXT_PUBLIC_INDEXABLE ? process.env.NEXT_PUBLIC_INDEXABLE === "true" : true,
  defaultOgImage: "/images/master-guincho-fallback-hero-16x9.png",
  robots: {
    production: "index,follow",
    preview: "noindex,nofollow"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR"
  }
};
