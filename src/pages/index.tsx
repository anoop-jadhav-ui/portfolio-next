import Footer from "@/components/molecules/Footer/Footer";

import RecentArticles from "@/components/organisms/RecentArticles/RecentArticles";
import Summary from "@/components/molecules/Summary/Summary";
// import { analytics } from "@/helpers/firebaseApp";
import { logEvent } from "@firebase/analytics";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import Header from "@/components/molecules/Header/Header";

const App = () => {
  useEffect(() => {
    // if (analytics) logEvent(analytics, "nextjs_app_loaded");
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
