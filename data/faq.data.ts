export type FaqTemplate = {
  question: string;
  answer: string;
};

export const faqTemplate: FaqTemplate[] = [
  {
    question: "O atendimento da Master Guincho é 24h?",
    answer:
      "Sim. O atendimento funciona 24 horas para guincho, reboque, auto socorro e táxi."
  },
  {
    question: "Quais veículos vocês atendem?",
    answer:
      "Carros, motos, caminhonetes, vans, caminhões, embarcações, máquinas agrícolas, implementos, cargas especiais, veículos especiais e veículos de colecionadores."
  },
  {
    question: "A Master Guincho atende fora de Ituiutaba?",
    answer:
      "Sim. A cobertura inclui Ituiutaba e região, com cidades vizinhas e rotas como Araporã e Itumbiara."
  },
  {
    question: "O que devo enviar para pedir atendimento?",
    answer:
      "Informe local, tipo de veículo, problema encontrado, destino desejado e o canal de contato preferido."
  },
  {
    question: "O contato pode ser feito por WhatsApp?",
    answer:
      "Sim. O WhatsApp é o canal mais rápido para informar local, veículo, destino e tipo de ocorrência."
  }
];
