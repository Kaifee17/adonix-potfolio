import "server-only";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const dictionaries = {
  ar: () => import("@/messages/ar.json").then((module) => module.default),
  en: () => import("@/messages/en.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;
export function getDictionary(locale: Locale) { return dictionaries[locale](); }
