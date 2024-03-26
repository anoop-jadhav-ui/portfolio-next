import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { Locale, locales } from "./utils/translationsUtils";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: Locale.enIN,
  localeDetection: true,
  // localePrefix: 'as-needed' //FIXME default language should not generate a pathname
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldHandle =
    pathname === "/" ||
    new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname,
    );
  if (!shouldHandle) return;

  return intlMiddleware(request);
}
