import { NextIntlClientProvider } from "next-intl";
import React from "react";
import enIN from "../translations/en-IN.json";

const TranslationProviderSeed = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextIntlClientProvider locale="en" messages={enIN}>
      {children}
    </NextIntlClientProvider>
  );
};

export default TranslationProviderSeed;
