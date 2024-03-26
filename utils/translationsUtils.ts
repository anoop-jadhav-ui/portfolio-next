export const Locale = {
  enIN: "en-IN",
  hiIN: "hi-IN",
  guIN: "gu-IN",
  mrIN: "mr-IN",
} as const;

export const locales = Object.values(Locale);
export type Locale = (typeof Locale)[keyof typeof Locale];
