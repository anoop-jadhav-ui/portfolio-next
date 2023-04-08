import BlogPageHeader from "@/components/molecules/BlogPageHeader/BlogPageHeader";
import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import HighlightedBlog from "@/components/molecules/HighlightedBlog/HighlightedBlog";
import RecentArticleCard from "@/components/molecules/RecentArticleCard/RecentArticleCard";
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";

export default function Blogs() {
  const theme = useTheme();
  return (
    <Stack>
      <Header />
      <BlogPageHeader />
      <Box component="div" sx={{ background: theme.palette.grey[100], py: 4 }}>
        <Container component="article">
          <Grid container>
            <Grid item>
              <HighlightedBlog />
            </Grid>
            <Grid item>
              <Grid container sx={{ pt: 1 }} spacing={1}>
                {[...new Array(10)].map((article, index) => {
                  return (
                    <Grid item xs={6} key={String(index)}>
                      <RecentArticleCard />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
}
