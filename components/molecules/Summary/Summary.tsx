import PageContainer from "@/components/atoms/PageContainer/PageContainer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import S from "./Summary.module.css";

export default function Summary() {
  return (
    <Box component="div" className={S.summaryContainer}>
      <PageContainer component="article">
        <Grid container alignItems="center">
          <Grid item xs={8} className={S.SummaryContent}>
            <Stack sx={{ pl: 0 }}>
              <Typography
                variant="h3"
                color="text.primary"
                fontSize={80}
                lineHeight={1}
              >
                Crafting Intuitive Interfaces for the Digital World
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={24}
                lineHeight={1.3}
                pt={1}
              >
                I can turn your Ideas into Innovative Web Apps.
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    endIcon={<ArticleOutlinedIcon />}
                    color="primary"
                    variant="contained"
                    disableElevation
                    sx={{ mt: 2 }}
                    size="large"
                  >
                    Resume
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
          <Grid item xs={4}>
            {/* <PortfolioModel /> */}
          </Grid>
        </Grid>
      </PageContainer>
    </Box>
  );
}
