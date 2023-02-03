import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RecentArticles from "@/components/RecentArticles/RecentArticles";
import Summary from "@/components/Summary/Summary";
import { Stack } from "@mui/material";

const App = () => {
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
