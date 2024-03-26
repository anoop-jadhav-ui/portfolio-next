import { Locale } from "./translationsUtils";

export const UIRoutes = {
  home: "/",
  blogs: "/blogs",
  aboutMe: "/aboutme",
} as const;

export type UIRoutes = (typeof UIRoutes)[keyof typeof UIRoutes];

export function generateUIRoute(locale: Locale, uiRoute: UIRoutes) {
  return "/" + locale + uiRoute;
}

export function generateUIRouteWithSlug(
  locale: Locale,
  uiRoute: UIRoutes,
  slug: string,
) {
  return "/" + locale + uiRoute + "/" + slug;
}

export function getCurrentPathnameFromUrl(uiRoute: UIRoutes) {
  const items = uiRoute.split("/");
  return items[items.length - 1];
}
