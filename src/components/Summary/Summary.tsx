import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import S from "./summary.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Summary() {
  return (
    <Container component="article">
      <Grid container sx={{ pt: 8, pb: 12 }} maxWidth="lg">
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Stack sx={{ p: 1 }}>
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
                >
                  Know Me
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
