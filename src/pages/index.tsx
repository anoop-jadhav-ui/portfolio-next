import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RecentArticles from "@/components/RecentArticles/RecentArticles";
import Summary from "@/components/Summary/Summary";
import { analytics } from "@/helpers/firebaseApp";
import { logEvent } from "@firebase/analytics";
import { Stack } from "@mui/material";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (analytics) logEvent(analytics, "nextjs_app_loaded");
  }, []);
  return (
    <Stack>
      <Header />
      <Summary />
      <RecentArticles />
      <Footer />
    </Stack>
  );
};

export default App;
