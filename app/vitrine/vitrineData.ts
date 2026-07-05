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

export const vitrinePages: VitrinePage[] = [
  {
    slug: "moto-guincho",
    title: "Guincho para Moto",
    shortTitle: "Moto Guincho",
    keyword: "guincho para moto",
    summary: "Remoção segura de moto com guincho, reboque e auto socorro 24h.",
    intro: "Página para quem precisa de guincho para moto com resposta rápida em Ituiutaba e região.",
    definition:
      "Guincho para moto é o serviço de remoção e transporte de motocicletas em ocorrências de pane, queda, sinistro ou impossibilidade de seguir rodando.",
    image: "/images/master-guincho-moto-guincho.png",
    alt: "Guincho para moto da Master Guincho",
    idealFor: ["Moto parada por pane mecânica ou elétrica.", "Moto envolvida em sinistro ou queda.", "Cliente que precisa de reboque rápido e seguro."],
    whenToHire: ["Quando a moto não pode seguir rodando com segurança.", "Quando o cliente precisa de auto socorro imediato.", "Quando o destino precisa ser combinado antes da retirada."],
    benefits: ["Atendimento 24h com resposta direta.", "Transporte com foco em preservação do veículo.", "Acionamento simples via WhatsApp."],
    coverage: ["Ituiutaba e cidades atendidas da região.", "Ocorrências urbanas, rodoviárias e de acesso rápido.", "Cobertura alinhada ao SEO local do site."],
    faq: [
      { question: "O guincho para moto atende emergências 24h?", answer: "Sim. A operação pode atender chamadas urgentes durante o dia e a noite." },
      { question: "É possível usar reboque para moto também?", answer: "Sim. A página fala de guincho, reboque e auto socorro como termos complementares." },
      { question: "A moto pode ser levada para oficina ou casa?", answer: "Sim. O destino é combinado no atendimento." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "carro-guincho",
    title: "Guincho para Carro",
    shortTitle: "Carro Guincho",
    keyword: "guincho para carro",
    summary: "Reboque e auto socorro para carro com atendimento rápido e seguro.",
    intro: "Página criada para quem busca guincho para carro e quer uma resposta objetiva com contato imediato.",
    definition:
      "Guincho para carro é o serviço de remoção e transporte de automóveis quando há pane, colisão, problema mecânico ou necessidade de deslocamento sem rodar.",
    image: "/images/master-guincho-carro-guincho.png",
    alt: "Guincho para carro da Master Guincho",
    idealFor: ["Carro parado em rua, avenida ou rodovia.", "Motorista que precisa de reboque de carro sem atraso.", "Situações em que o auto socorro reduz a espera."],
    whenToHire: ["Quando o carro não liga ou não pode trafegar.", "Quando a remoção precisa ser feita com cuidado.", "Quando a chamada deve ser resolvida pelo WhatsApp."],
    benefits: ["Comunicação direta e simples.", "Atendimento para cidade e estrada.", "Conteúdo otimizado para SEO e AIO."],
    coverage: ["Cobertura em Ituiutaba e região.", "Atendimento para bairros, centro e rodovias.", "Página pensada para busca local e conversão."],
    faq: [
      { question: "Guincho para carro e reboque de carro são o mesmo serviço?", answer: "Eles se complementam. Os dois termos aparecem para capturar a busca do cliente com mais precisão." },
      { question: "O atendimento é 24 horas?", answer: "Sim. A estrutura do site posiciona a Master Guincho como atendimento 24h." },
      { question: "O carro pode ir para oficina?", answer: "Sim. O destino é alinhado no contato." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "caminhao-guincho",
    title: "Guincho para Caminhão",
    shortTitle: "Caminhão Guincho",
    keyword: "guincho para caminhão",
    summary: "Guincho e reboque para caminhão com foco em peso, suporte e segurança.",
    intro: "Página voltada ao guincho para caminhão, para capturar demanda de veículos pesados com linguagem clara.",
    definition:
      "Guincho para caminhão é o serviço de remoção para veículos de maior porte, utilizado em panes, sinistros, deslocamentos e apoio operacional.",
    image: "/images/master-guincho-caminhao-guincho.png",
    alt: "Guincho para caminhão da Master Guincho",
    idealFor: ["Caminhão parado em rota ou área urbana.", "Ocorrências que exigem reboque para pesados.", "Empresas que precisam de resposta rápida."],
    whenToHire: ["Quando o caminhão não pode seguir viagem.", "Quando a segurança exige remoção controlada.", "Quando o cliente precisa de orientação imediata."],
    benefits: ["Foco em transporte seguro de maior porte.", "Posicionamento forte para SEO local.", "CTA direto para contato rápido."],
    coverage: ["Atendimento em Ituiutaba e cidades do entorno.", "Cobertura para rotas regionais e trechos estratégicos.", "Página preparada para busca urgente."],
    faq: [
      { question: "Existe guincho para caminhão com atendimento regional?", answer: "Sim. A página foi escrita para representar demanda local e regional." },
      { question: "O serviço pode atender pesados e carga?", answer: "Sim. O conteúdo conecta caminhão, reboque e contexto de carga pesada." },
      { question: "O contato é feito pelo WhatsApp?", answer: "Sim. Esse é o canal principal para acelerar a resposta." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "caminhonete-guincho",
    title: "Guincho para Caminhonete",
    shortTitle: "Caminhonete Guincho",
    keyword: "guincho para caminhonete",
    summary: "Remoção de caminhonete com guincho e auto socorro para urgências.",
    intro: "Página para captar buscas de guincho para caminhonete com resposta rápida, confiança e cobertura regional.",
    definition:
      "Guincho para caminhonete é o atendimento voltado a remover e transportar pickups e veículos similares com segurança e previsibilidade.",
    image: "/images/master-guincho-caminhonete-guincho.png",
    alt: "Guincho para caminhonete da Master Guincho",
    idealFor: ["Caminhonete imobilizada ou avariada.", "Cliente que quer reboque para caminhonete.", "Demanda de auto socorro em cidade ou estrada."],
    whenToHire: ["Quando a caminhonete não pode rodar.", "Quando o transporte precisa preservar o veículo.", "Quando a ocorrência exige resposta simples."],
    benefits: ["Palavra-chave clara na página.", "Imagem e texto alinhados ao asset correto.", "Boa para SEO, GEO e AIO."],
    coverage: ["Cobertura local em Ituiutaba.", "Atendimento em cidades vizinhas da região.", "Acionamento rápido para deslocamento seguro."],
    faq: [
      { question: "Guincho para caminhonete atende particular e empresa?", answer: "Sim. O conteúdo foi pensado para ambos os cenários." },
      { question: "A remoção pode ir para oficina?", answer: "Sim. O destino é combinado no atendimento." },
      { question: "A página ajuda no SEO local?", answer: "Sim. Ela foi estruturada para capturar a busca específica por caminhonete." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "embarcacao-guincho",
    title: "Guincho para Embarcação",
    shortTitle: "Embarcação",
    keyword: "guincho para embarcação",
    summary: "Transporte seguro de barco e embarcação com reboque adequado.",
    intro: "Página criada para atender a busca por guincho para embarcação e reforçar a capacidade operacional.",
    definition:
      "Guincho para embarcação é o serviço de remoção e transporte de barcos ou similares com suporte adequado ao tipo de carga.",
    image: "/images/master-guincho-barco-guincho.png",
    alt: "Guincho para embarcação da Master Guincho",
    idealFor: ["Barco que precisa de transporte seguro.", "Embarcação em deslocamento especial.", "Cliente que busca reboque para barco."],
    whenToHire: ["Quando a embarcação precisa sair do local com cuidado.", "Quando o transporte exige planejamento.", "Quando a consulta busca termo especializado."],
    benefits: ["Amplia o alcance semântico do site.", "Usa imagem real já identificada.", "Ajuda a reforçar a autoridade da Vitrine."],
    coverage: ["Atendimento regional sob demanda.", "Conexão com rotas e cidades atendidas.", "Acionamento direto via WhatsApp."],
    faq: [
      { question: "A embarcação pode ser transportada por reboque?", answer: "Sim. O texto posiciona o serviço como remoção e transporte especializado." },
      { question: "A página é útil para busca local?", answer: "Sim. Ela reforça a busca por embarcação e o contexto regional da marca." },
      { question: "O atendimento é sob demanda?", answer: "Sim. O CTA leva o visitante para alinhamento direto com a operação." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "van-guincho",
    title: "Guincho para Van",
    shortTitle: "Van Guincho",
    keyword: "guincho para van",
    summary: "Guincho para van com contato rápido, remoção segura e 24h.",
    intro: "Página para quem precisa de guincho para van e quer uma solução objetiva com contato rápido.",
    definition:
      "Guincho para van é o serviço de transporte de vans e similares quando há pane, bloqueio de rodagem ou necessidade de deslocamento.",
    image: "/images/master-guincho-van-guincho.png",
    alt: "Guincho para van da Master Guincho",
    idealFor: ["Van imobilizada em trajeto urbano ou regional.", "Empresa ou família que precisa de apoio imediato.", "Reboque de van com foco em segurança."],
    whenToHire: ["Quando a van não pode continuar a viagem.", "Quando a remoção deve preservar carga e estrutura.", "Quando a resposta precisa acontecer em poucos minutos."],
    benefits: ["Intenção de busca específica.", "Imagem e texto alinhados ao asset correto.", "Boa página para conversão e GEO."],
    coverage: ["Atendimento em Ituiutaba e cidades da região.", "Cobertura para cidade, estrada e acesso rural.", "Página pensada para tráfego de alta intenção."],
    faq: [
      { question: "Guincho para van também serve para reboque?", answer: "Sim. O texto combina as duas intenções de busca para ampliar a relevância." },
      { question: "O atendimento pode ser acionado 24h?", answer: "Sim. A operação do site posiciona atendimento contínuo." },
      { question: "A van pode ir para oficina ou base?", answer: "Sim. O destino é combinado no momento da chamada." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "utilitarios-guincho",
    title: "Guincho para Utilitários",
    shortTitle: "Utilitários",
    keyword: "guincho para utilitários",
    summary: "Reboque para utilitários com foco em apoio rápido e seguro.",
    intro: "Página voltada a buscas por guincho para utilitários, conectando transporte leve e médio à operação da Master Guincho.",
    definition:
      "Guincho para utilitários é o serviço destinado a veículos de trabalho, pequenos furgões e similares que precisam de remoção ou transporte.",
    image: "/images/master-guincho-utilitarios.png",
    alt: "Guincho para utilitários da Master Guincho",
    idealFor: ["Veículo de trabalho parado por pane.", "Frota leve com necessidade de reboque.", "Cliente que busca auto socorro rápido."],
    whenToHire: ["Quando o utilitário não pode seguir operando.", "Quando o deslocamento precisa ser seguro.", "Quando o cliente quer contato direto sem burocracia."],
    benefits: ["Captura uma categoria comum de buscas.", "Amplia a cobertura sem perder foco local.", "Mantém a linguagem objetiva."],
    coverage: ["Atendimento regional e urbano.", "Conexão com a página de cobertura por cidade.", "Acionamento simples por WhatsApp."],
    faq: [
      { question: "Utilitários entram na cobertura?", answer: "Sim. A página foi escrita para esse tipo de veículo." },
      { question: "O serviço pode ser chamado em empresa?", answer: "Sim. A página ajuda a atender empresas e motoristas particulares." },
      { question: "A página usa a palavra-chave correta?", answer: "Sim. O foco é capturar a intenção por guincho para utilitários." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "veiculos-especiais",
    title: "Guincho para Veículos Especiais",
    shortTitle: "Veículos Especiais",
    keyword: "guincho para veículos especiais",
    summary: "Guincho para veículos especiais com operação sob demanda.",
    intro: "Página voltada a veículos especiais, reforçando a capacidade da Master Guincho em lidar com demandas fora do padrão.",
    definition:
      "Guincho para veículos especiais é o serviço usado quando o transporte precisa considerar dimensão, acesso, peso ou configuração fora do usual.",
    image: "/images/master-guincho-veiculos-especiais.png",
    alt: "Guincho para veículos especiais da Master Guincho",
    idealFor: ["Veículo com necessidade de manuseio diferenciado.", "Operação que exige planejamento antes da remoção.", "Demanda que pede reboque fora do padrão."],
    whenToHire: ["Quando a categoria do veículo exige cuidado extra.", "Quando a remoção deve ser confirmada antes do deslocamento.", "Quando o visitante busca uma solução especializada."],
    benefits: ["Semântica forte para categoria especial.", "Boa ponte entre vitrine e oferta principal.", "Amplia relevância para AIO."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e áreas atendidas.", "Canal único de resposta e orientação."],
    faq: [
      { question: "Veículos especiais entram em atendimento?", answer: "Sim. A página existe justamente para esse segmento." },
      { question: "A resposta depende de avaliação prévia?", answer: "Sim. Para veículos especiais, a operação pode confirmar detalhes antes do envio." },
      { question: "O conteúdo ajuda no SEO?", answer: "Sim. Ele posiciona a busca por categoria de forma clara." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "cargas-especiais",
    title: "Reboque para Cargas Especiais",
    shortTitle: "Cargas Especiais",
    keyword: "reboque para cargas especiais",
    summary: "Reboque para cargas especiais com foco em transporte e cuidado.",
    intro: "Página pensada para busca por reboque para cargas especiais, com texto objetivo e leitura comercial clara.",
    definition:
      "Reboque para cargas especiais é o serviço de transporte aplicado a volumes ou configurações que exigem planejamento e suporte adequado.",
    image: "/images/master-guincho-cargas-especiais.png",
    alt: "Reboque para cargas especiais da Master Guincho",
    idealFor: ["Carga que não pode ser movimentada de forma comum.", "Cliente que precisa de apoio logístico e técnico.", "Operação que depende de reboque seguro."],
    whenToHire: ["Quando a carga requer remoção planejada.", "Quando o deslocamento deve seguir orientação técnica.", "Quando a consulta vem com busca de longa cauda."],
    benefits: ["Captura a intenção de carga especial.", "Complementa a vitrine de pesados e especiais.", "Ajuda a malha interna do site."],
    coverage: ["Atendimento regional e sob demanda.", "Ligação com cidades atendidas e rotas prioritárias.", "Conversa direta para confirmar viabilidade."],
    faq: [
      { question: "Reboque para cargas especiais é diferente de guincho comum?", answer: "Sim. O posicionamento do texto mostra a necessidade de cuidado e planejamento." },
      { question: "A página pode receber prova visual?", answer: "Pode, e isso melhora ainda mais a confiança do visitante." },
      { question: "O contato principal continua sendo WhatsApp?", answer: "Sim. O fluxo foi mantido para conversão rápida." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "maquina-agricola",
    title: "Guincho para Máquina Agrícola",
    shortTitle: "Máquina Agrícola",
    keyword: "guincho para máquina agrícola",
    summary: "Remoção de máquina agrícola com transporte seguro e 24h.",
    intro: "Página criada para quem precisa de guincho para máquina agrícola e quer uma rota clara de contato com a operação.",
    definition:
      "Guincho para máquina agrícola é o serviço voltado a transporte e remoção de maquinário rural com foco em suporte e previsibilidade.",
    image: "/images/master-guincho-maquina-agricola.png",
    alt: "Guincho para máquina agrícola da Master Guincho",
    idealFor: ["Máquina parada em área rural.", "Operação agrícola que precisa de reboque.", "Cliente que busca transporte com mais controle."],
    whenToHire: ["Quando o maquinário precisa sair do local com segurança.", "Quando a estrutura exige apoio técnico.", "Quando a busca combina contexto rural e veículo especial."],
    benefits: ["Muito útil para GEO rural.", "Amplia o alcance do site em nichos específicos.", "Usa o asset já identificado na pasta."],
    coverage: ["Atendimento regional e rural.", "Conexão com a área de cobertura da Master Guincho.", "Acionamento direto e sem burocracia."],
    faq: [
      { question: "A máquina agrícola pode ser rebocada?", answer: "Sim. A página trata o transporte como remoção especializada." },
      { question: "Existe resposta em área rural?", answer: "Sim. O texto foi pensado para captar esse contexto." },
      { question: "A página ajuda na busca local?", answer: "Sim. Ela combina palavra-chave específica e cobertura regional." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "implemento-agricola",
    title: "Guincho para Implemento Agrícola",
    shortTitle: "Implemento Agrícola",
    keyword: "guincho para implemento agrícola",
    summary: "Reboque para implemento agrícola com suporte regional.",
    intro: "Página dedicada ao guincho para implemento agrícola, reforçando nicho, contexto rural e confiança na operação.",
    definition:
      "Guincho para implemento agrícola é o transporte de equipamentos e implementos do campo em situações que exigem apoio e remoção segura.",
    image: "/images/master-guincho-implemento-agricola.png",
    alt: "Guincho para implemento agrícola da Master Guincho",
    idealFor: ["Implemento parado em fazenda ou estrada rural.", "Operação que exige remoção de equipamento.", "Demanda de transporte planejado."],
    whenToHire: ["Quando o implemento não pode permanecer no local.", "Quando o cliente busca apoio técnico na remoção.", "Quando a demanda pede linguagem de nicho."],
    benefits: ["Ajuda a capturar buscas de longa cauda.", "Aumenta a relevância da vitrine agrícola.", "Mantém o conteúdo útil e objetivo."],
    coverage: ["Atendimento regional e rural.", "Ligação com rotas e cidades atendidas.", "Contato direto para confirmar necessidade."],
    faq: [
      { question: "A página fala de guincho para implemento agrícola?", answer: "Sim. O termo principal está presente na estrutura da rota." },
      { question: "O atendimento pode ser organizado com antecedência?", answer: "Sim. A remoção de implemento costuma se beneficiar de alinhamento prévio." },
      { question: "A página serve para SEO GEO?", answer: "Sim. Ela foi criada para isso." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "veiculos-colecionadores",
    title: "Guincho para Veículos de Colecionadores",
    shortTitle: "Colecionadores",
    keyword: "guincho para veículos de colecionadores",
    summary: "Guincho para veículos de colecionadores com cuidado extra.",
    intro: "Página voltada a veículos de colecionadores, com foco em transporte delicado, valor preservado e atendimento sob medida.",
    definition:
      "Guincho para veículos de colecionadores é o serviço de transporte aplicado a carros antigos, raros ou especiais que exigem cuidado elevado.",
    image: "/images/master-guincho-veiculos-colecionadores.png",
    alt: "Guincho para veículos de colecionadores da Master Guincho",
    idealFor: ["Veículo antigo ou raro.", "Transporte com foco em preservação.", "Cliente que prioriza cuidado e planejamento."],
    whenToHire: ["Quando o veículo não deve rodar por conta própria.", "Quando o deslocamento exige atenção redobrada.", "Quando a busca vem com forte componente emocional."],
    benefits: ["Entra bem em buscas premium.", "Diferencia a marca por categoria.", "Reforça autoridade e confiança."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e cidades da área.", "Contato direto para definir logística."],
    faq: [
      { question: "Veículos de colecionadores podem ser transportados com cuidado?", answer: "Sim. Esse é exatamente o foco da página." },
      { question: "O conteúdo ajuda a vender serviço premium?", answer: "Sim. O texto foi desenhado para intenção de valor e preservação." },
      { question: "A imagem usada é a correta?", answer: "Sim. O asset foi identificado na pasta raiz do projeto." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "guincho-para-dois-veiculos",
    title: "Guincho para Dois Veículos",
    shortTitle: "Dois Veículos",
    keyword: "guincho para dois veículos",
    summary: "Transporte de dois veículos com guincho e planejamento.",
    intro: "Página criada para captar a busca por guincho para dois veículos com foco em contexto operacional.",
    definition:
      "Guincho para dois veículos é o serviço que aborda a possibilidade de transportar mais de um veículo conforme a capacidade e o cenário da operação.",
    image: "/images/master-guincho-guincho-para-dois-veiculos.png",
    alt: "Guincho para dois veículos da Master Guincho",
    idealFor: ["Ocorrência com mais de um veículo.", "Operação planejada com logística específica.", "Cliente que precisa entender a capacidade do atendimento."],
    whenToHire: ["Quando a demanda envolve duas unidades.", "Quando o suporte depende de avaliação prévia.", "Quando a busca precisa de termo específico."],
    benefits: ["Diferencia a oferta da concorrência.", "Captura consultas mais qualificadas.", "Cria ponte entre conteúdo e operação."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com a cobertura principal do site.", "Contato rápido para validar viabilidade."],
    faq: [
      { question: "O serviço realmente fala de dois veículos?", answer: "Sim. A página foi criada para essa intenção de busca." },
      { question: "O atendimento depende de avaliação prévia?", answer: "Pode depender, conforme o tipo de ocorrência." },
      { question: "A página pode entrar na vitrine principal?", answer: "Sim. Ela faz parte da lista principal de cards e rotas." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "guincho-para-pesados",
    title: "Guincho para Pesados",
    shortTitle: "Pesados",
    keyword: "guincho para pesados",
    summary: "Guincho para pesados com foco em força, segurança e suporte.",
    intro: "Página para posicionar guincho para pesados como uma solução regional preparada para demandas maiores.",
    definition:
      "Guincho para pesados é o serviço de transporte e remoção de veículos de grande porte com suporte adequado ao peso e ao contexto.",
    image: "/images/master-guincho-guincho-pesados.png",
    alt: "Guincho para pesados da Master Guincho",
    idealFor: ["Veículo pesado em rota ou área urbana.", "Demanda que exige estrutura mais robusta.", "Cliente que precisa de resposta para pesados."],
    whenToHire: ["Quando a operação envolve porte elevado.", "Quando a remoção precisa de planejamento.", "Quando a busca ocorre por peso e capacidade."],
    benefits: ["Forte aderência para busca especializada.", "Reforça a imagem de capacidade operacional.", "Ajuda na organização da vitrine por segmento."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e cidades prioritárias.", "Contato direto para confirmar viabilidade."],
    faq: [
      { question: "Guincho para pesados entra na Vitrine?", answer: "Sim. É uma das páginas mais importantes da área." },
      { question: "A página pode ajudar em busca local?", answer: "Sim. Ela reforça a intenção por categoria e capacidade." },
      { question: "O atendimento continua sendo via WhatsApp?", answer: "Sim. O contato rápido segue como ponto central da conversão." }
    ],
    relatedServices: sharedServices
  }
];

export const vitrineSection = {
  eyebrow: "Vitrine",
  title: "Vitrine por tipo de veículo e carga",
  description:
    "Cards e páginas individuais para reforçar SEO, GEO e AIO com imagens reais da operação da Master Guincho."
};

export function getVitrinePage(slug: string) {
  return vitrinePages.find((page) => page.slug === slug);
}
