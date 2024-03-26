import { Container, Grid, Stack, Typography } from "@mui/material";
import { useProfileDataContext } from "contexts/ProfileDataContext";
import { EducationDetails } from "types/profileDataTypes";

export const EducationDetailsComponent = ({
  education,
}: {
  education: EducationDetails;
}) => (
  <Grid container spacing={0.5}>
    <Grid item xs={12}>
      <Typography variant="h5" color="text.primary" sx={{ pt: 1 }}>
        {education.institute}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" color="text.secondary">
        {education.type}
      </Typography>
    </Grid>
  </Grid>
);

export default function Education() {
  const {
    profileData: { education },
  } = useProfileDataContext();
  return (
    <Container component="article">
      <Stack>
        <Typography variant="h3" color="primary" sx={{ pt: 1 }}>
          Education
        </Typography>
        <Grid container spacing={1}>
          {education.map((education) => {
            return (
              <Grid key={education.institute} item xs={6}>
                <EducationDetailsComponent education={education} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
