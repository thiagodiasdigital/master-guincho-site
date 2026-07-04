export type ShowcaseTemplateItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  ctaLabel: string;
  href: string;
  tags: string[];
};

export type ShowcaseDataTemplate = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ShowcaseTemplateItem[];
};

export const showcaseDataTemplate: ShowcaseDataTemplate = {
  section: {
    eyebrow: "Vitrine",
    title: "Uma vitrine visual para apresentar frota e estrutura",
    description:
      "Use esta area para destacar imagens reais da frota, da base e da operacao da Master Guincho."
  },
  items: [
    {
      title: "Frota principal",
      description: "Guincho e apoio para ocorrencias leves e pesadas.",
      image: "/images/master-guincho-frota-principal.png",
      alt: "Frota principal da Master Guincho",
      ctaLabel: "Ver frota",
      href: "/servicos/guincho-24h/",
      tags: ["frota", "24h"]
    },
    {
      title: "Operacao em campo",
      description: "Imagem para reforcar prontidao, organizacao e resposta rapida.",
      image: "/images/master-guincho-matriz.png",
      alt: "Operacao da Master Guincho",
      ctaLabel: "Ver operacao",
      href: "/servicos/auto-socorro/",
      tags: ["operacao", "resposta"]
    },
    {
      title: "Atendimento para grandes volumes",
      description: "Card para destacar caminhão, cargas especiais e veiculos maiores.",
      image: "/images/master-guincho-guincho-pesados.png",
      alt: "Guincho para pesados da Master Guincho",
      ctaLabel: "Ver capacidade",
      href: "/servicos/reboque-24h/",
      tags: ["pesados", "especial"]
    },
    {
      title: "Passageiros e deslocamentos",
      description: "Apoio visual para o servico de taxi e deslocamentos sob demanda.",
      image: "/images/master-guincho-taxi.jpeg",
      alt: "Servico de taxi da Master Guincho",
      ctaLabel: "Ver deslocamento",
      href: "/servicos/taxi-24h/",
      tags: ["passageiros", "taxi"]
    }
  ]
};
