import BlogPageHeader from "@/components/BlogPageHeader/BlogPageHeader";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HighlightedBlog from "@/components/HighlightedBlog/HighlightedBlog";
import RecentArticleCard from "@/components/RecentArticleCard/RecentArticleCard";
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";

export default function Blogs() {
  const theme = useTheme();
  return (
    <Stack>
      <Header />
      <BlogPageHeader />
      <Box sx={{ background: theme.palette.grey[100], py: 4 }}>
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
