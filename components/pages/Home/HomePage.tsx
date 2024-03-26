import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import Summary from "@/components/molecules/Summary/Summary";
import RecentArticles from "@/components/organisms/RecentArticles/RecentArticles";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack>
      <Header />
      <Summary />
      <RecentArticles />
      <Footer />
    </Stack>
  );
};

export default HomePage;
