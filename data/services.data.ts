export type ServiceTemplateItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: string;
  image?: string;
  tags: string[];
};

export type ServicesDataTemplate = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ServiceTemplateItem[];
};

export const servicesDataTemplate: ServicesDataTemplate = {
  section: {
    eyebrow: "Serviços",
    title: "Soluções principais da Master Guincho",
    description:
      "Escolha o atendimento certo para pane, colisão, remoção, deslocamento de passageiros ou apoio emergencial em Ituiutaba e região."
  },
  items: [
    {
      title: "Guincho 24h",
      description: "Remoção segura para veículos leves quando o carro ou a moto não pode seguir viagem.",
      href: "/servicos/guincho-24h/",
      ctaLabel: "Chamar agora",
      icon: "support",
      image: "/images/master-guincho-carro-guincho.png",
      tags: ["24h", "remoção", "leve"]
    },
    {
      title: "Reboque",
      description: "Transporte seguro para veículos parados, sinistrados ou com deslocamento combinado.",
      href: "/servicos/reboque-24h/",
      ctaLabel: "Solicitar reboque",
      icon: "star",
      image: "/images/master-guincho-caminhonete-guincho.png",
      tags: ["reboque", "sinistro", "pane"]
    },
    {
      title: "Auto socorro",
      description: "Ajuda rápida para quem ficou parado por pane, bateria, pneu ou imobilização.",
      href: "/servicos/auto-socorro/",
      ctaLabel: "Pedir socorro",
      icon: "chat",
      image: "/images/master-guincho-moto-guincho.png",
      tags: ["socorro", "emergência", "estrada"]
    },
    {
      title: "Táxi",
      description: "Transporte de passageiros para seguir viagem, voltar para casa ou se deslocar na região.",
      href: "/servicos/taxi-24h/",
      ctaLabel: "Chamar táxi",
      icon: "location",
      image: "/images/master-guincho-taxi.jpeg",
      tags: ["passageiros", "deslocamento", "24h"]
    }
  ]
};
