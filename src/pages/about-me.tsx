import AboutMePageHeader from "@/components/AboutMePageHeader/AboutMePageHeader";
import Footer, { SocialIcons } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { DummyImage } from "@/components/RecentArticleCard/RecentArticleCard";
import { useProfileDataContext } from "@/contexts/ProfileDataContext";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const CompanyDetails = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" color="text.primary" sx={{ pt: 1 }}>
          Thoughtworks
        </Typography>
      </Grid>
      <Grid item xs={6}>
        May 2021 - Present
      </Grid>
      <Grid item xs={6}>
        1 year 8 months
      </Grid>
    </Grid>
  );
};
export default function Blogs() {
  const theme = useTheme();
  const { profileData } = useProfileDataContext();
  console.log(profileData);

  return (
    <Stack>
      <Header />
      <AboutMePageHeader />
      <Box sx={{ background: theme.palette.grey[100], py: 4 }}>
        <Container component="article">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DummyImage />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h2" color="text.primary" sx={{ pt: 1 }}>
                Anoop Jadhav
              </Typography>
              <Typography variant="h3" color="primary">
                UI Developer | Designer
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ pt: 1 }}>
                I am a UI Developer with an eye for design and a passion for
                creating user-friendly interfaces. I graduated as a computer
                science engineer in 2014 and since then have been honing my
                skills as a UI developer. My love of sketching and drawing has
                been a huge influence in my desire to create stunning and
                intuitive user experiences. I have had the opportunity to work
                with a range of different UI frameworks and libraries, such as
                React Js, React Native, Salesforce Aura Components, and
                Salesforce Lightning web components, to name a few.
              </Typography>
              <SocialIcons />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 4 }}>
        <Container component="article">
          <Stack>
            <Typography variant="h3" color="text.primary" sx={{ pt: 1 }}>
              Work Experience
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <CompanyDetails />
              </Grid>
              <Grid item xs={6}>
                <CompanyDetails />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
}
