import { AlertBannerContextProvider } from "@/contexts/AlertBannerContext";
import { ProfileDataContextProvider } from "@/contexts/ProfileDataContext";

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileDataContextProvider>
      <AlertBannerContextProvider>{children}</AlertBannerContextProvider>
    </ProfileDataContextProvider>
  );
}
