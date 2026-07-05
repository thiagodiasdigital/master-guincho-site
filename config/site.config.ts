export type SiteConfigTemplate = {
  brandName: string;
  legalName: string;
  document: string;
  siteUrl: string;
  siteName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  serviceAreas: string[];
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    x: string;
    pinterest: string;
  };
  googleBusinessUrl: string;
  googleReviewsUrl: string;
  navItems: Array<{ label: string; href: string }>;
  primaryCta: {
    label: string;
    message: string;
    trackingType: "whatsapp" | "phone" | "email" | "google_business";
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  footerDescription: string;
};

export const siteConfigTemplate: SiteConfigTemplate = {
  brandName: "Master Guincho",
  legalName: "",
  document: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://master-guincho.vercel.app",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Master Guincho",
  phone: "(34) 99973-9261",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`
    : "https://wa.me/5534999739261",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  address: {
    street: "Av. Nivaldo Inacio Moreira, 3211 - CS - Lagoa Azul",
    city: "Ituiutaba",
    state: "MG",
    postalCode: "38307-178",
    country: "BR"
  },
  serviceAreas: [
    "Ituiutaba",
    "Capinopolis",
    "Gurinhata",
    "Canapolis",
    "Ipiacu",
    "Cachoeira Dourada",
    "Santa Vitoria",
    "Monte Alegre de Minas",
    "Campina Verde",
    "Arapora",
    "Itumbiara",
    "Uberlandia",
    "Inaciolandia"
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/masterguincho/",
    facebook: "https://www.facebook.com/profile.php?id=100066734894108&mibextid=ZbWKwL",
    linkedin: "",
    youtube: "",
    tiktok: "",
    x: "",
    pinterest: ""
  },
  googleBusinessUrl:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "https://maps.app.goo.gl/wo5rU1Qz639VfnRw9",
  googleReviewsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "https://maps.app.goo.gl/wo5rU1Qz639VfnRw9",
  navItems: [
    { label: "Início", href: "#inicio" },
    { label: "Vitrine", href: "/vitrine/" },
    { label: "Frota", href: "#frota" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Serviços", href: "/servicos/" },
    { label: "Cobertura", href: "#cobertura" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" }
  ],
  primaryCta: {
    label: "Chamar guincho agora",
    message: "Olá, preciso de um guincho agora.",
    trackingType: "whatsapp"
  },
  secondaryCta: {
    label: "Ver cobertura",
    href: "#cobertura"
  },
  footerDescription: "Atendimento 24h em Ituiutaba e região com guincho, reboque, auto socorro e táxi."
};
