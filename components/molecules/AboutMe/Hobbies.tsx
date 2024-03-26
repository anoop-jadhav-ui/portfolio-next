import { useProfileDataContext } from "contexts/ProfileDataContext";
import { Container, Grid, Stack, Typography } from "@mui/material";

export default function Hobbies() {
  const {
    profileData: { hobbies },
  } = useProfileDataContext();
  return (
    <Container component="article">
      <Stack>
        <Typography variant="h3" color="primary" sx={{ pt: 1 }}>
          Hobbies & Interests
        </Typography>
        <Grid container spacing={1}>
          {hobbies.map((hobby) => {
            return (
              <Grid key={hobby.name} item xs={6}>
                <Grid container spacing={0.5}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      color="text.primary"
                      sx={{ pt: 1 }}
                    >
                      {hobby.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="text.primary">
                      {hobby.summary}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
