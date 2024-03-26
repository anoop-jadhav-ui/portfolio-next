import Link from "@/components/atoms/Link/Link";
import PageContainer from "@/components/atoms/PageContainer/PageContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Typography } from "@mui/material";
import AlertBanner from "components/atoms/AlertBanner/AlertBanner";
import Logo from "components/atoms/Logo/Logo";
import S from "./Header.module.css";
import useHeaderMenuItems from "./useHeaderMenuItems";

export interface HeaderMenuItem {
  name: string;
  path: string;
}

export default function Header() {
  const menuItems = useHeaderMenuItems();

  return (
    <PageContainer component="header">
      <AlertBanner />
      <Grid
        container
        justifyContent="space-between"
        sx={{ py: 1 }}
        className={S.header}
      >
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <Grid item sx={{ pr: 4 }}>
              <Grid container className={S.navigation} spacing={2}>
                {menuItems.length > 0 &&
                  menuItems.map((menu) => (
                    <Grid item key={menu.name}>
                      <Link href={menu.path}>
                        <Typography variant="body1" color="text.primary">
                          {menu.name}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
