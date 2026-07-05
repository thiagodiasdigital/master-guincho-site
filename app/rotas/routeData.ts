export type RoutePage = {
  slug: string;
  title: string;
  shortTitle: string;
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
    intro: "Página principal da cobertura e da leitura local da Master Guincho.",
    routeSummary:
      "Ituiutaba é a cidade-base da operação, o que permite orientar o visitante de forma rápida quando ele busca um guincho ou auto socorro com resposta imediata.",
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
      "Esta página é a referência principal para a cobertura local.",
      "Ideal para visitas que chegam por busca de marca ou cidade.",
      "Pode ser ampliada com provas e fotos locais."
    ],
    relatedServices: baseServices.slice(0, 2),
    references: [],
    faq: [
      {
        question: "Ituiutaba e a cidade-base da operacao?",
        answer: "Sim. A operação parte de Ituiutaba e a página serve como ponto central da cobertura local."
      },
      {
        question: "A página pode receber dados de tempo de resposta?",
        answer: "Pode, desde que a informacao seja confirmada e mantida atualizada."
      }
    ]
  },
  {
    slug: "capinopolis",
    title: "Capinopolis",
    shortTitle: "Capinopolis",
    intro: "Cobertura regional com resposta direta para ocorrencias urbanas e rodoviarias.",
    routeSummary:
      "Capinopolis entra como cidade de apoio na estrategia de cobertura, servindo para quem precisa de atendimento rapido sem perder o contexto local.",
    demand: [
      "Veiculo parado na cidade.",
      "Remocao por pane ou sinistro.",
      "Atendimento para demandas urgentes."
    ],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: [
      "Cidade atendida pela cobertura regional.",
      "Pode representar busca por cidade + guincho.",
      "Boa para leads que precisam de resposta rapida."
    ],
    operationalNotes: [
      "Use linguagem objetiva e de contato rapido.",
      "Mantenha a página curta e focada.",
      "Conecte sempre ao WhatsApp."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Capinopolis esta dentro da cobertura?",
        answer: "Sim. A cidade faz parte da area atendida da Master Guincho."
      },
      {
        question: "A página deve priorizar urgência?",
        answer: "Sim. Para auto socorro, o foco e reduzir o tempo ate o contato."
      }
    ]
  },
  {
    slug: "gurinhata",
    title: "Gurinhata",
    shortTitle: "Gurinhata",
    intro: "Pagina para segmentar a cobertura em uma cidade de apoio da regiao.",
    routeSummary:
      "Gurinhatá funciona como página de cobertura local para orientar o visitante que precisa de guincho, reboque ou auto socorro com rapidez.",
    demand: [
      "Atendimento emergencial na cidade.",
      "Retirada de veiculo sem rodar.",
      "Contato rapido por WhatsApp."
    ],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: [
      "Cidade dentro do raio de atendimento.",
      "Cobertura voltada a deslocamento e retirada.",
      "Contexto local para SEO e GEO."
    ],
    operationalNotes: [
      "Evite texto genérico demais.",
      "Mantenha a página com CTA forte.",
      "Conecte com a página de guincho principal."
    ],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [
      {
        question: "Essa página serve para busca local?",
        answer: "Sim. Ela foi pensada para ser encontrada por quem procura atendimento na cidade."
      }
    ]
  },
  {
    slug: "canapolis",
    title: "Canapolis",
    shortTitle: "Canapolis",
    intro: "Cobertura regional para demandas locais e deslocamentos programados.",
    routeSummary:
      "Canapolis entra como cidade atendida no eixo regional, reforcando a cobertura da Master Guincho para quem precisa de ajuda rapida.",
    demand: [
      "Veiculo imobilizado.",
      "Atendimento em horario flexivel.",
      "Retirada para oficina ou destino combinado."
    ],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida na regiao", "Cobertura operacional regional", "Resposta via WhatsApp"],
    operationalNotes: ["Pagina curta e objetiva.", "Boa para trafego geo.", "Use prova visual da frota quando houver."],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [{ question: "Canapolis faz parte da cobertura?", answer: "Sim, a cidade esta incluida na area de atendimento." }]
  },
  {
    slug: "ipiacu",
    title: "Ipiacu",
    shortTitle: "Ipiacu",
    intro: "Pagina local para atender buscas por guincho e socorro na cidade.",
    routeSummary:
      "Ipiacu representa um ponto de cobertura util para captar demanda local e conectar a operacao com o contato mais rapido possivel.",
    demand: ["Pane na cidade", "Remocao de veiculo", "Socorro sob demanda"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cobertura regional", "Atendimento local", "Conexao com cidades vizinhas"],
    operationalNotes: ["Mantenha a pagina enxuta.", "Priorize CTA e telefone.", "Use linguagem direta."],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [{ question: "Ipiacu e atendida?", answer: "Sim. A cidade entra na cobertura regional da Master Guincho." }]
  },
  {
    slug: "cachoeira-dourada-mg",
    title: "Cachoeira Dourada MG",
    shortTitle: "Cachoeira Dourada",
    intro: "Pagina de cobertura do lado mineiro para busca local e acionamento rapido.",
    routeSummary:
      "Cachoeira Dourada MG ajuda a distribuir melhor a presenca geo da Master Guincho na regiao e reforca a leitura por cidade.",
    demand: ["Atendimento local", "Remocao urgente", "Apoio rodoviario"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade mineira atendida", "Cobertura regional", "Resposta pelo WhatsApp"],
    operationalNotes: ["Boa para consultas de proximidade.", "Pode receber fotos de operacao.", "Use sempre o nome sem abreviar em excesso."],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [{ question: "Existe cobertura em MG?", answer: "Sim. Cachoeira Dourada MG faz parte da cobertura informada." }]
  },
  {
    slug: "santa-vitoria",
    title: "Santa Vitoria",
    shortTitle: "Santa Vitoria",
    intro: "Pagina util para posicionar a cobertura em outra cidade do entorno.",
    routeSummary:
      "Santa Vitoria amplia a base geo do site, ajudando a cobrir consultas de proximidade e reforcando a autoridade local.",
    demand: ["Veiculo parado", "Solicitacao rapida", "Retirada segura"],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida", "Cobertura regional", "Atendimento sob demanda"],
    operationalNotes: ["Texto direto e sem exagero.", "Foque em mobilidade e resposta.", "Conecte com o WhatsApp."],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [{ question: "Santa Vitoria esta na cobertura?", answer: "Sim. A cidade integra a lista de cobertura regional." }]
  },
  {
    slug: "monte-alegre-de-minas",
    title: "Monte Alegre de Minas",
    shortTitle: "Monte Alegre",
    intro: "Cobertura para buscas de atendimento rapido na cidade e entorno.",
    routeSummary:
      "A pagina de Monte Alegre de Minas reforca a leitura local do site e ajuda o visitante a encontrar a Master Guincho por cidade.",
    demand: ["Atendimento urgente", "Transporte de veiculo", "Contato por WhatsApp"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cidade atendida", "Eixo regional", "Prioridade de resposta"],
    operationalNotes: ["Pode destacar rotas de acesso quando confirmadas.", "Mantenha CTA curto.", "Use schema de pagina local."],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [{ question: "A cidade entra no raio?", answer: "Sim, ela foi incluida na cobertura listada." }]
  },
  {
    slug: "campina-verde",
    title: "Campina Verde",
    shortTitle: "Campina Verde",
    intro: "Cidade de cobertura para demandas locais e regionais.",
    routeSummary:
      "Campina Verde amplia a presenca da Master Guincho em buscas geo e ajuda a conectar a oferta principal com a cidade.",
    demand: ["Guincho urgente", "Reboque programado", "Socorro em estrada"],
    serviceFit: ["Guincho 24h", "Reboque 24h"],
    coverage: ["Cidade atendida", "Cobertura em demanda", "Resposta via WhatsApp"],
    operationalNotes: ["Use pagina com foco local.", "Adicione fotos se houver.", "Priorize o contato rapido."],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [{ question: "Campina Verde e atendida?", answer: "Sim, dentro da area informada pela operacao." }]
  },
  {
    slug: "cachoeira-dourada-go",
    title: "Cachoeira Dourada GO",
    shortTitle: "Cachoeira GO",
    intro: "Cobertura do lado goiano para reforcar a area atendida.",
    routeSummary:
      "A cidade entra como ponto de cobertura para consultas por localidade e para deixar mais clara a abrangencia regional da Master Guincho.",
    demand: ["Ocorrencia local", "Atendimento rapido", "Deslocamento seguro"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade em GO", "Cobertura regional", "Atendimento sob demanda"],
    operationalNotes: ["Use o nome completo com UF.", "Evite promessas de tempo se nao confirmado.", "Mantenha CTA sempre visivel."],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [{ question: "A cidade goiana esta coberta?", answer: "Sim. Cachoeira Dourada GO foi incluida na cobertura." }]
  },
  {
    slug: "inaciolandia",
    title: "Inaciolandia",
    shortTitle: "Inaciolandia",
    intro: "Pagina regional para captacao local e atendimento de urgencia.",
    routeSummary:
      "Inaciolandia serve para reforcar a capilaridade geo da Master Guincho e dar saida util para buscas por cidade.",
    demand: ["Guincho local", "Socorro rapido", "Transporte para destino combinado"],
    serviceFit: ["Auto socorro", "Guincho 24h"],
    coverage: ["Cidade atendida", "Cobertura regional", "Resposta direta"],
    operationalNotes: ["Boa pagina para buscas de proximidade.", "Use texto curto e objetivo.", "Mantenha o CTA para WhatsApp."],
    relatedServices: [baseServices[2], baseServices[0]],
    references: [],
    faq: [{ question: "Inaciolandia esta na cobertura?", answer: "Sim. Ela integra a lista de cidades atendidas." }]
  },
  {
    slug: "itumbiara",
    title: "Itumbiara",
    shortTitle: "Itumbiara",
    intro: "Cidade estrategica para cobertura regional e busca por socorro rapido.",
    routeSummary:
      "Itumbiara tem peso importante na cobertura regional e ajuda a distribuir a autoridade do site em uma cidade relevante do entorno.",
    demand: ["Atendimento urgente", "Remocao segura", "Guincho para ida e volta"],
    serviceFit: ["Guincho 24h", "Reboque 24h", "Auto socorro"],
    coverage: ["Cidade atendida", "Area estrategica", "Conexao regional"],
    operationalNotes: ["Pode receber interlink com Arapora.", "Use linguagem de cobertura real.", "Mantenha a pagina atualizada."],
    relatedServices: [baseServices[0], baseServices[1]],
    references: [],
    faq: [{ question: "Itumbiara esta coberta?", answer: "Sim. A cidade faz parte da cobertura regional da operacao." }]
  },
  {
    slug: "uberlandia",
    title: "Uberlandia",
    shortTitle: "Uberlandia",
    intro: "Pagina de apoio para ampliar a cobertura geograficamente e captar buscas por cidade.",
    routeSummary:
      "Uberlandia entra como cidade de cobertura ampliada, importante para busca local e para reforcar a autoridade regional da Master Guincho.",
    demand: ["Transporte de veiculo", "Atendimento sob demanda", "Socorro na cidade ou rodovia"],
    serviceFit: ["Guincho 24h", "Auto socorro"],
    coverage: ["Cidade atendida", "Cobertura expandida", "Acionamento rapido"],
    operationalNotes: ["Mantenha a pagina consistente com a cobertura real.", "Evite informações nao confirmadas.", "Use CTA forte."],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [{ question: "Uberlandia faz parte da cobertura?", answer: "Sim. A pagina foi criada para representar a cobertura ampliada." }]
  },
  {
    slug: "arapora",
    title: "Arapora",
    shortTitle: "Arapora",
    intro: "Pagina de prioridade geo para resposta imediata e contexto de rodovia.",
    routeSummary:
      "Arapora recebe destaque especial porque a leitura local depende de hiperlocalismo, resposta imediata e contexto de acesso rapido para quem esta parado e precisa de ajuda agora.",
    demand: [
      "Ocorrencia urgente com necessidade de resposta curta.",
      "Atendimento em trecho rodoviario ou acesso da cidade.",
      "Contato rapido via WhatsApp com foco em disponibilidade."
    ],
    serviceFit: ["Guincho 24h", "Auto socorro", "Reboque 24h"],
    coverage: [
      "Cidade de prioridade geo.",
      "Cobertura com foco em urgencia.",
      "Pagina pensada para busca imediata."
    ],
    operationalNotes: [
      "Mantenha esta pagina mais forte do que as demais.",
      "Inclua provas, fotos e sinais de operação quando possivel.",
      "Se houver tempo de resposta real confirmado, ele pode ser citado."
    ],
    relatedServices: [baseServices[0], baseServices[2]],
    references: [],
    faq: [
      {
        question: "Arapora tem pagina propria por prioridade geo?",
        answer: "Sim. A pagina foi pensada para receber destaque por causa da intencao de busca imediata."
      },
      {
        question: "Essa pagina deve ser curta e direta?",
        answer: "Sim. Em contexto de urgencia, o usuario precisa encontrar contato e resposta sem ruído."
      }
    ]
  }
];

export function getRoutePage(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
