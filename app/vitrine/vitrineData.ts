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
    intro: "Quem está com a moto parada encontra aqui orientação para remoção segura em Ituiutaba e região.",
    definition:
      "Guincho para moto é o serviço de remoção e transporte de motocicletas em ocorrências de pane, queda, sinistro ou impossibilidade de seguir rodando.",
    image: "/images/master-guincho-moto-guincho.png",
    alt: "Guincho para moto da Master Guincho",
    idealFor: ["Moto parada por pane mecânica ou elétrica.", "Moto envolvida em sinistro ou queda.", "Cliente que precisa levar a moto para oficina, casa ou outro destino."],
    whenToHire: ["Quando a moto não pode seguir rodando com segurança.", "Quando houve queda, colisão ou problema na estrada.", "Quando o destino precisa ser combinado antes da retirada."],
    benefits: ["Atendimento 24h com orientação direta.", "Transporte com cuidado para preservar a moto.", "Acionamento simples via WhatsApp."],
    coverage: ["Ituiutaba e cidades atendidas da região.", "Ocorrências urbanas, rodoviárias e de acesso rápido.", "Envio da localização ajuda a confirmar o melhor atendimento."],
    faq: [
      { question: "O guincho para moto atende emergências 24h?", answer: "Sim. O atendimento pode ser acionado em qualquer horário." },
      { question: "É possível levar a moto para oficina ou residência?", answer: "Sim. O destino é combinado no momento do atendimento." },
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
    intro: "Se o carro parou, não liga ou sofreu colisão, aqui está o caminho para pedir retirada com segurança.",
    definition:
      "Guincho para carro é o serviço de remoção e transporte de automóveis quando há pane, colisão, problema mecânico ou necessidade de deslocamento sem rodar.",
    image: "/images/master-guincho-carro-guincho.png",
    alt: "Guincho para carro da Master Guincho",
    idealFor: ["Carro parado em rua, avenida ou rodovia.", "Motorista que precisa de retirada sem atraso.", "Situações em que o transporte precisa ser feito com cuidado."],
    whenToHire: ["Quando o carro não liga ou não pode trafegar.", "Quando houve pane, colisão ou falha mecânica.", "Quando a chamada deve ser resolvida pelo WhatsApp."],
    benefits: ["Comunicação direta e simples.", "Atendimento para cidade e estrada.", "Transporte seguro até o destino combinado."],
    coverage: ["Cobertura em Ituiutaba e região.", "Atendimento para bairros, centro e rodovias.", "O envio da localização facilita a confirmação da rota."],
    faq: [
      { question: "Guincho para carro e reboque de carro são o mesmo serviço?", answer: "Na prática, os dois termos indicam a retirada e o transporte do veículo." },
      { question: "O atendimento é 24 horas?", answer: "Sim. A equipe pode ser acionada ao longo do dia e da noite." },
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
    intro: "Para caminhão parado em rota, área urbana ou trecho regional, a orientação começa aqui.",
    definition:
      "Guincho para caminhão é o serviço de remoção para veículos de maior porte, utilizado em panes, sinistros, deslocamentos e apoio operacional.",
    image: "/images/master-guincho-caminhao-guincho.png",
    alt: "Guincho para caminhão da Master Guincho",
    idealFor: ["Caminhão parado em rota ou área urbana.", "Ocorrências que exigem retirada de veículo pesado.", "Empresas que precisam de resposta rápida."],
    whenToHire: ["Quando o caminhão não pode seguir viagem.", "Quando a segurança exige remoção controlada.", "Quando o cliente precisa de orientação imediata."],
    benefits: ["Transporte seguro de maior porte.", "Atendimento local e regional.", "Contato direto pelo WhatsApp."],
    coverage: ["Atendimento em Ituiutaba e cidades do entorno.", "Cobertura para rotas regionais e trechos estratégicos.", "A localização enviada ajuda a confirmar o melhor acesso."],
    faq: [
      { question: "Existe guincho para caminhão com atendimento regional?", answer: "Sim. O atendimento cobre Ituiutaba e região conforme a ocorrência." },
      { question: "O serviço pode atender pesados e carga?", answer: "Sim. A retirada considera o tipo de veículo e a necessidade de transporte." },
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
    intro: "Caminhonete parada, sem partida ou após colisão? A orientação começa pelo WhatsApp.",
    definition:
      "Guincho para caminhonete é o atendimento voltado a remover e transportar pickups e veículos similares com segurança e previsibilidade.",
    image: "/images/master-guincho-caminhonete-guincho.png",
    alt: "Guincho para caminhonete da Master Guincho",
    idealFor: ["Caminhonete imobilizada ou avariada.", "Cliente que quer levar a caminhonete para oficina, casa ou base.", "Demanda de apoio em cidade ou estrada."],
    whenToHire: ["Quando a caminhonete não pode rodar.", "Quando o transporte precisa preservar o veículo.", "Quando a ocorrência exige resposta simples."],
    benefits: ["Texto direto para explicar o atendimento.", "Imagem e descrição coerentes com o serviço.", "Contato rápido pelo WhatsApp."],
    coverage: ["Cobertura local em Ituiutaba.", "Atendimento em cidades vizinhas da região.", "Acionamento rápido para deslocamento seguro."],
    faq: [
      { question: "Guincho para caminhonete atende particular e empresa?", answer: "Sim. O atendimento serve para uso particular e para trabalho." },
      { question: "A remoção pode ir para oficina?", answer: "Sim. O destino é combinado no atendimento." },
      { question: "A caminhonete pode seguir para outro destino?", answer: "Sim. Oficina, residência ou local combinado podem ser definidos na chamada." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "embarcacao-guincho",
    title: "Guincho para Embarcação",
    shortTitle: "Embarcação",
    keyword: "guincho para embarcação",
    summary: "Transporte seguro de barco e embarcação com reboque adequado.",
    intro: "Barco, lancha ou outra embarcação que precise de transporte seguro encontra aqui o ponto de contato.",
    definition:
      "Guincho para embarcação é o serviço de remoção e transporte de barcos ou similares com suporte adequado ao tipo de carga.",
    image: "/images/master-guincho-barco-guincho.png",
    alt: "Guincho para embarcação da Master Guincho",
    idealFor: ["Barco que precisa de transporte seguro.", "Embarcação em deslocamento especial.", "Cliente que quer combinar origem, destino e cuidado no transporte."],
    whenToHire: ["Quando a embarcação precisa sair do local com cuidado.", "Quando o transporte exige planejamento.", "Quando há necessidade de orientação prévia sobre a retirada."],
    benefits: ["Transporte cuidadoso e sob combinação prévia.", "Uso de imagem real da operação.", "Contato direto via WhatsApp."],
    coverage: ["Atendimento regional sob demanda.", "Conexão com rotas e cidades atendidas.", "A localização e o destino ajudam na análise do atendimento."],
    faq: [
      { question: "A embarcação pode ser transportada por reboque?", answer: "Sim. O atendimento considera remoção e transporte especializado." },
      { question: "A embarcação precisa de avaliação prévia?", answer: "Em muitos casos, sim. O WhatsApp ajuda a definir origem, destino e formato do atendimento." },
      { question: "O atendimento é sob demanda?", answer: "Sim. A confirmação acontece conforme a ocorrência e a disponibilidade." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "van-guincho",
    title: "Guincho para Van",
    shortTitle: "Van Guincho",
    keyword: "guincho para van",
    summary: "Guincho para van com contato rápido, remoção segura e 24h.",
    intro: "Van parada em trajeto urbano ou regional? A Master Guincho orienta a retirada pelo WhatsApp.",
    definition:
      "Guincho para van é o serviço de transporte de vans e similares quando há pane, bloqueio de rodagem ou necessidade de deslocamento.",
    image: "/images/master-guincho-van-guincho.png",
    alt: "Guincho para van da Master Guincho",
    idealFor: ["Van imobilizada em trajeto urbano ou regional.", "Empresa ou família que precisa de apoio imediato.", "Transporte com foco em preservação da estrutura."],
    whenToHire: ["Quando a van não pode continuar a viagem.", "Quando a remoção deve preservar carga e estrutura.", "Quando a resposta precisa acontecer com rapidez."],
    benefits: ["Descrição direta para o cliente.", "Imagem e texto alinhados ao serviço.", "Contato simples pelo WhatsApp."],
    coverage: ["Atendimento em Ituiutaba e cidades da região.", "Cobertura para cidade, estrada e acesso rural.", "A localização enviada ajuda a confirmar a viabilidade."],
    faq: [
      { question: "Guincho para van também serve para reboque?", answer: "Sim. O serviço cobre a retirada e o transporte da van." },
      { question: "O atendimento pode ser acionado 24h?", answer: "Sim. O contato pode ser feito a qualquer hora." },
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
    intro: "Veículos de trabalho e utilitários também recebem atendimento com retirada segura e orientação direta.",
    definition:
      "Guincho para utilitários é o serviço destinado a veículos de trabalho, pequenos furgões e similares que precisam de remoção ou transporte.",
    image: "/images/master-guincho-utilitarios.png",
    alt: "Guincho para utilitários da Master Guincho",
    idealFor: ["Veículo de trabalho parado por pane.", "Frota leve com necessidade de retirada.", "Cliente que busca apoio rápido sem burocracia."],
    whenToHire: ["Quando o utilitário não pode seguir operando.", "Quando o deslocamento precisa ser seguro.", "Quando o veículo precisa ir para oficina, base ou destino combinado."],
    benefits: ["Comunicação objetiva para o cliente.", "Atendimento local e regional.", "Contato rápido por WhatsApp."],
    coverage: ["Atendimento regional e urbano.", "Conexão com Ituiutaba e cidades vizinhas.", "A localização informada ajuda a definir o atendimento."],
    faq: [
      { question: "Utilitários entram na cobertura?", answer: "Sim. O atendimento inclui utilitários e veículos de trabalho." },
      { question: "O serviço pode ser chamado em empresa?", answer: "Sim. O atendimento serve para empresas e motoristas particulares." },
      { question: "O atendimento pode ir para oficina ou base?", answer: "Sim. O destino é definido na chamada." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "veiculos-especiais",
    title: "Guincho para Veículos Especiais",
    shortTitle: "Veículos Especiais",
    keyword: "guincho para veículos especiais",
    summary: "Guincho para veículos especiais com operação sob demanda.",
    intro: "Veículos fora do padrão precisam de combinação prévia e avaliação para definir a melhor retirada.",
    definition:
      "Guincho para veículos especiais é o serviço usado quando o transporte precisa considerar dimensão, acesso, peso ou configuração fora do usual.",
    image: "/images/master-guincho-veiculos-especiais.png",
    alt: "Guincho para veículos especiais da Master Guincho",
    idealFor: ["Veículo com necessidade de manuseio diferenciado.", "Operação que exige planejamento antes da remoção.", "Demanda que pede retirada fora do padrão."],
    whenToHire: ["Quando a categoria do veículo exige cuidado extra.", "Quando a remoção deve ser confirmada antes do deslocamento.", "Quando o atendimento precisa ser avaliado com antecedência."],
    benefits: ["Atendimento sob avaliação da ocorrência.", "Boa referência para veículos fora do padrão.", "Contato único para orientar a remoção."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e áreas atendidas.", "A viabilidade é confirmada no WhatsApp."],
    faq: [
      { question: "Veículos especiais entram em atendimento?", answer: "Sim. O atendimento depende da análise da ocorrência e da viabilidade operacional." },
      { question: "A resposta depende de avaliação prévia?", answer: "Sim. O WhatsApp ajuda a confirmar detalhes antes do envio." },
      { question: "O deslocamento pode seguir para oficina ou outro destino?", answer: "Pode, desde que o destino seja combinado com antecedência." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "cargas-especiais",
    title: "Reboque para Cargas Especiais",
    shortTitle: "Cargas Especiais",
    keyword: "reboque para cargas especiais",
    summary: "Reboque para cargas especiais com foco em transporte e cuidado.",
    intro: "Cargas especiais exigem combinação prévia de origem, destino e formato de transporte.",
    definition:
      "Reboque para cargas especiais é o serviço de transporte aplicado a volumes ou configurações que exigem planejamento e suporte adequado.",
    image: "/images/master-guincho-cargas-especiais.png",
    alt: "Reboque para cargas especiais da Master Guincho",
    idealFor: ["Carga que não pode ser movimentada de forma comum.", "Cliente que precisa de apoio logístico e técnico.", "Operação que depende de transporte seguro."],
    whenToHire: ["Quando a carga requer remoção planejada.", "Quando o deslocamento deve seguir orientação prévia.", "Quando a origem e o destino precisam ser combinados com cuidado."],
    benefits: ["Transporte planejado para situações específicas.", "Complementa o atendimento para veículos e cargas fora do padrão.", "Contato direto para confirmar viabilidade."],
    coverage: ["Atendimento regional e sob demanda.", "Ligação com cidades atendidas e rotas prioritárias.", "A análise começa pelo WhatsApp."],
    faq: [
      { question: "Reboque para cargas especiais é diferente de guincho comum?", answer: "Sim. A avaliação considera o peso, o formato e a forma de retirada." },
      { question: "A carga pode seguir para destino combinado?", answer: "Sim. O destino é alinhado antes do deslocamento." },
      { question: "O contato principal continua sendo WhatsApp?", answer: "Sim. O WhatsApp é o canal mais prático para confirmar o atendimento." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "maquina-agricola",
    title: "Guincho para Máquina Agrícola",
    shortTitle: "Máquina Agrícola",
    keyword: "guincho para máquina agrícola",
    summary: "Remoção de máquina agrícola com transporte seguro e 24h.",
    intro: "Máquina agrícola parada no campo, na estrada ou na cidade pede apoio com orientação prévia.",
    definition:
      "Guincho para máquina agrícola é o serviço voltado a transporte e remoção de maquinário rural com foco em suporte e previsibilidade.",
    image: "/images/master-guincho-maquina-agricola.png",
    alt: "Guincho para máquina agrícola da Master Guincho",
    idealFor: ["Máquina parada em área rural.", "Operação agrícola que precisa de transporte.", "Cliente que busca deslocamento com mais controle."],
    whenToHire: ["Quando o maquinário precisa sair do local com segurança.", "Quando a estrutura exige apoio na remoção.", "Quando o atendimento depende de combinação prévia."],
    benefits: ["Atendimento útil para o campo e para a estrada.", "Amplia o alcance em demandas agrícolas.", "Uso de imagem real da operação."],
    coverage: ["Atendimento regional e rural.", "Conexão com a área de cobertura da Master Guincho.", "Acionamento direto e sem burocracia."],
    faq: [
      { question: "A máquina agrícola pode ser rebocada?", answer: "Sim. O transporte é tratado como remoção especializada." },
      { question: "Existe resposta em área rural?", answer: "Sim. O texto foi pensado para captar esse contexto." },
      { question: "O atendimento pode ser combinado antes?", answer: "Sim. Informar local, tipo de máquina e destino ajuda bastante." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "implemento-agricola",
    title: "Guincho para Implemento Agrícola",
    shortTitle: "Implemento Agrícola",
    keyword: "guincho para implemento agrícola",
    summary: "Reboque para implemento agrícola com suporte regional.",
    intro: "Implemento agrícola exige combinação de local, destino e tipo de transporte antes da retirada.",
    definition:
      "Guincho para implemento agrícola é o transporte de equipamentos e implementos do campo em situações que exigem apoio e remoção segura.",
    image: "/images/master-guincho-implemento-agricola.png",
    alt: "Guincho para implemento agrícola da Master Guincho",
    idealFor: ["Implemento parado em fazenda ou estrada rural.", "Operação que exige remoção de equipamento.", "Demanda de transporte planejado."],
    whenToHire: ["Quando o implemento não pode permanecer no local.", "Quando o cliente busca apoio na remoção.", "Quando é preciso combinar origem e destino com antecedência."],
    benefits: ["Ajuda a explicar o atendimento de forma prática.", "Aumenta a relevância da categoria agrícola.", "Mantém o conteúdo objetivo."],
    coverage: ["Atendimento regional e rural.", "Ligação com rotas e cidades atendidas.", "Contato direto para confirmar a necessidade."],
    faq: [
      { question: "O atendimento cobre implemento agrícola?", answer: "Sim. O serviço contempla esse tipo de transporte conforme a viabilidade." },
      { question: "O atendimento pode ser organizado com antecedência?", answer: "Sim. A remoção de implemento costuma se beneficiar de alinhamento prévio." },
      { question: "O destino pode ser oficina, base ou fazenda?", answer: "Sim. O local de entrega é combinado na chamada." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "veiculos-colecionadores",
    title: "Guincho para Veículos de Colecionadores",
    shortTitle: "Colecionadores",
    keyword: "guincho para veículos de colecionadores",
    summary: "Guincho para veículos de colecionadores com cuidado extra.",
    intro: "Veículos antigos, raros ou de valor afetivo pedem transporte cuidadoso e orientação antes da retirada.",
    definition:
      "Guincho para veículos de colecionadores é o serviço de transporte aplicado a carros antigos, raros ou especiais que exigem cuidado elevado.",
    image: "/images/master-guincho-veiculos-colecionadores.png",
    alt: "Guincho para veículos de colecionadores da Master Guincho",
    idealFor: ["Veículo antigo ou raro.", "Transporte com foco em preservação.", "Cliente que prioriza cuidado e planejamento."],
    whenToHire: ["Quando o veículo não deve rodar por conta própria.", "Quando o deslocamento exige atenção redobrada.", "Quando a saída precisa ser combinada com calma."],
    benefits: ["Transporte cuidadoso para veículos especiais.", "Atendimento que respeita o valor do bem.", "Contato direto para definir a logística."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e cidades da área.", "A viabilidade é confirmada no WhatsApp."],
    faq: [
      { question: "Veículos de colecionadores podem ser transportados com cuidado?", answer: "Sim. O foco é preservar o veículo durante todo o deslocamento." },
      { question: "O atendimento pode ser combinado com antecedência?", answer: "Sim. Esse tipo de transporte se beneficia de alinhamento prévio." },
      { question: "O destino pode ser casa, oficina ou evento?", answer: "Pode, desde que seja informado no momento da chamada." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "guincho-para-dois-veiculos",
    title: "Guincho para Dois Veículos",
    shortTitle: "Dois Veículos",
    keyword: "guincho para dois veículos",
    summary: "Transporte de dois veículos com guincho e planejamento.",
    intro: "Quando a ocorrência envolve dois veículos, a análise precisa ser feita caso a caso.",
    definition:
      "Guincho para dois veículos é o serviço que aborda a possibilidade de transportar mais de um veículo conforme a capacidade e o cenário da operação.",
    image: "/images/master-guincho-guincho-para-dois-veiculos.png",
    alt: "Guincho para dois veículos da Master Guincho",
    idealFor: ["Ocorrência com mais de um veículo.", "Operação planejada com logística específica.", "Cliente que precisa entender a capacidade do atendimento."],
    whenToHire: ["Quando a demanda envolve duas unidades.", "Quando o suporte depende de avaliação prévia.", "Quando é preciso confirmar a disponibilidade antes do envio."],
    benefits: ["Ajuda a esclarecer um caso fora do comum.", "Leva o cliente a confirmar a viabilidade com rapidez.", "Mantém a comunicação objetiva."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com a cobertura principal do site.", "Contato rápido para validar a viabilidade."],
    faq: [
      { question: "O serviço realmente fala de dois veículos?", answer: "Sim. O atendimento considera cenários com mais de um veículo conforme a operação." },
      { question: "O atendimento depende de avaliação prévia?", answer: "Pode depender, conforme o tipo de ocorrência." },
      { question: "O atendimento pode ser combinado para um destino só?", answer: "Sim. A confirmação é feita antes do deslocamento." }
    ],
    relatedServices: sharedServices
  },
  {
    slug: "guincho-para-pesados",
    title: "Guincho para Pesados",
    shortTitle: "Pesados",
    keyword: "guincho para pesados",
    summary: "Guincho para pesados com foco em força, segurança e suporte.",
    intro: "Veículos pesados exigem avaliação de rota, acesso e logística antes da remoção.",
    definition:
      "Guincho para pesados é o serviço de transporte e remoção de veículos de grande porte com suporte adequado ao peso e ao contexto.",
    image: "/images/master-guincho-guincho-pesados.png",
    alt: "Guincho para pesados da Master Guincho",
    idealFor: ["Veículo pesado em rota ou área urbana.", "Demanda que exige estrutura mais robusta.", "Cliente que precisa de resposta para pesados."],
    whenToHire: ["Quando a operação envolve porte elevado.", "Quando a remoção precisa de planejamento.", "Quando a situação exige confirmação prévia da viabilidade."],
    benefits: ["Comunicação clara sobre casos de maior porte.", "Reforça a capacidade operacional.", "Ajuda a direcionar o pedido com rapidez."],
    coverage: ["Atendimento regional sob consulta.", "Ligação com rotas e cidades prioritárias.", "Contato direto para confirmar viabilidade."],
    faq: [
      { question: "Guincho para pesados entra na Vitrine?", answer: "Sim. Ele faz parte das principais categorias atendidas." },
      { question: "O texto ajuda a entender o atendimento disponível?", answer: "Sim. A descrição deixa claro o tipo de atendimento disponível." },
      { question: "O atendimento continua sendo via WhatsApp?", answer: "Sim. O contato rápido segue como ponto central do atendimento." }
    ],
    relatedServices: sharedServices
  }
];

export const vitrineSection = {
  eyebrow: "Vitrine",
  title: "Vitrine por tipo de veículo e carga",
  description:
    "Tipos de atendimento organizados por veículo e carga, com imagens reais e leitura rápida para quem precisa chamar ajuda."
};

export function getVitrinePage(slug: string) {
  return vitrinePages.find((page) => page.slug === slug);
}
