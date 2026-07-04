export type JsonLdValue = Record<string, unknown> | readonly unknown[];

export function safeJsonLdStringify(data: JsonLdValue): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
