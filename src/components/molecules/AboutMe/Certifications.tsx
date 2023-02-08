import { useProfileDataContext } from "@/contexts/ProfileDataContext";
import { CertificateDetails } from "@/types/profileDataTypes";
import { Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export const CertificationDetails = ({
  certification,
}: {
  certification: CertificateDetails;
}) => {
  const theme = useTheme();

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Typography variant="h5" color="text.primary" sx={{ pt: 1 }}>
          <Link href={certification.urlToCertificate} target="_blank">
            {certification.name}
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="body1" color="text.secondary">
            {certification.summary}
          </Typography>
          <Typography variant="body1" color="text.secondary"></Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default function Certifications() {
  const {
    profileData: { certifications },
  } = useProfileDataContext();
  return (
    <Container component="article">
      <Stack>
        <Typography variant="h3" color="primary" sx={{ pt: 1 }}>
          Certifications
        </Typography>
        <Grid container spacing={1} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h3" color="text.secondary">
              Design
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {certifications.design.map((certification) => {
                return (
                  <Grid key={certification.name} item xs={6}>
                    <CertificationDetails certification={certification} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h3" color="text.secondary">
              Development
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {certifications.development.map((certification) => {
                return (
                  <Grid key={certification.name} item xs={6}>
                    <CertificationDetails certification={certification} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
