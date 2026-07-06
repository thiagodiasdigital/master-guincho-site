export type HeroDataTemplate = {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  primaryCta: {
    label: string;
    message: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  brandMark: {
    src: string;
    alt: string;
  };
  fallback: {
    src: string;
    alt: string;
  };
  sequence: {
    basePath: string;
    framePrefix: string;
    frameExtension: string;
    frameCount: number;
  };
  labels: {
    section: string;
    scrollIndicator: string;
  };
};

export const heroDataTemplate: HeroDataTemplate = {
  eyebrow: "Atendimento 24h em Ituiutaba e região",
  title: "Guincho, reboque, auto socorro e táxi 24h",
  subtitle:
    "Atendimento para carros, motos, caminhonetes, vans, caminhões, utilitários, veículos especiais, embarcações, máquinas e cargas especiais em Ituiutaba e região.",
  badges: ["Guincho 24h", "Reboque 24h", "Auto socorro", "Táxi 24h"],
  primaryCta: {
    label: "Chamar no WhatsApp",
    message: "Olá, preciso de um guincho agora."
  },
  secondaryCta: {
    label: "Ver serviços",
    href: "#servicos"
  },
  brandMark: {
    src: "/images/master-guincho-logo-transparent.png",
    alt: "Logo da Master Guincho"
  },
  fallback: {
    src: "/images/master-guincho-fallback-hero-16x9.png",
    alt: "Imagem de fallback da Master Guincho"
  },
  sequence: {
    basePath: "/sequences/hero",
    framePrefix: "hero-",
    frameExtension: "webp",
    frameCount: 90
  },
  labels: {
    section: "Atendimento principal da Master Guincho",
    scrollIndicator: "Role para ver mais"
  }
};
