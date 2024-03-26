import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, locales } from "./utils/translationsUtils";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();
  return {
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
