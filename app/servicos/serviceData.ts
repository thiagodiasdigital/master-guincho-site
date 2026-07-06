export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  definition: string;
  idealFor: string[];
  whenToHire: string[];
  deliverables: string[];
  processSteps: string[];
  coverage: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "guincho-24h",
    title: "Guincho 24h",
    shortTitle: "Guincho",
    summary:
      "Remoção rápida para carros, motos, caminhonetes, vans e utilitários com atendimento 24 horas.",
    intro:
      "Página do guincho 24h da Master Guincho para quem precisa de atendimento imediato em Ituiutaba e região.",
    definition:
      "Guincho 24h é o serviço de retirada e transporte de veículos com acionamento rápido, usado em panes, colisões, problemas mecânicos e deslocamentos emergenciais.",
    idealFor: [
      "Motoristas com pane ou bateria descarregada.",
      "Empresas que precisam mover veículos com rapidez.",
      "Ocorrências em rodovia, bairro ou área urbana."
    ],
    whenToHire: [
      "Quando o veículo não pode seguir rodando com segurança.",
      "Quando a ocorrência exige remoção imediata.",
      "Quando o cliente precisa de contato rápido por WhatsApp."
    ],
    deliverables: [
      "Acionamento do guincho com orientação inicial.",
      "Transporte do veículo para o destino combinado.",
      "Atendimento direto e objetivo durante a ocorrência."
    ],
    processSteps: [
      "Recebimento do local e do tipo de veículo.",
      "Confirmação da necessidade e do destino.",
      "Deslocamento da equipe até o ponto informado."
    ],
    coverage: [
      "Atendimento em Ituiutaba e cidades vizinhas.",
      "Cobertura para ocorrências na cidade e na rodovia.",
      "Operação adequada para resposta 24h."
    ],
    faq: [
      {
        question: "O guincho atende carros leves e utilitários?",
        answer:
          "Sim. O serviço foi pensado para carros, utilitários, caminhonetes e outras ocorrências comuns da rotina local."
      },
      {
        question: "Posso chamar o guincho pelo WhatsApp?",
        answer: "Sim. O WhatsApp é o canal mais rápido para acionar a equipe e informar a localização."
      },
      {
        question: "O atendimento é realmente 24h?",
        answer: "Sim. A operação trabalha em regime de 24 horas para ocorrências urgentes e deslocamentos sob demanda."
      }
    ]
  },
  {
    slug: "reboque-24h",
    title: "Reboque 24h",
    shortTitle: "Reboque",
    summary:
      "Transporte de veículos com suporte para pane, sinistro, deslocamento programado e necessidade de retirada segura.",
    intro:
      "Página do reboque 24h para explicar o serviço como solução de transporte seguro para veículos que não podem rodar por conta própria.",
    definition:
      "Reboque é o serviço de transporte de veículo por equipamento adequado, com foco em segurança, preservação do bem e agilidade na retirada.",
    idealFor: [
      "Veículos com falha mecânica ou impossibilidade de rodagem.",
      "Situações de sinistro ou avaria.",
      "Empresas e particulares que precisam de transporte seguro."
    ],
    whenToHire: [
      "Quando o veículo precisa sair do local com urgência.",
      "Quando a segurança exige transporte por reboque.",
      "Quando o cliente quer combinar retirada e destino com antecedência."
    ],
    deliverables: [
      "Retirada do veículo com orientação inicial.",
      "Transporte até oficina, base, residência ou local combinado.",
      "Atendimento com foco em preservação e previsibilidade."
    ],
    processSteps: [
      "Coleta das informações do veículo e do local.",
      "Avaliação da melhor forma de remoção.",
      "Execução do transporte até o destino acordado."
    ],
    coverage: [
      "Ideal para cobertura regional e deslocamentos entre cidades.",
      "Pode ser usado em resposta a pane, sinistro e deslocamento.",
      "Compatível com demandas urbanas e rodoviárias."
    ],
    faq: [
      {
        question: "Reboque é o mesmo que guincho?",
        answer: "Na prática, os dois serviços se complementam. Aqui o foco é a remoção e o transporte seguro do veículo."
      },
      {
        question: "O reboque serve para sinistro?",
        answer: "Sim. É uma das aplicações mais comuns quando o veículo não pode seguir por meios próprios."
      },
      {
        question: "A equipe informa o destino antes de sair?",
        answer: "Sim. O ideal é combinar local de entrega e contexto da ocorrência antes do deslocamento."
      }
    ]
  },
  {
    slug: "auto-socorro",
    title: "Auto socorro",
    shortTitle: "Socorro",
    summary:
      "Assistência emergencial na estrada e na cidade para reduzir tempo de espera e resolver a ocorrência com rapidez.",
    intro:
      "Página de auto socorro para quem ficou parado e precisa de ajuda imediata antes de pensar no restante do deslocamento.",
    definition:
      "Auto socorro é o atendimento emergencial que prioriza a pronta resposta ao cliente, com foco em orientação, retirada ou encaminhamento adequado.",
    idealFor: [
      "Motoristas em emergência na estrada.",
      "Ocorrências em horário noturno ou fim de semana.",
      "Clientes que precisam de orientação imediata."
    ],
    whenToHire: [
      "Quando a ocorrência não pode esperar.",
      "Quando o cliente precisa confirmar a melhor saída em poucos minutos.",
      "Quando a prioridade é reduzir o tempo parado."
    ],
    deliverables: [
      "Orientação inicial no WhatsApp.",
      "Acionamento da equipe para atendimento.",
      "Encaminhamento seguro para o próximo passo."
    ],
    processSteps: [
      "Recebimento da localização e do tipo de problema.",
      "Levantamento rápido da necessidade.",
      "Acionamento da equipe com foco em resposta curta."
    ],
    coverage: [
      "Rodovias, acessos urbanos e pontos intermediários da região.",
      "Cobertura preparada para urgências em movimento.",
      "Apoio para ocorrências ligadas a veículos leves e maiores."
    ],
    faq: [
      {
        question: "Auto socorro serve para pane seca também?",
        answer: "Sim. O serviço pode ajudar em pane, bateria, imobilização e outras urgências que exigem resposta rápida."
      },
      {
        question: "Esse serviço funciona para empresa e particular?",
        answer: "Sim. A prioridade é atendimento emergencial e resposta imediata."
      },
      {
        question: "O foco aqui é a rapidez?",
        answer: "Sim. O texto destaca atendimento emergencial e contato rápido."
      }
    ]
  },
  {
    slug: "taxi-24h",
    title: "Táxi 24h",
    shortTitle: "Táxi",
    summary:
      "Transporte de passageiros sob demanda para deslocamentos locais e regionais, com contato rápido e atendimento flexível.",
    intro:
      "Página do táxi 24h da Master Guincho para deslocamentos de passageiros quando houver necessidade.",
    definition:
      "Táxi 24h é o serviço de transporte de passageiros sob demanda, pensado para deslocamentos de curta ou média distância com acionamento rápido.",
    idealFor: [
      "Passageiros que precisam se deslocar com rapidez.",
      "Clientes que buscam alternativa de mobilidade em horário flexível.",
      "Demandas complementares ao atendimento principal."
    ],
    whenToHire: [
      "Quando o cliente precisa sair de um ponto para outro com rapidez.",
      "Quando o deslocamento faz parte da rotina local ou regional.",
      "Quando o contato direto por WhatsApp simplifica a chamada."
    ],
    deliverables: [
      "Contato rápido com a operação.",
      "Confirmação do percurso e da necessidade.",
      "Deslocamento conforme a disponibilidade informada."
    ],
    processSteps: [
      "Recebimento do ponto de embarque e destino.",
      "Confirmação do melhor horário e disponibilidade.",
      "Execução do deslocamento combinado."
    ],
    coverage: [
      "Atendimento local em Ituiutaba e cidades atendidas.",
      "Pode ser usado em deslocamentos urbanos ou regionais.",
      "Ideal para quem quer resolver a chamada direto no WhatsApp."
    ],
    faq: [
      {
        question: "O táxi funciona 24h?",
        answer: "Sim. A operação foi desenhada para atender demandas ao longo do dia e da noite."
      },
      {
        question: "Esse serviço é independente do guincho?",
        answer: "Sim. O táxi é uma oferta complementar para deslocamento de passageiros."
      },
      {
        question: "O contato é rápido pelo WhatsApp?",
        answer: "Sim. Esse é o canal mais prático para combinar ponto de encontro e destino."
      }
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
