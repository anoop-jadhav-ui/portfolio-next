import { Locale } from "@/utils/translationsUtils";
import { generateUIRoute, UIRoutes } from "@/utils/uiRoutes";
import { useLocale } from "next-intl";
import { HeaderMenuItem } from "./Header";

const useHeaderMenuItems = (): HeaderMenuItem[] => {
  const locale = useLocale() as Locale;
  return [
    {
      name: "Home",
      path: generateUIRoute(locale, UIRoutes.home),
    },
    {
      name: "Blogs",
      path: generateUIRoute(locale, UIRoutes.blogs),
    },
    {
      name: "About me",
      path: generateUIRoute(locale, UIRoutes.aboutMe),
    },
  ];
};

export default useHeaderMenuItems;
