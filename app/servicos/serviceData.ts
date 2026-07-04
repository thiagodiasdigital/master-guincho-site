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
      "Remocao rapida para carros, motos, caminhonetes, vans e utilitarios com atendimento 24 horas.",
    intro:
      "Pagina para explicar o guincho como servico principal da Master Guincho, com foco em resposta imediata, seguranca e orientacao clara para o cliente parado na estrada ou na cidade.",
    definition:
      "Guincho 24h e o servico de retirada e transporte de veiculos com acionamento rapido, usado em panes, colisões, problemas mecanicos e deslocamentos emergenciais.",
    idealFor: [
      "Motoristas com pane ou bateria descarregada.",
      "Empresas que precisam mover veiculos com rapidez.",
      "Ocorrencias em rodovia, bairro ou area urbana."
    ],
    whenToHire: [
      "Quando o veiculo nao pode seguir rodando com seguranca.",
      "Quando a ocorrencia exige remocao imediata.",
      "Quando o cliente precisa de contato rapido por WhatsApp."
    ],
    deliverables: [
      "Acionamento do guincho com orientacao inicial.",
      "Transporte do veiculo para o destino combinado.",
      "Atendimento direto e objetivo durante a ocorrencia."
    ],
    processSteps: [
      "Recebimento do local e do tipo de veiculo.",
      "Confirmacao da necessidade e do destino.",
      "Deslocamento da equipe ate o ponto informado."
    ],
    coverage: [
      "Atendimento em Ituiutaba e cidades vizinhas.",
      "Cobertura para ocorrencias na cidade e na rodovia.",
      "Operacao adequada para resposta 24h."
    ],
    faq: [
      {
        question: "O guincho atende carros leves e utilitarios?",
        answer: "Sim. O servico foi pensado para carros, utilitarios, caminhonetes e outras ocorrencias comuns da rotina local."
      },
      {
        question: "Posso chamar o guincho pelo WhatsApp?",
        answer: "Sim. O WhatsApp e o canal mais rapido para acionar a equipe e informar a localizacao."
      },
      {
        question: "O atendimento e realmente 24h?",
        answer: "Sim. A operacao trabalha em regime de 24 horas para ocorrencias urgentes e deslocamentos sob demanda."
      }
    ]
  },
  {
    slug: "reboque-24h",
    title: "Reboque 24h",
    shortTitle: "Reboque",
    summary:
      "Transporte de veiculos com suporte para pane, sinistro, deslocamento programado e necessidade de retirada segura.",
    intro:
      "Página dedicada ao reboque como solução de transporte seguro para veículos que precisam ser deslocados sem rodar por conta própria.",
    definition:
      "Reboque e o servico de transporte de veiculo por equipamento adequado, com foco em seguranca, preservacao do bem e agilidade na retirada.",
    idealFor: [
      "Veiculos com falha mecanica ou impossibilidade de rodagem.",
      "Situações de sinistro ou avaria.",
      "Empresas e particulares que precisam de transporte seguro."
    ],
    whenToHire: [
      "Quando o veiculo precisa sair do local com urgencia.",
      "Quando a seguranca exige transporte por reboque.",
      "Quando o cliente quer combinar retirada e destino com antecedencia."
    ],
    deliverables: [
      "Retirada do veiculo com orientacao inicial.",
      "Transporte ate oficina, base, residencia ou local combinado.",
      "Atendimento com foco em preservacao e previsibilidade."
    ],
    processSteps: [
      "Coleta das informacoes do veiculo e do local.",
      "Avaliacao da melhor forma de remocao.",
      "Execucao do transporte ate o destino acordado."
    ],
    coverage: [
      "Ideal para cobertura regional e deslocamentos entre cidades.",
      "Pode ser usado em resposta a pane, sinistro e deslocamento.",
      "Compatível com demandas urbanas e rodoviarias."
    ],
    faq: [
      {
        question: "Reboque e o mesmo que guincho?",
        answer: "Na pratica, os dois servicos se complementam. Aqui o foco e a remocao e o transporte seguro do veiculo."
      },
      {
        question: "O reboque serve para sinistro?",
        answer: "Sim. E uma das aplicacoes mais comuns quando o veiculo nao pode seguir por meios proprios."
      },
      {
        question: "A equipe informa o destino antes de sair?",
        answer: "Sim. O ideal e combinar local de entrega e contexto da ocorrencia antes do deslocamento."
      }
    ]
  },
  {
    slug: "auto-socorro",
    title: "Auto socorro",
    shortTitle: "Socorro",
    summary:
      "Assistencia emergencial na estrada e na cidade para reduzir tempo de espera e resolver a ocorrencia com rapidez.",
    intro:
      "Pagina voltada ao auto socorro como resposta imediata para quem ficou parado e precisa de ajuda antes de pensar no restante do deslocamento.",
    definition:
      "Auto socorro e o atendimento emergencial que prioriza a pronta resposta ao cliente, com foco em orientacao, retirada ou encaminhamento adequado.",
    idealFor: [
      "Motoristas em emergencia na estrada.",
      "Ocorrencias em horario noturno ou fim de semana.",
      "Clientes que precisam de orientacao imediata."
    ],
    whenToHire: [
      "Quando a ocorrencia nao pode esperar.",
      "Quando o cliente precisa confirmar a melhor saida em poucos minutos.",
      "Quando a prioridade e reduzir o tempo parado."
    ],
    deliverables: [
      "Orientacao inicial no WhatsApp.",
      "Acionamento da equipe para atendimento.",
      "Encaminhamento seguro para o proximo passo."
    ],
    processSteps: [
      "Recebimento da localizacao e do tipo de problema.",
      "Levantamento rapido da necessidade.",
      "Acionamento da equipe com foco em resposta curta."
    ],
    coverage: [
      "Rodovias, acessos urbanos e pontos intermediarios da regiao.",
      "Cobertura preparada para urgencias em movimento.",
      "Apoio para ocorrencias ligadas a veículos leves e maiores."
    ],
    faq: [
      {
        question: "Auto socorro e para pane seca tambem?",
        answer: "Sim. O servico pode ajudar em pane, bateria, imobilizacao e outras urgencias que exigem resposta rapida."
      },
      {
        question: "Esse servico funciona para empresa e particular?",
        answer: "Sim. O formato atende tanto demandas individuais quanto operacoes de empresa e frota."
      },
      {
        question: "O foco aqui e a rapidez?",
        answer: "Sim. A pagina existe para deixar claro que a prioridade e atendimento emergencial e resposta imediata."
      }
    ]
  },
  {
    slug: "taxi-24h",
    title: "Taxi 24h",
    shortTitle: "Taxi",
    summary:
      "Transporte de passageiros sob demanda para deslocamentos locais e regionais, com contato rapido e atendimento flexivel.",
    intro:
      "Página dedicada a posicionar o táxi como um serviço complementar da operação, voltado para deslocamentos de passageiros quando houver necessidade.",
    definition:
      "Taxi 24h e o servico de transporte de passageiros sob demanda, pensado para deslocamentos de curta ou media distancia com acionamento rapido.",
    idealFor: [
      "Passageiros que precisam se deslocar com rapidez.",
      "Clientes que buscam alternativa de mobilidade em horario flexivel.",
      "Demandas complementares ao atendimento principal."
    ],
    whenToHire: [
      "Quando o cliente precisa sair de um ponto para outro com rapidez.",
      "Quando o deslocamento faz parte da rotina local ou regional.",
      "Quando o contato direto por WhatsApp simplifica a chamada."
    ],
    deliverables: [
      "Contato rapido com a operacao.",
      "Confirmação do percurso e da necessidade.",
      "Deslocamento conforme a disponibilidade informada."
    ],
    processSteps: [
      "Recebimento do ponto de embarque e destino.",
      "Confirmação do melhor horario e disponibilidade.",
      "Execucao do deslocamento combinado."
    ],
    coverage: [
      "Atendimento local em Ituiutaba e cidades atendidas.",
      "Pode ser usado em deslocamentos urbanos ou regionais.",
      "Ideal para quem quer resolver a chamada direto no WhatsApp."
    ],
    faq: [
      {
        question: "O taxi funciona 24h?",
        answer: "Sim. A operacao foi desenhada para atender demandas ao longo do dia e da noite."
      },
      {
        question: "Esse servico e independente do guincho?",
        answer: "Sim. O taxi e uma oferta complementar para deslocamento de passageiros."
      },
      {
        question: "O contato e rapido pelo WhatsApp?",
        answer: "Sim. Esse e o canal mais pratico para combinar ponto de encontro e destino."
      }
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
