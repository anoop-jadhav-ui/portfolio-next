"use client";

import PageContainer from "@/components/atoms/PageContainer/PageContainer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import HighlightedRecentArticle from "components/molecules/HighlightedRecentArticle/HighlightedRecentArticle";
import RecentArticleCard from "components/molecules/RecentArticleCard/RecentArticleCard";
import Link from "next/link";

export default function RecentArticles() {
  const theme = useTheme();
  return (
    <Box component="article" sx={{ background: theme.palette.grey[100] }}>
      <PageContainer sx={{ py: 8 }}>
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
      </PageContainer>
    </Box>
  );
}
