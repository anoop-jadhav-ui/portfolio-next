import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

export const DummyImage = () => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{ height: 200, background: theme.palette.grey["300"] }}
    />
  );
};

export default function RecentArticleCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CardMedia>
              <DummyImage />
            </CardMedia>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Blog Title asdasd asd asdasdasdasdasd asda sd
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary">
              23 Jan 2023
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
