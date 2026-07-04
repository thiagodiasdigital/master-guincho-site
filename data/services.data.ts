export type ServiceTemplateItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: string;
  image?: string;
  tags: string[];
};

export type ServicesDataTemplate = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ServiceTemplateItem[];
};

export const servicesDataTemplate: ServicesDataTemplate = {
  section: {
    eyebrow: 'Servicos',
    title: 'Solucoes principais da Master Guincho',
    description:
      'Organize aqui a lista de ofertas em cards editaveis, mantendo a mesma estrutura visual da Home.'
  },
  items: [
    {
      title: 'Guincho 24h',
      description: 'Remocao rapida para carros, motos, caminhonetes, vans e utilitarios.',
      href: '/servicos/guincho-24h/',
      ctaLabel: 'Chamar agora',
      icon: 'support',
      image: '/images/master-guincho-carro-guincho.png',
      tags: ['24h', 'remocao', 'leve']
    },
    {
      title: 'Reboque',
      description: 'Atendimento para pane, sinistro, transporte e deslocamento programado.',
      href: '/servicos/reboque-24h/',
      ctaLabel: 'Solicitar reboque',
      icon: 'star',
      image: '/images/master-guincho-caminhonete-guincho.png',
      tags: ['reboque', 'sinistro', 'pane']
    },
    {
      title: 'Auto socorro',
      description: 'Assistencia emergencial na estrada, na cidade e em rotas regionais.',
      href: '/servicos/auto-socorro/',
      ctaLabel: 'Pedir socorro',
      icon: 'chat',
      image: '/images/master-guincho-moto-guincho.png',
      tags: ['socorro', 'emergencia', 'estrada']
    },
    {
      title: 'Taxi',
      description: 'Transporte de passageiros sob demanda para deslocamentos locais e regionais.',
      href: '/servicos/taxi-24h/',
      ctaLabel: 'Chamar taxi',
      icon: 'location',
      image: '/images/master-guincho-taxi.jpeg',
      tags: ['passageiros', 'deslocamento', '24h']
    }
  ]
};
