import { Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ContactMeForm from "../../organisms/ContactMeForm/ContactMeForm";
import Copyright from "../../atoms/Copyright/Copyright";
import { menuItems } from "../Header/Header";
import { SocialIcons } from "../../atoms/SocialIcons/SocialIcons";
import S from "./Footer.module.css";

export default function Footer() {
  return (
    <Container component="footer">
      <Grid container sx={{ pt: 8, pb: 3 }} maxWidth="lg">
        <Grid item xs={6}>
          <Stack>
            <Typography variant="h3">Anoop Jadhav</Typography>
            <Typography variant="h3" sx={{ pt: 0.5 }} color="text.secondary">
              {"Let's create better UI."}
            </Typography>
            <SocialIcons />
            <Copyright sx={{ pt: 8 }} />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={0.5}>
            <Typography variant="subtitle2">Sitemap</Typography>
            {menuItems.map((menu) => (
              <Link href={menu.path} key={menu.name} className={S.link}>
                <Typography variant="body1" color="text.primary">
                  {menu.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <ContactMeForm />
        </Grid>
      </Grid>
    </Container>
  );
}
