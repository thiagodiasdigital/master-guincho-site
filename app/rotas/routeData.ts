export type RoutePage = {
  slug: string;
  title: string;
  shortTitle: string;
  state?: "MG" | "GO";
  intro: string;
  routeSummary: string;
  demand: string[];
  serviceFit: string[];
  coverage: string[];
  operationalNotes: string[];
  relatedServices: Array<{
    label: string;
    href: string;
  }>;
  references: Array<{
    label: string;
    href: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const baseServices = [
  { label: "Guincho 24h", href: "/servicos/guincho-24h/" },
  { label: "Reboque 24h", href: "/servicos/reboque-24h/" },
  { label: "Auto socorro", href: "/servicos/auto-socorro/" }
];

export const routePages: RoutePage[] = [
  {
    slug: "ituiutaba",
    title: "Ituiutaba",
    shortTitle: "Cidade base",
    intro: "Ituiutaba é a cidade-base da Master Guincho e concentra o atendimento principal.",
    routeSummary:
      "Ituiutaba é a cidade-base da operação e ajuda a orientar quem busca guincho ou auto socorro com rapidez.",
    demand: [
      "Pane no centro e em bairros da cidade.",
      "Retirada de veículos com urgência.",
      "Atendimento complementar para empresas e particulares."
    ],
    serviceFit: ["Guincho 24h", "Reboque 24h", "Auto socorro"],
    coverage: [
      "Atendimento principal na cidade.",
      "Base de apoio para cidades vizinhas.",
      "Ponto central de origem da operação."
    ],
    operationalNotes: [
      "Atendimento principal com base em Ituiutaba.",
      "Cobertura regional a partir da cidade.",
      "Contato rápido pelo WhatsApp."
    ],
    relatedServices: baseServices.slice(0, 2),
    references: [],
    faq: [
      {
        question: "Ituiutaba é a cidade-base da operação?",
        answer: "Sim. A operação parte de Ituiutaba e a cobertura local se organiza a partir da cidade."
      },
      {
        question: "A cidade pode receber confirmação de disponibilidade?",
        answer: "Pode, desde que a informação seja confirmada e mantida atualizada."
      }
    ]
  },
  {
    slug: "capinopolis",
    title: "Capinópolis",
    shortTitle: "Capinópolis",
    intro: "Cobertura regional com resposta direta para ocorrências urbanas e rodoviárias.",
    routeSummary:
      "Capinópolis entra como cidade atendida para quem precisa de atendimento rápido sem perder o contexto local.",
    demand: [
      "Veículo parado na cidade.",
      "Remoção por pane ou sinistro.",
      "Atendimento para demandas urgentes."
    ],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: [
      "Cidade atendida pela cobertura regional.",
      "Atende quem busca guincho ou reboque na cidade.",
      "Útil para quem precisa de resposta rápida."
    ],
    operationalNotes: [
      "Atendimento sob disponibilidade para Capinópolis.",
      "Envie localização, tipo de veículo e destino.",
      "Resposta direta pelo WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Capinópolis está dentro da cobertura?",
        answer: "Sim. A cidade faz parte da área atendida da Master Guincho."
      },
      {
        question: "O texto deve priorizar atendimento rápido?",
        answer: "Sim. Para auto socorro, a prioridade é reduzir o tempo até o contato."
      }
    ]
  },
  {
    slug: "gurinhata",
    title: "Gurinhatã",
    shortTitle: "Gurinhatã",
    intro: "Gurinhatã faz parte da cobertura regional da Master Guincho e pode receber atendimento conforme a ocorrência e a disponibilidade.",
    routeSummary:
      "Gurinhatã entra como cidade atendida para orientar quem precisa de guincho, reboque ou auto socorro com rapidez.",
    demand: [
      "Atendimento emergencial na cidade.",
      "Retirada de veículo sem rodar.",
      "Contato rápido por WhatsApp."
    ],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: [
      "Cidade dentro do raio de atendimento.",
      "Cobertura voltada a deslocamento e retirada.",
      "Atendimento local com foco em urgência e deslocamento seguro."
    ],
    operationalNotes: [
      "Atendimento para Gurinhatã conforme disponibilidade.",
      "Solicitação direta pelo WhatsApp.",
      "Cobertura voltada para guincho, reboque e auto socorro."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Gurinhatã pode receber atendimento?",
        answer: "Sim. A cidade integra a cobertura regional e o atendimento depende da disponibilidade operacional."
      }
    ]
  },
  {
    slug: "canapolis",
    title: "Canápolis",
    shortTitle: "Canápolis",
    intro: "Cobertura regional com resposta direta para demandas da cidade.",
    routeSummary:
      "Canápolis entra como cidade atendida no eixo regional, reforçando a cobertura da Master Guincho para quem precisa de ajuda rápida.",
    demand: [
      "Veículo parado na cidade.",
      "Solicitação rápida.",
      "Retirada segura."
    ],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida na região", "Cobertura operacional regional", "Resposta via WhatsApp"],
    operationalNotes: [
      "Canápolis integra a área atendida da operação.",
      "O contato é feito pelo WhatsApp.",
      "Atendimento para guincho, reboque e auto socorro."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Canápolis está dentro da cobertura?",
        answer: "Sim. A cidade faz parte da área atendida da Master Guincho."
      }
    ]
  },
  {
    slug: "ipiacu",
    title: "Ipiaçu",
    shortTitle: "Ipiaçu",
    intro: "Ipiaçu integra a cobertura regional da Master Guincho para ocorrências locais e rodoviárias.",
    routeSummary:
      "Ipiaçu representa um ponto de cobertura útil para captar demanda local e conectar a operação com o contato mais rápido possível.",
    demand: ["Pane na cidade", "Remoção de veículo", "Socorro sob demanda"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cobertura regional", "Atendimento local", "Conexão com cidades vizinhas"],
    operationalNotes: [
      "Ipiaçu faz parte da cobertura regional.",
      "Envie a localização pelo WhatsApp.",
      "Atendimento para retirada e transporte de veículos."
    ],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [
      {
        question: "Ipiaçu está na cobertura?",
        answer: "Sim. A cidade integra a cobertura regional da Master Guincho."
      }
    ]
  },
  {
    slug: "cachoeira-dourada-mg",
    title: "Cachoeira Dourada MG",
    shortTitle: "Cachoeira Dourada",
    intro: "Página de cobertura do lado mineiro para busca local e acionamento rápido.",
    routeSummary:
      "Cachoeira Dourada MG reforça a presença regional da Master Guincho e ajuda a deixar claro o atendimento por cidade.",
    demand: ["Atendimento local", "Remoção urgente", "Apoio rodoviário"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade mineira atendida", "Cobertura regional", "Resposta pelo WhatsApp"],
    operationalNotes: [
      "Cachoeira Dourada MG é atendida conforme disponibilidade.",
      "O acionamento é feito pelo WhatsApp.",
      "Cobertura regional para guincho e auto socorro."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Existe cobertura em MG?",
        answer: "Sim. Cachoeira Dourada MG faz parte da cobertura informada."
      }
    ]
  },
  {
    slug: "santa-vitoria",
    title: "Santa Vitória",
    shortTitle: "Santa Vitória",
    intro: "Cobertura para demandas da cidade e do entorno.",
    routeSummary:
      "Santa Vitória amplia a cobertura regional e ajuda a responder consultas de proximidade com mais clareza.",
    demand: ["Veículo parado", "Solicitação rápida", "Retirada segura"],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida", "Cobertura em demanda", "Resposta via WhatsApp"],
    operationalNotes: [
      "Santa Vitória integra a cobertura regional.",
      "O atendimento depende da disponibilidade operacional.",
      "Solicite suporte pelo WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Santa Vitória está na cobertura?",
        answer: "Sim. A cidade integra a lista de cobertura regional."
      }
    ]
  },
  {
    slug: "monte-alegre-de-minas",
    title: "Monte Alegre de Minas",
    shortTitle: "Monte Alegre",
    intro: "Cobertura para buscas de atendimento rápido na cidade e entorno.",
    routeSummary:
      "Monte Alegre de Minas integra a cobertura regional da Master Guincho.",
    demand: ["Atendimento urgente", "Transporte de veículo", "Contato por WhatsApp"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cidade atendida", "Eixo regional", "Prioridade de resposta"],
    operationalNotes: [
      "Monte Alegre de Minas é atendida pela operação regional.",
      "Envie localização e destino pelo WhatsApp.",
      "Cobertura para guincho, reboque e auto socorro."
    ],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [
      {
        question: "A cidade entra no raio?",
        answer: "Sim, ela foi incluída na cobertura listada."
      }
    ]
  },
  {
    slug: "campina-verde",
    title: "Campina Verde",
    shortTitle: "Campina Verde",
    intro: "Cobertura para demandas locais e regionais.",
    routeSummary:
      "Campina Verde amplia a cobertura regional e conecta a operação com a cidade de forma clara.",
    demand: ["Guincho urgente", "Reboque programado", "Socorro em estrada"],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida", "Cobertura em demanda", "Resposta via WhatsApp"],
    operationalNotes: [
      "Campina Verde entra na cobertura regional.",
      "O atendimento ocorre conforme disponibilidade.",
      "Solicite pelo WhatsApp com localização e destino."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Campina Verde está atendida?",
        answer: "Sim, dentro da área informada pela operação."
      }
    ]
  },
  {
    slug: "cachoeira-dourada-go",
    title: "Cachoeira Dourada GO",
    shortTitle: "Cachoeira GO",
    state: "GO",
    intro: "Cobertura do lado goiano para reforçar a área atendida.",
    routeSummary:
      "A cidade entra como ponto de cobertura para consultas por localidade e para deixar mais clara a abrangência regional da Master Guincho.",
    demand: ["Ocorrência local", "Atendimento rápido", "Deslocamento seguro"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade em GO", "Cobertura regional", "Atendimento sob demanda"],
    operationalNotes: [
      "Cachoeira Dourada GO faz parte da cobertura regional.",
      "O atendimento depende da disponibilidade da operação.",
      "Envie sua localização pelo WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "A cidade goiana está coberta?",
        answer: "Sim. Cachoeira Dourada GO foi incluída na cobertura."
      }
    ]
  },
  {
    slug: "inaciolandia",
    title: "Inaciolândia",
    shortTitle: "Inaciolândia",
    intro: "Página regional para captação local e atendimento de urgência.",
    routeSummary:
      "Inaciolândia reforça a cobertura regional e dá uma saída prática para quem precisa de atendimento na cidade.",
    demand: ["Guincho local", "Socorro rápido", "Transporte para destino combinado"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cidade atendida", "Cobertura regional", "Resposta direta"],
    operationalNotes: [
      "Inaciolândia é atendida conforme disponibilidade.",
      "Contato rápido pelo WhatsApp.",
      "Cobertura regional para guincho e auto socorro."
    ],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [
      {
        question: "Inaciolândia está na cobertura?",
        answer: "Sim. Ela integra a lista de cidades atendidas."
      }
    ]
  },
  {
    slug: "itumbiara",
    title: "Itumbiara",
    shortTitle: "Itumbiara",
    state: "GO",
    intro: "Cidade estratégica para cobertura regional e busca por socorro rápido.",
    routeSummary:
      "Itumbiara tem peso importante na cobertura regional e ajuda a reforçar o atendimento no entorno.",
    demand: ["Atendimento urgente", "Remoção segura", "Guincho para ida e volta"],
    serviceFit: ["Guincho 24h", "Reboque 24h", "Auto socorro"],
    coverage: ["Cidade atendida", "Área estratégica", "Conexão regional"],
    operationalNotes: [
      "Itumbiara integra a cobertura regional em GO.",
      "O atendimento depende da disponibilidade operacional.",
      "Envie localização, veículo e destino pelo WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Itumbiara está coberta?",
        answer: "Sim. A cidade faz parte da cobertura regional da operação."
      }
    ]
  },
  {
    slug: "uberlandia",
    title: "Uberlândia",
    shortTitle: "Uberlândia",
    intro: "Uberlândia integra a cobertura regional da Master Guincho conforme disponibilidade da operação.",
    routeSummary:
      "Uberlândia entra como cidade de cobertura ampliada para quem precisa de atendimento regional.",
    demand: ["Transporte de veículo", "Atendimento sob demanda", "Socorro na cidade ou rodovia"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade atendida", "Cobertura expandida", "Acionamento rápido"],
    operationalNotes: [
      "Uberlândia faz parte da cobertura regional quando disponível.",
      "O atendimento é confirmado pelo WhatsApp.",
      "Informe veículo, origem e destino para agilizar."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Uberlândia faz parte da cobertura?",
        answer: "Sim. A cobertura ampliada inclui Uberlândia conforme a área atendida."
      }
    ]
  },
  {
    slug: "arapora",
    title: "Araporã",
    shortTitle: "Araporã",
    intro: "Araporã faz parte da cobertura regional da Master Guincho com foco em atendimento rápido.",
    routeSummary:
      "Araporã recebe atenção especial porque o acesso rápido faz diferença para quem está parado e precisa de ajuda agora.",
    demand: [
      "Ocorrência urgente com necessidade de resposta curta.",
      "Atendimento em trecho rodoviário ou acesso da cidade.",
      "Contato rápido via WhatsApp com foco em disponibilidade."
    ],
    serviceFit: ["Guincho 24h", "Auto socorro", "Reboque 24h"],
    coverage: [
      "Cidade com atenção especial da operação.",
      "Cobertura com foco em urgência.",
      "Atendimento claro para busca imediata."
    ],
    operationalNotes: [
      "Araporã conta com cobertura dedicada para quem precisa de atendimento rápido na cidade ou na rodovia.",
      "Atendimento sob disponibilidade da operação.",
      "Envie localização e tipo de veículo pelo WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Araporã tem atendimento dedicado?",
        answer: "Sim. A cidade tem cobertura dedicada para quem precisa de atendimento imediato."
      },
      {
        question: "O usuário encontra contato rápido na cidade?",
        answer: "Sim. A prioridade é deixar claro o canal de contato e o contexto da ocorrência."
      }
    ]
  }
];

export function getRoutePage(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
