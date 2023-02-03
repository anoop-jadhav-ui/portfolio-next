import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { DummyImage } from "../RecentArticleCard/RecentArticleCard";

export default function HighlightedRecentArticle() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={1} alignItems="flex-start" flexWrap="wrap">
          <Grid item xs={6}>
            <CardMedia>
              <DummyImage />
            </CardMedia>
          </Grid>
          <Grid item xs={6} sx={{ pt: 1, pb: 1 }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="text.secondary">
                  23 Jan 2023
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ pt: 0.5 }}>
                  Lorem ipsum dolor sit amet consectetur. Orci gravida cras
                  ultrices eget ultrices bibendum enim id a. Gravida scelerisque
                  id vitae orci. Morbi sagittis porta blandit interdum at odio
                  egestas. Mattis lectus mauris pulvinar amet turpis aliquam in
                  at risus. In in vitae eget sed velit scelerisque quis
                  vulputate. Mattis eget eu mollis vel pretium. At dolor mauris
                  mauris interdum leo.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
