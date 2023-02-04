import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RecentArticles from "@/components/RecentArticles/RecentArticles";
import Summary from "@/components/Summary/Summary";
import { AlertBannerContextProvider } from "@/contexts/AlertBannerContext";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <Stack>
      <AlertBannerContextProvider>
        <Header />
        <Summary />
        <RecentArticles />
        <Footer />
      </AlertBannerContextProvider>
    </Stack>
  );
};

export default App;
