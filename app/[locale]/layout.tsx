import GlobalContextProvider from "@/providers/GlobalContextProvider";
import type { Viewport } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";
import { poppins } from "../../theme/font";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// TODO Revist to enable static rendering -
// https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
