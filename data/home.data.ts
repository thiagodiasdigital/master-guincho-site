import { faqTemplate } from "./faq.data";

export type HomeDataTemplate = {
  sections: {
    intro: {
      eyebrow: string;
      title: string;
      copy: string[];
    };
    showcase: {
      eyebrow: string;
      title: string;
      description: string;
    };
    services: {
      eyebrow: string;
      title: string;
      description: string;
    };
    coverage: {
      eyebrow: string;
      title: string;
      description: string;
    };
    differentiators: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    faq: {
      eyebrow: string;
      title: string;
      description: string;
      items: typeof faqTemplate;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      description: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
};

export const homeDataTemplate: HomeDataTemplate = {
  sections: {
    intro: {
      eyebrow: "Apresentação",
      title: "Ajuda 24h para quem ficou parado na cidade ou na estrada",
      copy: [
        "A Master Guincho atende com orientação direta, cuidado no transporte e apoio para quem precisa sair de uma pane, colisão ou imprevisto sem complicação.",
        "Guincho, reboque, auto socorro e táxi 24h em Ituiutaba e região, com contato rápido pelo WhatsApp."
      ]
    },
    showcase: {
      eyebrow: "Vitrine",
      title: "Vitrine por tipo de veículo e carga",
      description:
        "Moto, carro, caminhão, utilitário, máquina agrícola, embarcação e outras demandas atendidas pela operação."
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços com atendimento direto",
      description:
        "Escolha o atendimento mais adequado para o seu caso e chame a Master Guincho pelo WhatsApp."
    },
    coverage: {
      eyebrow: "Cobertura",
      title: "Áreas atendidas e regiões prioritárias",
      description:
        "Ituiutaba é a base da operação e o atendimento alcança cidades vizinhas, rotas regionais e trechos de rodovia conforme a ocorrência."
    },
    differentiators: {
      eyebrow: "Diferenciais",
      title: "Pontos de valor que ajudam na decisão",
      description: "Sinais de confiança para quem precisa resolver a ocorrência sem perda de tempo.",
      items: [
        {
          title: "Atendimento 24h",
          description: "Disponibilidade para atender urgências a qualquer hora."
        },
        {
          title: "Resposta rápida",
          description: "Contato direto para reduzir o tempo parado."
        },
        {
          title: "Frota adequada",
          description: "Estrutura para carros, motos, pesados, especiais e passageiros."
        },
        {
          title: "Cobertura regional",
          description: "Atende Ituiutaba, cidades vizinhas e rotas regionais."
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      description: "Respostas diretas para dúvidas comuns sobre atendimento, cobertura e acionamento.",
      items: faqTemplate
    },
    finalCta: {
      eyebrow: "Contato",
      title: "Precisa de guincho agora?",
      description: "Envie sua localização no WhatsApp e confirme o atendimento para o seu caso.",
      primaryLabel: "Chamar guincho agora",
      secondaryLabel: "Ver no Google"
    }
  }
};
