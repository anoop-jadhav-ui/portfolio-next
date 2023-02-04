import { useAlertBanner } from "@/contexts/AlertBannerContext";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import {
  CircularProgress,
  Container,
  Fab,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Copyright from "../Copyright/Copyright";
import { menuItems } from "../Header/Header";
import S from "./Footer.module.css";

export function SocialIcons() {
  return (
    <Stack direction="row" sx={{ pt: 2, position: "relative", left: -12 }}>
      <IconButton>
        <InstagramIcon color="primary" />
      </IconButton>
      <IconButton>
        <LinkedInIcon color="primary" />
      </IconButton>
      <IconButton>
        <GitHubIcon color="primary" />
      </IconButton>
      <IconButton>
        <AlternateEmailIcon color="primary" />
      </IconButton>
    </Stack>
  );
}

export default function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const { showBanner } = useAlertBanner();

  const sendMessage = async () => {
    try {
      setIsSendingMessage(true);
      const res = await fetch(process.env.NEXT_PUBLIC_MAIL_SERVER_URL!, {
        method: "POST",
        body: JSON.stringify({
          userEmail: "anoopjadhav@gmail.com",
          userMessage: message,
          userName: name,
        }),
        headers: {
          "Context-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const response = await res.json();
      if (response.msg === "success") {
        showBanner("Message sent successfully!", "success");
      } else {
        showBanner(
          "Failed to send the message. Please try again later.",
          "error"
        );
      }
    } catch (e) {
      showBanner("Failed to send the message.", "error");
      console.log(e);
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <Container component="footer">
      <Grid container sx={{ pt: 8, pb: 3 }} maxWidth="lg">
        <Grid item xs={6}>
          <Stack>
            <Typography variant="h3">Anoop Jadhav</Typography>
            <Typography variant="h3" sx={{ pt: 0.5 }} color="text.secondary">
              {"Let's create a better UI."}
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
          <Stack spacing={0.5}>
            <Typography variant="subtitle2">Contact me</Typography>

            <TextField
              value={name}
              label="Your name"
              id="feedback-name"
              size="small"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={message}
              id="feedback-body"
              multiline
              rows={3}
              label="Your message"
              placeholder=""
              onChange={(e) => setMessage(e.target.value)}
              helperText="Feel free to share a constructive feedback."
            />
            <Grid container justifyContent="flex-end">
              <Fab
                disabled={!(name && message)}
                size="small"
                aria-label="send"
                onClick={sendMessage}
                color="primary"
              >
                {isSendingMessage ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <SendIcon color="inherit" fontSize="inherit" />
                )}
              </Fab>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
