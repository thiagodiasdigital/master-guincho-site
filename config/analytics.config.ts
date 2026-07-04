export type AnalyticsConfigTemplate = {
  gtmId: string;
  ga4Id: string;
  enableAnalytics: boolean;
  trackWhatsappClicks: boolean;
  trackPhoneClicks: boolean;
  trackEmailClicks: boolean;
  trackGoogleBusinessClicks: boolean;
};

export const analyticsConfigTemplate: AnalyticsConfigTemplate = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  enableAnalytics: Boolean(process.env.NEXT_PUBLIC_GTM_ID || process.env.NEXT_PUBLIC_GA4_ID),
  trackWhatsappClicks: true,
  trackPhoneClicks: true,
  trackEmailClicks: true,
  trackGoogleBusinessClicks: true
};
