import Certifications from "@/components/molecules/AboutMe/Certifications";
import Education from "@/components/molecules/AboutMe/Education";
import Hobbies from "@/components/molecules/AboutMe/Hobbies";
import { SummarySection } from "@/components/molecules/AboutMe/SummarySection";
import WorkExperience from "@/components/molecules/AboutMe/WorkExperience";
import AboutMePageHeader from "@/components/molecules/AboutMePageHeader/AboutMePageHeader";
import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import { useProfileDataContext } from "@/contexts/ProfileDataContext";
import fetchProfileData from "@/helpers/fetchProfileData";
import { ProfileData } from "@/types/profileDataTypes";
import { Box, Stack, useTheme } from "@mui/material";
import { useEffect } from "react";

export default function AboutMe({ profileData }: { profileData: ProfileData }) {
  const theme = useTheme();
  const { loadProfileData } = useProfileDataContext();

  useEffect(() => {
    (async () => {
      const profileData = await fetchProfileData();
      loadProfileData(profileData);
    })();
  }, [loadProfileData]);

  return (
    <Stack>
      <Header />
      <AboutMePageHeader />
      <Box component="div" sx={{ bgcolor: theme.palette.grey[100], py: 4 }}>
        <SummarySection />
      </Box>
      <Box component="div" sx={{ py: 4 }}>
        <WorkExperience />
      </Box>
      <Box
        component="div"
        sx={{ background: theme.palette.grey[100], pt: 4, pb: 8 }}
      >
        <Education />
      </Box>
      <Box component="div" sx={{ py: 4 }}>
        <Certifications />
      </Box>
      <Box
        component="div"
        sx={{ background: theme.palette.grey[100], pt: 4, pb: 8 }}
      >
        <Hobbies />
      </Box>
      <Footer />
    </Stack>
  );
}

// AboutMe.getInitialProps = async () => {
//   const profileData = await fetchProfileData();
//   return { profileData };
// };
