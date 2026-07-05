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
    title: "Tipos de veículo e carga atendidos",
    description:
      "Imagens reais de moto, carro, caminhão, embarcação e outros cenários atendidos pela Master Guincho."
  },
  items: [
    {
      title: "Guincho para Moto",
      description: "Guincho para moto com reboque, auto socorro e atendimento 24h.",
      image: "/images/master-guincho-moto-guincho.png",
      alt: "Guincho para moto da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/moto-guincho/",
      tags: ["moto", "guincho", "24h"]
    },
    {
      title: "Guincho para Carro",
      description: "Reboque de carro com resposta rápida e transporte seguro.",
      image: "/images/master-guincho-carro-guincho.png",
      alt: "Guincho para carro da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/carro-guincho/",
      tags: ["carro", "reboque", "auto socorro"]
    },
    {
      title: "Guincho para Caminhão",
      description: "Guincho para caminhão com foco em peso, suporte e segurança.",
      image: "/images/master-guincho-caminhao-guincho.png",
      alt: "Guincho para caminhão da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/caminhao-guincho/",
      tags: ["caminhão", "pesados", "guincho"]
    },
    {
      title: "Guincho para Caminhonete",
      description: "Reboque para caminhonete com cobertura regional e 24h.",
      image: "/images/master-guincho-caminhonete-guincho.png",
      alt: "Guincho para caminhonete da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/caminhonete-guincho/",
      tags: ["caminhonete", "guincho", "reboque"]
    },
    {
      title: "Guincho para Embarcação",
      description: "Transporte de barco e embarcação com apoio especializado.",
      image: "/images/master-guincho-barco-guincho.png",
      alt: "Guincho para embarcação da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/embarcacao-guincho/",
      tags: ["embarcação", "barco", "especial"]
    },
    {
      title: "Guincho para Van",
      description: "Guincho para van com contato rápido e remoção segura.",
      image: "/images/master-guincho-van-guincho.png",
      alt: "Guincho para van da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/van-guincho/",
      tags: ["van", "guincho", "24h"]
    },
    {
      title: "Guincho para Utilitários",
      description: "Guincho para utilitários de trabalho com resposta objetiva.",
      image: "/images/master-guincho-utilitarios.png",
      alt: "Guincho para utilitários da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/utilitarios-guincho/",
      tags: ["utilitários", "reboque", "auto socorro"]
    },
    {
      title: "Veículos Especiais",
      description: "Guincho para veículos especiais e demanda fora do padrão.",
      image: "/images/master-guincho-veiculos-especiais.png",
      alt: "Guincho para veículos especiais da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/veiculos-especiais/",
      tags: ["veículos especiais", "guincho", "carga"]
    },
    {
      title: "Cargas Especiais",
      description: "Reboque para cargas especiais com foco em transporte e cuidado.",
      image: "/images/master-guincho-cargas-especiais.png",
      alt: "Reboque para cargas especiais da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/cargas-especiais/",
      tags: ["cargas especiais", "reboque", "especial"]
    },
    {
      title: "Máquina Agrícola",
      description: "Guincho para máquina agrícola com apoio regional e 24h.",
      image: "/images/master-guincho-maquina-agricola.png",
      alt: "Guincho para máquina agrícola da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/maquina-agricola/",
      tags: ["agrícola", "máquina", "guincho"]
    },
    {
      title: "Implemento Agrícola",
      description: "Guincho para implemento agrícola com suporte sob demanda.",
      image: "/images/master-guincho-implemento-agricola.png",
      alt: "Guincho para implemento agrícola da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/implemento-agricola/",
      tags: ["agrícola", "implemento", "reboque"]
    },
    {
      title: "Colecionadores",
      description: "Guincho para veículos de colecionadores com cuidado extra.",
      image: "/images/master-guincho-veiculos-colecionadores.png",
      alt: "Guincho para veículos de colecionadores da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/veiculos-colecionadores/",
      tags: ["colecionadores", "veículos", "especial"]
    },
    {
      title: "Dois Veículos",
      description: "Guincho para dois veículos com planejamento e logística.",
      image: "/images/master-guincho-guincho-para-dois-veiculos.png",
      alt: "Guincho para dois veículos da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/guincho-para-dois-veiculos/",
      tags: ["dois veículos", "guincho", "logística"]
    },
    {
      title: "Guincho para Pesados",
      description: "Guincho para pesados com força, suporte e segurança.",
      image: "/images/master-guincho-guincho-pesados.png",
      alt: "Guincho para pesados da Master Guincho",
      ctaLabel: "Ver página",
      href: "/vitrine/guincho-para-pesados/",
      tags: ["pesados", "guincho", "reboque"]
    }
  ]
};
