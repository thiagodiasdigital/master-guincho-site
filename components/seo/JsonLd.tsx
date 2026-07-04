import { safeJsonLdStringify, type JsonLdValue } from "@/lib/jsonld";

type JsonLdProps = {
  data?: JsonLdValue | null;
};

export function JsonLd({ data }: JsonLdProps) {
  if (!data) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(data) }}
    />
  );
}
