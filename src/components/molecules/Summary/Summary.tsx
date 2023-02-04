import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import S from "./Summary.module.css";
export default function Summary() {
  const theme = useTheme();
  return (
    <Container component="article" maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item xs={6} className={S.SummaryContent}>
          <Stack sx={{ pl: 4 }}>
            <Typography variant="h5" color="text.secondary">
              Hello,
            </Typography>
            <Typography variant="h1" color="text.primary" fontSize={44}>
              I am Anoop Jadhav
            </Typography>
            <Typography variant="h2" color="primary" fontSize={32}>
              UI Developer
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ mt: 1 }}
              className={S.bodyText}
            >
              with 5 years of experience in UI Development and Design using
              tools and technologies like HTML, CSS, JavaScript, Vue Js,
              Salesforce Lightning, Adobe Illustrator, Figma, Sketch and
              Invision.
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  endIcon={<FileDownloadIcon />}
                  color="primary"
                  variant="contained"
                  disableElevation
                  sx={{ mt: 2 }}
                  size="large"
                >
                  Download CV
                </Button>
              </Grid>
              <Grid item>
                <Button
                  endIcon={<ArrowRightAltIcon />}
                  color="primary"
                  variant="outlined"
                  disableElevation
                  sx={{ mt: 2 }}
                  size="large"
                >
                  Know Me
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={6} className={S.profilePicWrapper}>
          <Image
            className={S.blob}
            src="/assets/images/blob.svg"
            width={850}
            height={759}
            alt="Profile picture blob"
          />
          <Image
            className={S.profilePic}
            src="/assets/images/ProfilePic.png"
            alt="profile picture"
            width={560}
            height={625}
          />
        </Grid>
      </Grid>
    </Container>
  );
}