import { ButtonBase, Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

interface LogoPropsType {
  size?: "small" | "medium" | "large";
}
export default function Logo({ size }: LogoPropsType) {
  const theme = useTheme();

  const fontSize = useMemo(() => {
    switch (size) {
      case "small":
        return 16;
      case "medium":
        return 20;
      case "large":
        return 32;
      default:
        return 20;
    }
  }, [size]);

  return (
    <Link href="/">
      <ButtonBase disableRipple disableTouchRipple>
        <Grid container alignItems="flex-end">
          <Grid item>
            <Typography variant="h5" fontSize={fontSize} color="text.primary">
              AnoopJadhav
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              variant="h5"
              fontSize={fontSize * 1.5}
              sx={{
                position: "relative",
                top: fontSize / 4,
              }}
            >
              .
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    </Link>
  );
}
