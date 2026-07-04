export type LocationTemplateItem = {
  name: string;
  slug: string;
  description: string;
  href: string;
  type: "cidade" | "bairro" | "regiao" | "unidade" | "rota" | "area atendida";
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
    eyebrow: "Cobertura",
    title: "Cidades, áreas e regiões atendidas",
    description:
      "Cobertura da Master Guincho para cidades, bairros, regiões, unidades ou áreas atendidas."
  },
  items: [
    {
      name: "Ituiutaba",
      slug: "ituiutaba",
      description: "Cidade-base da operação e ponto principal de atendimento.",
      href: "/rotas/ituiutaba/",
      type: "cidade",
      highlighted: true
    },
    {
      name: "Capinópolis",
      slug: "capinopolis",
      description: "Cobertura regional com prioridade para demanda urbana e rodoviária.",
      href: "/rotas/capinopolis/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Gurinhatã",
      slug: "gurinhata",
      description: "Atendimento regional para ocorrências locais e deslocamentos.",
      href: "/rotas/gurinhata/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Canápolis",
      slug: "canapolis",
      description: "Cidade atendida em cobertura regional do Triângulo Mineiro.",
      href: "/rotas/canapolis/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Ipiaçu",
      slug: "ipiacu",
      description: "Atendimento de apoio para deslocamentos e ocorrências locais.",
      href: "/rotas/ipiacu/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Cachoeira Dourada",
      slug: "cachoeira-dourada-mg",
      description: "Cobertura mineira com suporte em ocorrências urbanas e regionais.",
      href: "/rotas/cachoeira-dourada-mg/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Santa Vitória",
      slug: "santa-vitoria",
      description: "Atendimento regional com foco em agilidade e contato rápido.",
      href: "/rotas/santa-vitoria/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Monte Alegre de Minas",
      slug: "monte-alegre-de-minas",
      description: "Cidade de cobertura para assistência e reboque sob demanda.",
      href: "/rotas/monte-alegre-de-minas/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Campina Verde",
      slug: "campina-verde",
      description: "Cobertura regional com apoio para veículos leves e utilitários.",
      href: "/rotas/campina-verde/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Cachoeira Dourada GO",
      slug: "cachoeira-dourada-go",
      description: "Atendimento regional no eixo goiano da área atendida.",
      href: "/rotas/cachoeira-dourada-go/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Inaciolândia",
      slug: "inaciolandia",
      description: "Cobertura de apoio para deslocamentos e socorro rápido.",
      href: "/rotas/inaciolandia/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Itumbiara",
      slug: "itumbiara",
      description: "Cidade estratégica para conexão regional com a área de fronteira.",
      href: "/rotas/itumbiara/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Uberlândia",
      slug: "uberlandia",
      description: "Cobertura ampliada para demandas urbanas e deslocamentos mais longos.",
      href: "/rotas/uberlandia/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Araporã",
      slug: "arapora",
      description: "Prioridade geo com foco em resposta imediata e contexto de rodovia.",
      href: "/rotas/arapora/",
      type: "cidade",
      highlighted: false
    }
  ]
};
