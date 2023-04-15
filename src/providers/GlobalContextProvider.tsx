import { AlertBannerContextProvider } from "@/contexts/AlertBannerContext";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import { ProfileDataContextProvider } from "@/contexts/ProfileDataContext";
import { ReactNode } from "react";

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProfileDataContextProvider>
      <AlertBannerContextProvider>{children}</AlertBannerContextProvider>
    </ProfileDataContextProvider>
  );
}
