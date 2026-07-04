export type VitrinePage = {
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  summary: string;
  intro: string;
  definition: string;
  image: string;
  alt: string;
  idealFor: string[];
  whenToHire: string[];
  benefits: string[];
  coverage: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: Array<{
    label: string;
    href: string;
  }>;
};

const sharedServices = [
  { label: "Guincho 24h", href: "/servicos/guincho-24h/" },
  { label: "Reboque 24h", href: "/servicos/reboque-24h/" },
  { label: "Auto socorro", href: "/servicos/auto-socorro/" }
];

function buildVitrinePage(page: VitrinePage) {
  return page;
}

export const vitrinePages: VitrinePage[] = [
  buildVitrinePage({
    slug: "moto-guincho",
    title: "Guincho para Moto",
    shortTitle: "Moto Guincho",
    keyword: "guincho para moto",
    summary: "Remocao segura de moto com guincho, reboque e auto socorro 24h.",
    intro:
      "Pagina dedicada a quem precisa de guincho para moto com resposta rapida, transporte seguro e orientacao direta pelo WhatsApp.",
    definition:
      "Guincho para moto e o servico de remocao e transporte de motocicletas em ocorrencias de pane, queda, sinistro ou impossibilidade de seguir rodando.",
    image: "/images/master-guincho-moto-guincho.png",
    alt: "Guincho para moto da Master Guincho",
    idealFor: [
      "Moto parada por pane mecanica ou eletrica.",
      "Moto envolvida em sinistro ou queda.",
      "Cliente que precisa de reboque rapido e seguro."
    ],
    whenToHire: [
      "Quando a moto nao pode seguir rodando com seguranca.",
      "Quando o cliente precisa de auto socorro imediato.",
      "Quando o destino precisa ser combinado antes da retirada."
    ],
    benefits: [
      "Atendimento 24h com resposta direta.",
      "Transporte com foco em preservacao do veiculo.",
      "Acionamento simples via WhatsApp."
    ],
    coverage: [
      "Ituiutaba e cidades atendidas da regiao.",
      "Ocorrencias urbanas, rodoviarias e de acesso rapido.",
      "Cobertura alinhada ao SEO local do site."
    ],
    faq: [
      {
        question: "O guincho para moto atende emergencias 24h?",
        answer:
          "Sim. A proposta da pagina e deixar claro que a operacao pode atender chamadas urgentes durante o dia e a noite."
      },
      {
        question: "E possivel usar reboque para moto tambem?",
        answer:
          "Sim. A pagina fala de guincho, reboque e auto socorro como termos complementares da mesma necessidade."
      },
      {
        question: "A moto pode ser levada para oficina ou casa?",
        answer: "Sim. O destino e combinado no atendimento para organizar a remocao com previsibilidade."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "carro-guincho",
    title: "Guincho para Carro",
    shortTitle: "Carro Guincho",
    keyword: "guincho para carro",
    summary: "Reboque e auto socorro para carro com atendimento rapido e seguro.",
    intro:
      "Pagina criada para quem busca guincho para carro e quer uma resposta objetiva, com foco em seguranca, agilidade e contato imediato.",
    definition:
      "Guincho para carro e o servico de remocao e transporte de automoveis quando ha pane, colisao, problema mecanico ou necessidade de deslocamento sem rodar.",
    image: "/images/master-guincho-carro-guincho.png",
    alt: "Guincho para carro da Master Guincho",
    idealFor: [
      "Carro parado em rua, avenida ou rodovia.",
      "Motorista que precisa de reboque de carro sem atraso.",
      "Situacoes em que o auto socorro reduz a espera."
    ],
    whenToHire: [
      "Quando o carro nao liga ou nao pode trafegar.",
      "Quando a remocao precisa ser feita com cuidado.",
      "Quando a chamada deve ser resolvida pelo WhatsApp."
    ],
    benefits: [
      "Comunicaçao direta e simples.",
      "Atendimento para cidade e estrada.",
      "Conteudo otimizado para SEO e AIO."
    ],
    coverage: [
      "Cobertura em Ituiutaba e regiao.",
      "Atendimento para bairros, centro e rodovias.",
      "Pagina pensada para busca local e conversao."
    ],
    faq: [
      {
        question: "Guincho para carro e reboque de carro sao o mesmo servico?",
        answer:
          "Eles se complementam. Na pagina, os dois termos aparecem para capturar a busca do cliente com mais precisão."
      },
      {
        question: "O atendimento e 24 horas?",
        answer: "Sim. A estrutura do site posiciona a Master Guincho como atendimento 24h."
      },
      {
        question: "O carro pode ir para oficina?",
        answer: "Sim. O destino e alinhado no contato para deixar a remocao clara desde o inicio."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "caminhao-guincho",
    title: "Guincho para Caminhao",
    shortTitle: "Caminhao Guincho",
    keyword: "guincho para caminhão",
    summary: "Guincho e reboque para caminhao com foco em peso, suporte e seguranca.",
    intro:
      "Pagina voltada ao guincho para caminhao, para capturar demanda de veiculos pesados com linguagem clara e proximidade regional.",
    definition:
      "Guincho para caminhao e o servico de remocao para veiculos de maior porte, utilizado em panes, sinistros, deslocamentos e apoio operacional.",
    image: "/images/master-guincho-caminhao-guincho.png",
    alt: "Guincho para caminhao da Master Guincho",
    idealFor: [
      "Caminhao parado em rota ou area urbana.",
      "Ocorrencias que exigem reboque para pesados.",
      "Empresas que precisam de resposta rapida."
    ],
    whenToHire: [
      "Quando o caminhao nao pode seguir viagem.",
      "Quando a seguranca exige remocao controlada.",
      "Quando o cliente precisa de orientacao imediata."
    ],
    benefits: [
      "Foco em transporte seguro de maior porte.",
      "Posicionamento forte para SEO local.",
      "CTA direto para contato rapido."
    ],
    coverage: [
      "Atendimento em Ituiutaba e cidades do entorno.",
      "Cobertura para rotas regionais e trechos estrategicos.",
      "Pagina preparada para intencao de busca urgente."
    ],
    faq: [
      {
        question: "Existe guincho para caminhao com atendimento regional?",
        answer: "Sim. A pagina foi escrita para representar demanda local e regional."
      },
      {
        question: "O servico pode atender pesados e carga?",
        answer: "Sim. O conteudo conecta caminhão, reboque e contexto de carga pesada."
      },
      {
        question: "O contato e feito pelo WhatsApp?",
        answer: "Sim. Esse e o canal principal para acelerar a resposta."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "caminhonete-guincho",
    title: "Guincho para Caminhonete",
    shortTitle: "Caminhonete Guincho",
    keyword: "guincho para caminhonete",
    summary: "Remocao de caminhonete com guincho e auto socorro para urgencias.",
    intro:
      "Pagina para captar buscas de guincho para caminhonete com texto orientado a resposta rapida, confianca e cobertura regional.",
    definition:
      "Guincho para caminhonete e o atendimento voltado a remover e transportar pickups e veiculos similares com seguranca e previsibilidade.",
    image: "/images/master-guincho-caminhonete-guincho.png",
    alt: "Guincho para caminhonete da Master Guincho",
    idealFor: [
      "Caminhonete imobilizada ou avariada.",
      "Cliente que quer reboque para caminhonete.",
      "Demanda de auto socorro em cidade ou estrada."
    ],
    whenToHire: [
      "Quando a caminhonete nao pode rodar.",
      "Quando o transporte precisa preservar o veiculo.",
      "Quando a ocorrencia exige resposta simples."
    ],
    benefits: [
      "Palavra-chave clara na pagina.",
      "Imagem e texto alinhados ao asset correto.",
      "Boa para SEO, GEO e AIO."
    ],
    coverage: [
      "Cobertura local em Ituiutaba.",
      "Atendimento em cidades vizinhas da regiao.",
      "Acionamento rapido para deslocamento seguro."
    ],
    faq: [
      {
        question: "Guincho para caminhonete atende particular e empresa?",
        answer: "Sim. O conteudo foi pensado para ambos os cenarios."
      },
      {
        question: "A remocao pode ir para oficina?",
        answer: "Sim. O destino e combinado no atendimento."
      },
      {
        question: "A pagina ajuda no SEO local?",
        answer: "Sim. Ela foi estruturada para capturar a busca especifica por caminhonete."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "embarcacao-guincho",
    title: "Guincho para Embarcacao",
    shortTitle: "Embarcacao",
    keyword: "guincho para embarcação",
    summary: "Transporte seguro de barco e embarcacao com reboque adequado.",
    intro:
      "Pagina criada para atender a busca por guincho para embarcacao, reforcando capacidade operacional e contexto de transporte especializado.",
    definition:
      "Guincho para embarcacao e o servico de remocao e transporte de barcos ou similares com suporte adequado ao tipo de carga.",
    image: "/images/master-guincho-barco-guincho.png",
    alt: "Guincho para embarcacao da Master Guincho",
    idealFor: [
      "Barco que precisa de transporte seguro.",
      "Embarcacao em deslocamento especial.",
      "Cliente que busca reboque para barco."
    ],
    whenToHire: [
      "Quando a embarcacao precisa sair do local com cuidado.",
      "Quando o transporte exige planejamento.",
      "Quando a consulta busca termo especializado."
    ],
    benefits: [
      "Amplia o alcance semantico do site.",
      "Usa imagem real ja identificada.",
      "Ajuda a reforcar a autoridade da Vitrine."
    ],
    coverage: [
      "Atendimento regional sob demanda.",
      "Conexao com rotas e cidades atendidas.",
      "Acionamento direto via WhatsApp."
    ],
    faq: [
      {
        question: "A embarcacao pode ser transportada por reboque?",
        answer: "Sim. O texto posiciona o servico como remocao e transporte especializado."
      },
      {
        question: "A pagina e util para busca local?",
        answer: "Sim. Ela reforca a busca por embarcacao e o contexto regional da marca."
      },
      {
        question: "O atendimento e sob demanda?",
        answer: "Sim. O CTA leva o visitante para alinhamento direto com a operacao."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "van-guincho",
    title: "Guincho para Van",
    shortTitle: "Van Guincho",
    keyword: "guincho para van",
    summary: "Guincho para van com contato rapido, remocao segura e 24h.",
    intro:
      "Pagina para quem precisa de guincho para van e quer uma solucao objetiva, com foco em remocao segura e contato rapido.",
    definition:
      "Guincho para van e o servico de transporte de vans e similares quando ha pane, bloqueio de rodagem ou necessidade de deslocamento.",
    image: "/images/master-guincho-van-guincho.png",
    alt: "Guincho para van da Master Guincho",
    idealFor: [
      "Van imobilizada em trajeto urbano ou regional.",
      "Empresa ou familia que precisa de apoio imediato.",
      "Reboque de van com foco em seguranca."
    ],
    whenToHire: [
      "Quando a van nao pode continuar a viagem.",
      "Quando a remocao deve preservar carga e estrutura.",
      "Quando a resposta precisa acontecer em poucos minutos."
    ],
    benefits: [
      "Intencao de busca muito especifica.",
      "Imagem e texto alinhados ao asset correto.",
      "Boa pagina para conversao e GEO."
    ],
    coverage: [
      "Atendimento em Ituiutaba e cidades da regiao.",
      "Cobertura para cidade, estrada e acesso rural.",
      "Pagina pensada para trafego de alta intencao."
    ],
    faq: [
      {
        question: "Guincho para van tambem serve para reboque?",
        answer: "Sim. O texto combina as duas intenções de busca para ampliar a relevancia."
      },
      {
        question: "O atendimento pode ser acionado 24h?",
        answer: "Sim. A operacao do site posiciona atendimento continuo."
      },
      {
        question: "A van pode ir para oficina ou base?",
        answer: "Sim. O destino e combinado no momento da chamada."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "utilitarios-guincho",
    title: "Guincho para Utilitarios",
    shortTitle: "Utilitarios",
    keyword: "guincho para utilitários",
    summary: "Reboque para utilitarios com foco em apoio rapido e seguro.",
    intro:
      "Pagina voltada a buscas por guincho para utilitarios, conectando a necessidade de transporte leve e medio com a operacao da Master Guincho.",
    definition:
      "Guincho para utilitarios e o servico destinado a veiculos de trabalho, pequenos furoes e similares que precisam de remocao ou transporte.",
    image: "/images/master-guincho-utilitarios.png",
    alt: "Guincho para utilitarios da Master Guincho",
    idealFor: [
      "Veiculo de trabalho parado por pane.",
      "Frota leve com necessidade de reboque.",
      "Cliente que busca auto socorro rapido."
    ],
    whenToHire: [
      "Quando o utilitario nao pode seguir operando.",
      "Quando o deslocamento precisa ser seguro.",
      "Quando o cliente quer contato direto sem burocracia."
    ],
    benefits: [
      "Captura uma categoria comum de buscas.",
      "Amplia a cobertura sem perder foco local.",
      "Mantem a linguagem objetiva."
    ],
    coverage: [
      "Atendimento regional e urbano.",
      "Conexao com a pagina de cobertura por cidade.",
      "Acionamento simples por WhatsApp."
    ],
    faq: [
      {
        question: "Utilitarios entram na cobertura?",
        answer: "Sim. A pagina foi escrita para esse tipo de veiculo."
      },
      {
        question: "O servico pode ser chamado em empresa?",
        answer: "Sim. A pagina ajuda a atender empresas e motoristas particulares."
      },
      {
        question: "A pagina usa a palavra-chave correta?",
        answer: "Sim. O foco e capturar a intencao por guincho para utilitarios."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "veiculos-especiais",
    title: "Guincho para Veiculos Especiais",
    shortTitle: "Veiculos Especiais",
    keyword: "guincho para veículos especiais",
    summary: "Guincho para veiculos especiais com operacao sob demanda.",
    intro:
      "Pagina voltada a veiculos especiais, reforcando a capacidade da Master Guincho em lidar com demandas fora do padrao comum.",
    definition:
      "Guincho para veiculos especiais e o servico usado quando o transporte precisa considerar dimensao, acesso, peso ou configuracao fora do usual.",
    image: "/images/master-guincho-veiculos-especiais.png",
    alt: "Guincho para veiculos especiais da Master Guincho",
    idealFor: [
      "Veiculo com necessidade de manuseio diferenciado.",
      "Operacao que exige planejamento antes da remocao.",
      "Demanda que pede reboque fora do padrao."
    ],
    whenToHire: [
      "Quando a categoria do veiculo exige cuidado extra.",
      "Quando a remocao deve ser confirmada antes do deslocamento.",
      "Quando o visitante busca uma solucao especializada."
    ],
    benefits: [
      "Semantica forte para categoria especial.",
      "Boa ponte entre vitrine e oferta principal.",
      "Amplia relevancia para AIO."
    ],
    coverage: [
      "Atendimento regional sob consulta.",
      "Ligacao com rotas e areas atendidas.",
      "Canal unico de resposta e orientacao."
    ],
    faq: [
      {
        question: "Veiculos especiais entram em atendimento?",
        answer: "Sim. A pagina existe justamente para esse segmento."
      },
      {
        question: "A resposta depende de avaliacao previa?",
        answer: "Sim. Para veiculos especiais, a operacao pode confirmar detalhes antes do envio."
      },
      {
        question: "O conteudo ajuda no SEO?",
        answer: "Sim. Ele posiciona a busca por categoria de forma clara."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "cargas-especiais",
    title: "Reboque para Cargas Especiais",
    shortTitle: "Cargas Especiais",
    keyword: "reboque para cargas especiais",
    summary: "Reboque para cargas especiais com foco em transporte e cuidado.",
    intro:
      "Pagina pensada para busca por reboque para cargas especiais, com texto objetivo e leitura comercial clara.",
    definition:
      "Reboque para cargas especiais e o servico de transporte aplicado a volumes ou configuracoes que exigem planejamento e suporte adequado.",
    image: "/images/master-guincho-cargas-especiais.png",
    alt: "Reboque para cargas especiais da Master Guincho",
    idealFor: [
      "Carga que nao pode ser movimentada de forma comum.",
      "Cliente que precisa de apoio logistico e tecnico.",
      "Operacao que depende de reboque seguro."
    ],
    whenToHire: [
      "Quando a carga requer remocao planejada.",
      "Quando o deslocamento deve seguir orientacao tecnica.",
      "Quando a consulta vem com busca de longa cauda."
    ],
    benefits: [
      "Captura a intencao de carga especial.",
      "Complementa a vitrine de pesados e especiais.",
      "Ajuda a malha interna do site."
    ],
    coverage: [
      "Atendimento regional e sob demanda.",
      "Ligacao com cidades atendidas e rotas prioritarias.",
      "Conversa direta para confirmar viabilidade."
    ],
    faq: [
      {
        question: "Reboque para cargas especiais e diferente de guincho comum?",
        answer: "Sim. O posicionamento do texto mostra a necessidade de cuidado e planejamento."
      },
      {
        question: "A pagina pode receber prova visual?",
        answer: "Pode, e isso melhora ainda mais a confianca do visitante."
      },
      {
        question: "O contato principal continua sendo WhatsApp?",
        answer: "Sim. O fluxo foi mantido para conversao rapida."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "maquina-agricola",
    title: "Guincho para Maquina Agricola",
    shortTitle: "Maquina Agricola",
    keyword: "guincho para máquina agrícola",
    summary: "Remocao de maquina agricola com transporte seguro e 24h.",
    intro:
      "Pagina criada para quem precisa de guincho para maquina agricola e quer uma rota clara de contato com a operacao.",
    definition:
      "Guincho para maquina agricola e o servico voltado a transporte e remocao de maquinario rural com foco em suporte e previsibilidade.",
    image: "/images/master-guincho-maquina-agricola.png",
    alt: "Guincho para maquina agricola da Master Guincho",
    idealFor: [
      "Maquina parada em area rural.",
      "Operacao agricola que precisa de reboque.",
      "Cliente que busca transporte com mais controle."
    ],
    whenToHire: [
      "Quando o maquinario precisa sair do local com seguranca.",
      "Quando a estrutura exige apoio tecnico.",
      "Quando a busca combina contexto rural e veiculo especial."
    ],
    benefits: [
      "Muito util para GEO rural.",
      "Amplia o alcance do site em nichos especificos.",
      "Usa o asset ja identificado na pasta."
    ],
    coverage: [
      "Atendimento regional e rural.",
      "Conexao com a area de cobertura da Master Guincho.",
      "Acionamento direto e sem burocracia."
    ],
    faq: [
      {
        question: "A maquina agricola pode ser rebocada?",
        answer: "Sim. A pagina trata o transporte como remocao especializada."
      },
      {
        question: "Existe resposta em area rural?",
        answer: "Sim. O texto foi pensado para captar esse contexto."
      },
      {
        question: "A pagina ajuda na busca local?",
        answer: "Sim. Ela combina palavra-chave especifica e cobertura regional."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "implemento-agricola",
    title: "Guincho para Implemento Agricola",
    shortTitle: "Implemento Agricola",
    keyword: "guincho para implemento agrícola",
    summary: "Reboque para implemento agricola com suporte regional.",
    intro:
      "Pagina dedicada ao guincho para implemento agricola, reforcando nicho, contexto rural e confianca na operacao.",
    definition:
      "Guincho para implemento agricola e o transporte de equipamentos e implementos do campo em situacoes que exigem apoio e remocao segura.",
    image: "/images/master-guincho-implemento-agricola.png",
    alt: "Guincho para implemento agricola da Master Guincho",
    idealFor: [
      "Implemento parado em fazenda ou estrada rural.",
      "Operacao que exige remocao de equipamento.",
      "Demanda de transporte planejado."
    ],
    whenToHire: [
      "Quando o implemento nao pode permanecer no local.",
      "Quando o cliente busca apoio tecnico na remocao.",
      "Quando a demanda pede linguagem de nicho."
    ],
    benefits: [
      "Ajuda a capturar buscas de longa cauda.",
      "Aumenta a relevancia da vitrine agricola.",
      "Mantem o conteudo util e objetivo."
    ],
    coverage: [
      "Atendimento regional e rural.",
      "Ligacao com rotas e cidades atendidas.",
      "Contato direto para confirmar necessidade."
    ],
    faq: [
      {
        question: "A pagina fala de guincho para implemento agricola?",
        answer: "Sim. O termo principal esta presente na estrutura da rota."
      },
      {
        question: "O atendimento pode ser organizado com antecedencia?",
        answer: "Sim. A remocao de implemento costuma se beneficiar de alinhamento previo."
      },
      {
        question: "A pagina serve para SEO GEO?",
        answer: "Sim. Ela foi criada para isso."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "veiculos-colecionadores",
    title: "Guincho para Veiculos de Colecionadores",
    shortTitle: "Colecionadores",
    keyword: "guincho para veículos de colecionadores",
    summary: "Guincho para veiculos de colecionadores com cuidado extra.",
    intro:
      "Pagina voltada a veiculos de colecionadores, com foco em transporte delicado, valor preservado e atendimento sob medida.",
    definition:
      "Guincho para veiculos de colecionadores e o servico de transporte aplicado a carros antigos, raros ou especiais que exigem cuidado elevado.",
    image: "/images/master-guincho-veiculos-colecionadores.png",
    alt: "Guincho para veiculos de colecionadores da Master Guincho",
    idealFor: [
      "Veiculo antigo ou raro.",
      "Transporte com foco em preservacao.",
      "Cliente que prioriza cuidado e planejamento."
    ],
    whenToHire: [
      "Quando o veiculo nao deve rodar por conta propria.",
      "Quando o deslocamento exige atenção redobrada.",
      "Quando a busca vem com forte componente emocional."
    ],
    benefits: [
      "Entra bem em buscas premium.",
      "Diferencia a marca por categoria.",
      "Reforca autoridade e confianca."
    ],
    coverage: [
      "Atendimento regional sob consulta.",
      "Ligacao com rotas e cidades da area.",
      "Contato direto para definir logistica."
    ],
    faq: [
      {
        question: "Veiculos de colecionadores podem ser transportados com cuidado?",
        answer: "Sim. Esse e exatamente o foco da pagina."
      },
      {
        question: "O conteudo ajuda a vender servico premium?",
        answer: "Sim. O texto foi desenhado para intencao de valor e preservacao."
      },
      {
        question: "A imagem usada e a correta?",
        answer: "Sim. O asset foi identificado na pasta raiz do projeto."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "guincho-para-dois-veiculos",
    title: "Guincho para Dois Veiculos",
    shortTitle: "Dois Veiculos",
    keyword: "guincho para dois veículos",
    summary: "Transporte de dois veiculos com guincho e planejamento.",
    intro:
      "Pagina criada para captar a busca por guincho para dois veiculos, com texto objetivo e foco em contexto operacional.",
    definition:
      "Guincho para dois veiculos e o servico que aborda a possibilidade de transportar mais de um veiculo conforme a capacidade e o cenario da operacao.",
    image: "/images/master-guincho-guincho-para-dois-veiculos.png",
    alt: "Guincho para dois veiculos da Master Guincho",
    idealFor: [
      "Ocorrencia com mais de um veiculo.",
      "Operacao planejada com logistica especifica.",
      "Cliente que precisa entender a capacidade do atendimento."
    ],
    whenToHire: [
      "Quando a demanda envolve duas unidades.",
      "Quando o suporte depende de avaliacao previa.",
      "Quando a busca precisa de termo especifico."
    ],
    benefits: [
      "Diferencia a oferta da concorrencia.",
      "Captura consultas mais qualificadas.",
      "Cria ponte entre conteudo e operacao."
    ],
    coverage: [
      "Atendimento regional sob consulta.",
      "Ligacao com a cobertura principal do site.",
      "Contato rapido para validar viabilidade."
    ],
    faq: [
      {
        question: "O servico realmente fala de dois veiculos?",
        answer: "Sim. A pagina foi criada para essa intencao de busca."
      },
      {
        question: "O atendimento depende de avaliacao previa?",
        answer: "Pode depender, sim, conforme o tipo de ocorrencia."
      },
      {
        question: "A pagina pode entrar na vitrine principal?",
        answer: "Sim. Ela faz parte da lista principal de cards e rotas."
      }
    ],
    relatedServices: sharedServices
  }),
  buildVitrinePage({
    slug: "guincho-para-pesados",
    title: "Guincho para Pesados",
    shortTitle: "Pesados",
    keyword: "guincho para pesados",
    summary: "Guincho para pesados com foco em forca, seguranca e suporte.",
    intro:
      "Pagina para posicionar guincho para pesados como uma solucao forte, regional e preparada para demandas de maior porte.",
    definition:
      "Guincho para pesados e o servico de transporte e remocao de veiculos de grande porte com suporte adequado ao peso e ao contexto.",
    image: "/images/master-guincho-guincho-pesados.png",
    alt: "Guincho para pesados da Master Guincho",
    idealFor: [
      "Veiculo pesado em rota ou area urbana.",
      "Demanda que exige estrutura mais robusta.",
      "Cliente que precisa de resposta para pesados."
    ],
    whenToHire: [
      "Quando a operacao envolve porte elevado.",
      "Quando a remocao precisa de planejamento.",
      "Quando a busca ocorre por peso e capacidade."
    ],
    benefits: [
      "Forte aderencia para busca especializada.",
      "Reforca a imagem de capacidade operacional.",
      "Ajuda na organizacao da vitrine por segmento."
    ],
    coverage: [
      "Atendimento regional sob consulta.",
      "Ligacao com rotas e cidades prioritarias.",
      "Contato direto para confirmar viabilidade."
    ],
    faq: [
      {
        question: "Guincho para pesados entra na Vitrine?",
        answer: "Sim. E uma das paginas mais importantes da area."
      },
      {
        question: "A pagina pode ajudar em busca local?",
        answer: "Sim. Ela reforca a intencao por categoria e capacidade."
      },
      {
        question: "O atendimento continua sendo via WhatsApp?",
        answer: "Sim. O contato rapido segue como ponto central da conversao."
      }
    ],
    relatedServices: sharedServices
  })
];

export const vitrineSection = {
  eyebrow: "Vitrine",
  title: "Vitrine por tipo de veiculo e carga",
  description:
    "Cards e paginas individuais para reforcar SEO, GEO e AIO com imagens reais da operacao da Master Guincho."
};

export function getVitrinePage(slug: string) {
  return vitrinePages.find((page) => page.slug === slug);
}
