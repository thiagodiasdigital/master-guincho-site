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
      eyebrow: "Apresentacao",
      title: "Atendimento 24h para quem precisa de ajuda na estrada ou na cidade",
      copy: [
        "A Master Guincho atende ocorrencias com agilidade, organizacao e foco em seguranca, conectando o cliente ao canal certo no menor tempo possivel.",
        "O conteudo pode ser ajustado por contexto de cobertura, mas a estrutura visual e de conversao permanece a mesma."
      ]
    },
    showcase: {
      eyebrow: "Vitrine",
      title: "Uma vitrine visual por tipo de veiculo e carga",
      description:
        "Use este espaco para mostrar moto, carro, caminhao, embarcacao e outros cenarios com paginas individuais."
    },
    services: {
      eyebrow: "Servicos",
      title: "Servicos organizados para conversao rapida",
      description:
        "A lista de cards organiza a oferta principal da empresa sem mexer no layout geral da pagina."
    },
    coverage: {
      eyebrow: "Cobertura",
      title: "Areas atendidas e regioes prioritarias",
      description:
        "Este bloco serve para mostrar cidades, bairros, regioes ou qualquer delimitacao geografica importante para SEO local."
    },
    differentiators: {
      eyebrow: "Diferenciais",
      title: "Pontos de valor que ajudam na decisao",
      description:
        "A lista abaixo destaca sinais de confianca, prontidao e cobertura real da operacao.",
      items: [
        {
          title: "Atendimento 24h",
          description: "Canal pronto para emergencias, de dia ou de noite."
        },
        {
          title: "Resposta rapida",
          description: "Reduz a espera em ocorrencias na cidade ou na rodovia."
        },
        {
          title: "Frota adequada",
          description: "Veiculos para leves, pesados, especiais e passageiros."
        },
        {
          title: "Cobertura regional",
          description: "Atende Ituiutaba, cidades vizinhas e rotas prioritarias."
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      description:
        "As perguntas e respostas abaixo tambem alimentam o schema da pagina e ajudam em AIO.",
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
