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
      "Ituiutaba é a base da operação e as cidades vizinhas entram conforme a localidade, a ocorrência e o destino informado."
  },
  items: [
    {
      name: "Ituiutaba",
      slug: "ituiutaba",
      description: "Base principal da Master Guincho, com atendimento local e regional.",
      href: "/rotas/ituiutaba/",
      type: "cidade",
      highlighted: true
    },
    {
      name: "Capinópolis",
      slug: "capinopolis",
      description: "Atendimento regional para quem precisa de guincho, reboque ou auto socorro na cidade ou na rodovia.",
      href: "/rotas/capinopolis/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Gurinhatã",
      slug: "gurinhata",
      description: "Apoio para ocorrências locais, deslocamentos curtos e transporte seguro.",
      href: "/rotas/gurinhata/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Canápolis",
      slug: "canapolis",
      description: "Cidade atendida no eixo regional do Triângulo Mineiro.",
      href: "/rotas/canapolis/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Ipiaçu",
      slug: "ipiacu",
      description: "Atendimento de apoio para deslocamentos, panes e retirada de veículos.",
      href: "/rotas/ipiacu/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Cachoeira Dourada",
      slug: "cachoeira-dourada-mg",
      description: "Suporte para ocorrências urbanas e regionais no lado mineiro da cobertura.",
      href: "/rotas/cachoeira-dourada-mg/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Santa Vitória",
      slug: "santa-vitoria",
      description: "Atendimento regional para quem precisa de retirada ou apoio imediato.",
      href: "/rotas/santa-vitoria/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Monte Alegre de Minas",
      slug: "monte-alegre-de-minas",
      description: "Cidade atendida para assistência, reboque e deslocamentos combinados.",
      href: "/rotas/monte-alegre-de-minas/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Campina Verde",
      slug: "campina-verde",
      description: "Cobertura regional para veículos leves, utilitários e transporte seguro.",
      href: "/rotas/campina-verde/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Cachoeira Dourada GO",
      slug: "cachoeira-dourada-go",
      description: "Atendimento no lado goiano da área atendida, conforme a ocorrência.",
      href: "/rotas/cachoeira-dourada-go/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Inaciolândia",
      slug: "inaciolandia",
      description: "Apoio para deslocamentos, socorro rápido e remoção de veículos.",
      href: "/rotas/inaciolandia/",
      type: "cidade",
      highlighted: false
    },
    {
      name: "Itumbiara",
      slug: "itumbiara",
      description: "Cidade estratégica para atendimento regional e deslocamentos entre cidades.",
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
      description: "Atendimento com foco em resposta rápida, rodovia e urgência.",
      href: "/rotas/arapora/",
      type: "cidade",
      highlighted: false
    }
  ]
};
