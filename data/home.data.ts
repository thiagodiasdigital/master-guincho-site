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
        "O site foi preparado para apresentar cobertura, serviços e contato de forma clara, sem ruído para o cliente."
      ]
    },
    showcase: {
      eyebrow: "Vitrine",
      title: "Uma vitrine visual por tipo de veículo e carga",
      description:
        "Espaço para mostrar moto, carro, caminhão, embarcação e outros cenários com páginas individuais."
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços organizados para conversão rápida",
      description:
        "A lista de cards organiza a oferta principal da empresa sem mexer no layout geral da página."
    },
    coverage: {
      eyebrow: "Cobertura",
      title: "Áreas atendidas e regiões prioritárias",
      description:
        "Este bloco serve para mostrar cidades, bairros, regiões ou qualquer delimitação geográfica importante para SEO local."
    },
    differentiators: {
      eyebrow: "Diferenciais",
      title: "Pontos de valor que ajudam na decisão",
      description:
        "A lista abaixo destaca sinais de confiança, prontidão e cobertura real da operação.",
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
        "Use este fechamento para levar o visitante direto ao WhatsApp ou para consultar a cobertura.",
      primaryLabel: "Chamar no WhatsApp",
      secondaryLabel: "Ver no Google"
    }
  }
};
