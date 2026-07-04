import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { siteConfigTemplate } from "../config/site.config";
import { seoConfigTemplate } from "../config/seo.config";
import "./globals.css";

const robots = seoConfigTemplate.indexable
  ? { index: true, follow: true }
  : { index: false, follow: false };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfigTemplate.siteUrl),
  title: {
    default: seoConfigTemplate.defaultTitle,
    template: seoConfigTemplate.titleTemplate
  },
  description: seoConfigTemplate.defaultDescription,
  alternates: {
    canonical: "/"
  },
  robots,
  icons: {
    icon: [{ url: "/images/master-guincho-logo.png", type: "image/png" }],
    apple: [{ url: "/images/master-guincho-logo.png", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    url: siteConfigTemplate.siteUrl,
    siteName: siteConfigTemplate.siteName,
    title: seoConfigTemplate.defaultTitle,
    description: seoConfigTemplate.defaultDescription,
    type: seoConfigTemplate.openGraph.type,
    locale: seoConfigTemplate.openGraph.locale,
    images: [
      {
        url: seoConfigTemplate.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfigTemplate.siteName
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
