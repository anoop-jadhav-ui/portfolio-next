import { Button, Grid, Typography } from "@mui/material";
import Link from "../Link/Link";
import { useTranslations } from "next-intl";

const PageNotFound = () => {
  const t = useTranslations();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">{t("common.errors.pageNotFound")}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="/">
          <Button variant="outlined">{t("common.redirectToHomePage")}</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
