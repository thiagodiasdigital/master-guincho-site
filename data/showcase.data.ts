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
      "Confira os tipos de atendimento disponíveis para moto, carro, caminhão, embarcação e outras demandas da operação."
  },
  items: [
    {
      title: "Guincho para Moto",
      description: "Pane, queda, sinistro ou deslocamento para oficina e residência com apoio 24h.",
      image: "/images/master-guincho-moto-guincho.png",
      alt: "Guincho para moto da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/moto-guincho/",
      tags: ["moto", "guincho", "24h"]
    },
    {
      title: "Guincho para Carro",
      description: "Carro parado, sem partida, com pane ou após colisão? A retirada é feita com cuidado.",
      image: "/images/master-guincho-carro-guincho.png",
      alt: "Guincho para carro da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/carro-guincho/",
      tags: ["carro", "reboque", "auto socorro"]
    },
    {
      title: "Guincho para Caminhão",
      description: "Atendimento para caminhão parado em rota, pátio, cidade ou acesso rodoviário.",
      image: "/images/master-guincho-caminhao-guincho.png",
      alt: "Guincho para caminhão da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/caminhao-guincho/",
      tags: ["caminhão", "pesados", "guincho"]
    },
    {
      title: "Guincho para Caminhonete",
      description: "Apoio para caminhonete de uso urbano, rural, de trabalho ou viagem regional.",
      image: "/images/master-guincho-caminhonete-guincho.png",
      alt: "Guincho para caminhonete da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/caminhonete-guincho/",
      tags: ["caminhonete", "guincho", "reboque"]
    },
    {
      title: "Guincho para Embarcação",
      description: "Barco, lancha ou embarcação transportada com cuidado e orientação prévia.",
      image: "/images/master-guincho-barco-guincho.png",
      alt: "Guincho para embarcação da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/embarcacao-guincho/",
      tags: ["embarcação", "barco", "especial"]
    },
    {
      title: "Guincho para Van",
      description: "Van imobilizada, com pane ou necessidade de seguir para oficina, base ou destino combinado.",
      image: "/images/master-guincho-van-guincho.png",
      alt: "Guincho para van da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/van-guincho/",
      tags: ["van", "guincho", "24h"]
    },
    {
      title: "Guincho para Utilitários",
      description: "Veículos de trabalho e carga leve com remoção segura em cidade ou região.",
      image: "/images/master-guincho-utilitarios.png",
      alt: "Guincho para utilitários da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/utilitarios-guincho/",
      tags: ["utilitários", "reboque", "auto socorro"]
    },
    {
      title: "Veículos Especiais",
      description: "Atendimento sob avaliação para veículos fora do padrão e deslocamentos especiais.",
      image: "/images/master-guincho-veiculos-especiais.png",
      alt: "Guincho para veículos especiais da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/veiculos-especiais/",
      tags: ["veículos especiais", "guincho", "carga"]
    },
    {
      title: "Cargas Especiais",
      description: "Transporte planejado para cargas que exigem cuidado, origem e destino combinados.",
      image: "/images/master-guincho-cargas-especiais.png",
      alt: "Reboque para cargas especiais da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/cargas-especiais/",
      tags: ["cargas especiais", "reboque", "especial"]
    },
    {
      title: "Máquina Agrícola",
      description: "Máquina parada no campo, na estrada ou na cidade com apoio para deslocamento seguro.",
      image: "/images/master-guincho-maquina-agricola.png",
      alt: "Guincho para máquina agrícola da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/maquina-agricola/",
      tags: ["agrícola", "máquina", "guincho"]
    },
    {
      title: "Implemento Agrícola",
      description: "Implemento agrícola transportado com orientação prévia e cuidado na movimentação.",
      image: "/images/master-guincho-implemento-agricola.png",
      alt: "Guincho para implemento agrícola da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/implemento-agricola/",
      tags: ["agrícola", "implemento", "reboque"]
    },
    {
      title: "Colecionadores",
      description: "Veículos antigos, raros ou de valor afetivo com transporte cuidadoso.",
      image: "/images/master-guincho-veiculos-colecionadores.png",
      alt: "Guincho para veículos de colecionadores da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/veiculos-colecionadores/",
      tags: ["colecionadores", "veículos", "especial"]
    },
    {
      title: "Dois Veículos",
      description: "Condição avaliada caso a caso para transporte combinado de duas unidades.",
      image: "/images/master-guincho-guincho-para-dois-veiculos.png",
      alt: "Guincho para dois veículos da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/guincho-para-dois-veiculos/",
      tags: ["dois veículos", "guincho", "logística"]
    },
    {
      title: "Guincho para Pesados",
      description: "Atendimento para veículos pesados com foco em segurança e logística da remoção.",
      image: "/images/master-guincho-guincho-pesados.png",
      alt: "Guincho para pesados da Master Guincho",
      ctaLabel: "Ver detalhes",
      href: "/vitrine/guincho-para-pesados/",
      tags: ["pesados", "guincho", "reboque"]
    }
  ]
};
