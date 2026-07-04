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
    title: "Cards por tipo de veiculo e carga",
    description:
      "Área dedicada para destacar imagens reais de moto, carro, caminhão, embarcação e demais cenários da Master Guincho."
  },
  items: [
    {
      title: "Guincho para Moto",
      description: "Guincho para moto com reboque, auto socorro e atendimento 24h.",
      image: "/images/master-guincho-moto-guincho.png",
      alt: "Guincho para moto da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/moto-guincho/",
      tags: ["moto", "guincho", "24h"]
    },
    {
      title: "Guincho para Carro",
      description: "Reboque de carro com resposta rapida e transporte seguro.",
      image: "/images/master-guincho-carro-guincho.png",
      alt: "Guincho para carro da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/carro-guincho/",
      tags: ["carro", "reboque", "auto socorro"]
    },
    {
      title: "Guincho para Caminhao",
      description: "Guincho para caminhao com foco em peso, suporte e seguranca.",
      image: "/images/master-guincho-caminhao-guincho.png",
      alt: "Guincho para caminhao da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/caminhao-guincho/",
      tags: ["caminhao", "pesados", "guincho"]
    },
    {
      title: "Guincho para Caminhonete",
      description: "Reboque para caminhonete com cobertura regional e 24h.",
      image: "/images/master-guincho-caminhonete-guincho.png",
      alt: "Guincho para caminhonete da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/caminhonete-guincho/",
      tags: ["caminhonete", "guincho", "reboque"]
    },
    {
      title: "Guincho para Embarcacao",
      description: "Transporte de barco e embarcacao com apoio especializado.",
      image: "/images/master-guincho-barco-guincho.png",
      alt: "Guincho para embarcacao da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/embarcacao-guincho/",
      tags: ["embarcacao", "barco", "especial"]
    },
    {
      title: "Guincho para Van",
      description: "Guincho para van com contato rapido e remocao segura.",
      image: "/images/master-guincho-van-guincho.png",
      alt: "Guincho para van da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/van-guincho/",
      tags: ["van", "guincho", "24h"]
    },
    {
      title: "Guincho para Utilitarios",
      description: "Guincho para utilitarios de trabalho com resposta objetiva.",
      image: "/images/master-guincho-utilitarios.png",
      alt: "Guincho para utilitarios da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/utilitarios-guincho/",
      tags: ["utilitarios", "reboque", "auto socorro"]
    },
    {
      title: "Veiculos Especiais",
      description: "Guincho para veiculos especiais e demanda fora do padrao.",
      image: "/images/master-guincho-veiculos-especiais.png",
      alt: "Guincho para veiculos especiais da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/veiculos-especiais/",
      tags: ["veiculos especiais", "guincho", "carga"]
    },
    {
      title: "Cargas Especiais",
      description: "Reboque para cargas especiais com foco em transporte e cuidado.",
      image: "/images/master-guincho-cargas-especiais.png",
      alt: "Reboque para cargas especiais da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/cargas-especiais/",
      tags: ["cargas especiais", "reboque", "especial"]
    },
    {
      title: "Maquina Agricola",
      description: "Guincho para maquina agricola com apoio regional e 24h.",
      image: "/images/master-guincho-maquina-agricola.png",
      alt: "Guincho para maquina agricola da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/maquina-agricola/",
      tags: ["agricola", "maquina", "guincho"]
    },
    {
      title: "Implemento Agricola",
      description: "Guincho para implemento agricola com suporte sob demanda.",
      image: "/images/master-guincho-implemento-agricola.png",
      alt: "Guincho para implemento agricola da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/implemento-agricola/",
      tags: ["agricola", "implemento", "reboque"]
    },
    {
      title: "Colecionadores",
      description: "Guincho para veiculos de colecionadores com cuidado extra.",
      image: "/images/master-guincho-veiculos-colecionadores.png",
      alt: "Guincho para veiculos de colecionadores da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/veiculos-colecionadores/",
      tags: ["colecionadores", "veiculos", "especial"]
    },
    {
      title: "Dois Veiculos",
      description: "Guincho para dois veiculos com planejamento e logistica.",
      image: "/images/master-guincho-guincho-para-dois-veiculos.png",
      alt: "Guincho para dois veiculos da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/guincho-para-dois-veiculos/",
      tags: ["dois veiculos", "guincho", "logistica"]
    },
    {
      title: "Guincho para Pesados",
      description: "Guincho para pesados com forca, suporte e seguranca.",
      image: "/images/master-guincho-guincho-pesados.png",
      alt: "Guincho para pesados da Master Guincho",
      ctaLabel: "Ver pagina",
      href: "/vitrine/guincho-para-pesados/",
      tags: ["pesados", "guincho", "reboque"]
    }
  ]
};
