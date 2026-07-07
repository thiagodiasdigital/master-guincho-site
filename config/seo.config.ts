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
  defaultTitle: "Guincho 24h em Ituiutaba e Região | Master Guincho",
  titleTemplate: "%s",
  defaultDescription:
    "Guincho, reboque e auto socorro 24h em Ituiutaba e região. Atendimento para carros, motos, caminhonetes, vans, caminhões, máquinas e cargas especiais. Chame pelo WhatsApp.",
  canonicalBaseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://masterguinchomg.com.br",
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
