import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import HighlightedRecentArticle from "../HighlightedRecentArticle/HighlightedRecentArticle";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";
export default function RecentArticles() {
  const theme = useTheme();
  return (
    <Box component="article" sx={{ background: theme.palette.grey[100] }}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="caption" color="text.primary">
              Recent
            </Typography>
            <Typography variant="h2" color="primary">
              Articles
            </Typography>
          </Grid>
          <Grid item>
            <HighlightedRecentArticle />
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <RecentArticleCard />
              </Grid>
              <Grid item xs={4}>
                <RecentArticleCard />
              </Grid>
              <Grid item xs={4}>
                <RecentArticleCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ pt: 4 }}
        >
          <Grid item>
            <Link href={"/blogs"}>
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="primary"
                variant="outlined"
                disableElevation
                sx={{ mt: 2 }}
              >
                View All
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
