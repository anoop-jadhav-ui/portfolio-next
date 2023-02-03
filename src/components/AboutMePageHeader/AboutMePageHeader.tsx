import { Container, Stack, Typography } from "@mui/material";

export default function AboutMePageHeader() {
  return (
    <Container component="section" sx={{ p: 4 }}>
      <Stack>
        <Typography variant="h1" color="primary">
          About me
        </Typography>
      </Stack>
    </Container>
  );
}
