import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, IconButton } from "@mui/material";

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
