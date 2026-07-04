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
  title: "Guincho e auto socorro com resposta imediata",
  subtitle:
    "Atendimento para carros, motos, caminhonetes, vans, caminhões, cargas especiais, veículos especiais, embarcações e máquinas.",
  badges: ["Guincho 24h", "Reboque", "Auto socorro", "Táxi"],
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
    section: "Hero premium da Master Guincho",
    scrollIndicator: "Role para ver mais"
  }
};
