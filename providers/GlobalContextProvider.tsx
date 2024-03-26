import { AlertBannerContextProvider } from "contexts/AlertBannerContext";
import { ProfileDataContextProvider } from "contexts/ProfileDataContext";
import { ReactNode } from "react";
import ThemeRegistry from "theme/ThemeRegistry";

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeRegistry>
      <ProfileDataContextProvider>
        <AlertBannerContextProvider>{children}</AlertBannerContextProvider>
      </ProfileDataContextProvider>
    </ThemeRegistry>
  );
}
