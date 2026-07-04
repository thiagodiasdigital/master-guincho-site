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
      "Serviços organizados para orientar o cliente com clareza, rapidez e foco em conversão."
  },
  items: [
    {
      title: "Guincho 24h",
      description: "Remoção rápida para carros, motos, caminhonetes, vans e utilitários.",
      href: "/servicos/guincho-24h/",
      ctaLabel: "Chamar agora",
      icon: "support",
      image: "/images/master-guincho-carro-guincho.png",
      tags: ["24h", "remoção", "leve"]
    },
    {
      title: "Reboque",
      description: "Atendimento para pane, sinistro, transporte e deslocamento programado.",
      href: "/servicos/reboque-24h/",
      ctaLabel: "Solicitar reboque",
      icon: "star",
      image: "/images/master-guincho-caminhonete-guincho.png",
      tags: ["reboque", "sinistro", "pane"]
    },
    {
      title: "Auto socorro",
      description: "Assistência emergencial na estrada, na cidade e em rotas regionais.",
      href: "/servicos/auto-socorro/",
      ctaLabel: "Pedir socorro",
      icon: "chat",
      image: "/images/master-guincho-moto-guincho.png",
      tags: ["socorro", "emergência", "estrada"]
    },
    {
      title: "Táxi",
      description: "Transporte de passageiros sob demanda para deslocamentos locais e regionais.",
      href: "/servicos/taxi-24h/",
      ctaLabel: "Chamar táxi",
      icon: "location",
      image: "/images/master-guincho-taxi.jpeg",
      tags: ["passageiros", "deslocamento", "24h"]
    }
  ]
};
