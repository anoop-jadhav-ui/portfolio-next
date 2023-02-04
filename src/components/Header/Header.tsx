import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import AlertBanner from "../AlertBanner/AlertBanner";
import Logo from "../Logo/Logo";
import S from "./Header.module.css";

interface MenuItem {
  name: string;
  path: string;
}
export const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "About me",
    path: "/about-me",
  },
];

export default function Header() {
  return (
    <Container maxWidth="lg" component="header">
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
                {menuItems.map((menu) => (
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
    </Container>
  );
}
