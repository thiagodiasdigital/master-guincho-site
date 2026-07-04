type WebSiteSchemaParams = {
  siteId: string;
  siteName: string;
  siteUrl: string;
  language?: string;
};

type WebPageSchemaParams = {
  pageId: string;
  pageName: string;
  pageUrl: string;
  siteId: string;
  description: string;
  language?: string;
};

type SchemaListItem = {
  name: string;
  url?: string;
  description?: string;
};

type ItemListSchemaParams = {
  listId: string;
  listName: string;
  items: SchemaListItem[];
  siteUrl: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type BusinessSchemaParams = {
  name: string;
  legalName?: string;
  url: string;
  telephone?: string;
  email?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed?: string[];
};

type HomeJsonLdParams = {
  siteUrl: string;
  siteName: string;
  pageDescription: string;
  business?: BusinessSchemaParams;
  showcase: {
    name: string;
    items: SchemaListItem[];
  };
  services: {
    name: string;
    items: SchemaListItem[];
  };
  locations: {
    name: string;
    items: SchemaListItem[];
  };
  faqItems: FaqItem[];
  breadcrumbItems: BreadcrumbItem[];
};

function createThingSchema(item: SchemaListItem, fallbackUrl: string) {
  const thing: Record<string, unknown> = {
    "@type": "Thing",
    name: item.name,
    url: item.url ?? fallbackUrl
  };

  if (item.description) {
    thing.description = item.description;
  }

  return thing;
}

function createBusinessSchema(business: BusinessSchemaParams) {
  return {
    "@type": ["LocalBusiness", "AutomotiveBusiness", "TowingService"],
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    telephone: business.telephone,
    email: business.email || undefined,
    sameAs: business.sameAs?.filter(Boolean),
    address: business.address
      ? {
          "@type": "PostalAddress",
          ...business.address
        }
      : undefined,
    areaServed: business.areaServed?.map((item) => ({
      "@type": "Place",
      name: item
    }))
  };
}

export function createWebSiteSchema({
  siteId,
  siteName,
  siteUrl,
  language = "pt-BR"
}: WebSiteSchemaParams) {
  return {
    "@type": "WebSite",
    "@id": siteId,
    name: siteName,
    url: siteUrl,
    inLanguage: language
  };
}

export function createWebPageSchema({
  pageId,
  pageName,
  pageUrl,
  siteId,
  description,
  language = "pt-BR"
}: WebPageSchemaParams) {
  return {
    "@type": "WebPage",
    "@id": pageId,
    name: pageName,
    url: pageUrl,
    isPartOf: {
      "@id": siteId
    },
    description,
    inLanguage: language
  };
}

export function createItemListSchema({
  listId,
  listName,
  items,
  siteUrl
}: ItemListSchemaParams) {
  return {
    "@type": "ItemList",
    "@id": listId,
    name: listName,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: createThingSchema(item, siteUrl)
    }))
  };
}

export function createFAQPageSchema(faqItems: FaqItem[], faqId: string) {
  return {
    "@type": "FAQPage",
    "@id": faqId,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function createBreadcrumbListSchema(items: BreadcrumbItem[], breadcrumbId: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

export function createHomeJsonLd({
  siteUrl,
  siteName,
  pageDescription,
  business,
  showcase,
  services,
  locations,
  faqItems,
  breadcrumbItems
}: HomeJsonLdParams) {
  const siteId = `${siteUrl}/#website`;
  const pageId = `${siteUrl}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createWebSiteSchema({
        siteId,
        siteName,
        siteUrl
      }),
      createWebPageSchema({
        pageId,
        pageName: siteName,
        pageUrl: siteUrl,
        siteId,
        description: pageDescription
      }),
      ...(business
        ? [
            createBusinessSchema({
              ...business,
              url: siteUrl
            })
          ]
        : []),
      createItemListSchema({
        listId: `${siteUrl}/#showcase`,
        listName: showcase.name,
        items: showcase.items,
        siteUrl
      }),
      createItemListSchema({
        listId: `${siteUrl}/#services`,
        listName: services.name,
        items: services.items,
        siteUrl
      }),
      createItemListSchema({
        listId: `${siteUrl}/#locations`,
        listName: locations.name,
        items: locations.items,
        siteUrl
      }),
      createFAQPageSchema(faqItems, `${siteUrl}/#faq`),
      createBreadcrumbListSchema(breadcrumbItems, `${siteUrl}/#breadcrumb`)
    ]
  };
}
