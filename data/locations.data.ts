export type LocationTemplateItem = {
  name: string;
  slug: string;
  description: string;
  href: string;
  type: 'cidade' | 'bairro' | 'regiao' | 'unidade' | 'rota' | 'area atendida';
  highlighted: boolean;
};

export type LocationsDataTemplate = {
  section: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: LocationTemplateItem[];
};

export const locationsDataTemplate: LocationsDataTemplate = {
  section: {
    eyebrow: 'Cobertura',
    title: 'Cidades, areas e regioes atendidas',
    description:
      'Use esta estrutura para representar cidades, bairros, regioes, unidades ou areas atendidas da Master Guincho.'
  },
  items: [
    {
      name: 'Ituiutaba',
      slug: 'ituiutaba',
      description: 'Cidade base da operacao e ponto principal de atendimento.',
      href: '/rotas/ituiutaba/',
      type: 'cidade',
      highlighted: true
    },
    {
      name: 'Capinopolis',
      slug: 'capinopolis',
      description: 'Cobertura regional com prioridade para demanda urbana e rodoviaria.',
      href: '/rotas/capinopolis/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Gurinhata',
      slug: 'gurinhata',
      description: 'Atendimento regional para ocorrencias locais e deslocamentos.',
      href: '/rotas/gurinhata/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Canapolis',
      slug: 'canapolis',
      description: 'Cidade atendida em cobertura regional do Triangulo Mineiro.',
      href: '/rotas/canapolis/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Ipiacu',
      slug: 'ipiacu',
      description: 'Atendimento de apoio para deslocamentos e ocorrencias locais.',
      href: '/rotas/ipiacu/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Cachoeira Dourada',
      slug: 'cachoeira-dourada-mg',
      description: 'Cobertura mineira com suporte em ocorrencias urbanas e regionais.',
      href: '/rotas/cachoeira-dourada-mg/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Santa Vitoria',
      slug: 'santa-vitoria',
      description: 'Atendimento regional com foco em agilidade e contato rapido.',
      href: '/rotas/santa-vitoria/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Monte Alegre de Minas',
      slug: 'monte-alegre-de-minas',
      description: 'Cidade de cobertura para assistencia e reboque sob demanda.',
      href: '/rotas/monte-alegre-de-minas/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Campina Verde',
      slug: 'campina-verde',
      description: 'Cobertura regional com apoio para veiculos leves e utilitarios.',
      href: '/rotas/campina-verde/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Cachoeira Dourada GO',
      slug: 'cachoeira-dourada-go',
      description: 'Atendimento regional no eixo goiano da area atendida.',
      href: '/rotas/cachoeira-dourada-go/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Inaciolandia',
      slug: 'inaciolandia',
      description: 'Cobertura de apoio para deslocamentos e socorro rapido.',
      href: '/rotas/inaciolandia/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Itumbiara',
      slug: 'itumbiara',
      description: 'Cidade estrategica para conexao regional com a area de fronteira.',
      href: '/rotas/itumbiara/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Uberlandia',
      slug: 'uberlandia',
      description: 'Cobertura ampliada para demandas urbanas e deslocamentos mais longos.',
      href: '/rotas/uberlandia/',
      type: 'cidade',
      highlighted: false
    },
    {
      name: 'Arapora',
      slug: 'arapora',
      description: 'Prioridade geo com foco em resposta imediata e contexto de rodovia.',
      href: '/rotas/arapora/',
      type: 'cidade',
      highlighted: false
    }
  ]
};
