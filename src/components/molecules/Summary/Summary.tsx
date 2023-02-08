import AnimatedBlob from "@/components/atoms/Blob/AnimatedBlob";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Box,
  Button,
  colors,
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
    <Box className={S.summaryContainer}>
      <Container component="article" maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={6} className={S.SummaryContent}>
            <Stack sx={{ pl: 4 }}>
              <Typography variant="h5" color="text.secondary">
                Hello, I am
              </Typography>
              <Typography variant="h1" color="text.primary" fontSize={64}>
                Anoop Jadhav
              </Typography>
              <Typography variant="h2" color="primary" fontSize={32}>
                UI Developer
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
            <AnimatedBlob
              classname={S.blob}
              bgColor={colors.red[100]}
              width={900}
              height={500}
              duration={10000}
            />

            <Image
              className={S.profilePic}
              src="/assets/images/ProfilePic.png"
              alt="profile picture"
              width={560}
              height={625}
              quality={70}
              priority={true}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
