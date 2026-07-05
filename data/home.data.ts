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
      title: "Atendimento 24h para quem precisa de ajuda na estrada ou na cidade",
      copy: [
        "A Master Guincho atende ocorrências com agilidade, organização e foco em segurança, conectando o cliente ao canal certo no menor tempo possível.",
        "Guincho, reboque e auto socorro 24h em Ituiutaba e região, com contato rápido pelo WhatsApp."
      ]
    },
    showcase: {
      eyebrow: "Vitrine",
      title: "Vitrine por tipo de veículo e carga",
      description:
        "Páginas individuais para moto, carro, caminhão, embarcação e outros veículos atendidos."
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços com atendimento direto",
      description:
        "A oferta principal fica organizada para facilitar o contato pelo WhatsApp."
    },
    coverage: {
      eyebrow: "Cobertura",
      title: "Áreas atendidas e regiões prioritárias",
      description:
        "Cidades, bairros e rotas atendidas pela Master Guincho em Ituiutaba e região."
    },
    differentiators: {
      eyebrow: "Diferenciais",
      title: "Pontos de valor que ajudam na decisão",
      description:
        "Sinais de confiança, prontidão e cobertura real da operação.",
      items: [
        {
          title: "Atendimento 24h",
          description: "Canal pronto para emergências, de dia ou de noite."
        },
        {
          title: "Resposta rápida",
          description: "Reduz a espera em ocorrências na cidade ou na rodovia."
        },
        {
          title: "Frota adequada",
          description: "Veículos para leves, pesados, especiais e passageiros."
        },
        {
          title: "Cobertura regional",
          description: "Atende Ituiutaba, cidades vizinhas e rotas prioritárias."
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      description:
        "As perguntas e respostas abaixo também alimentam o schema da página e ajudam em AIO.",
      items: faqTemplate
    },
    finalCta: {
      eyebrow: "Contato",
      title: "Precisa de guincho agora?",
      description:
        "Fale no WhatsApp, envie sua localização e confirme o atendimento na sua cidade.",
      primaryLabel: "Chamar guincho agora",
      secondaryLabel: "Ver no Google"
    }
  }
};
