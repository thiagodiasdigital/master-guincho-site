type BuildWhatsAppUrlParams = {
  phone: string;
  message?: string;
};

export function buildWhatsAppUrl({ phone, message }: BuildWhatsAppUrlParams) {
  const digits = phone.replace(/[^0-9]/g, "");
  const baseUrl = digits ? `https://wa.me/${digits}` : "https://wa.me/";

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
