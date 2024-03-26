import { useProfileDataContext } from "contexts/ProfileDataContext";
import { ExperienceDetails } from "types/profileDataTypes";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment";
import { useMemo } from "react";

export const WorkDetails = ({
  experience,
}: {
  experience: ExperienceDetails;
}) => {
  const theme = useTheme();
  const totalExperience = useMemo(() => {
    const fromDate = moment(experience.fromDate);
    const toDate =
      experience.toDate !== "Present" ? moment(experience.toDate) : moment();

    const years = toDate.diff(fromDate, "year");
    fromDate.add(years, "years");
    const months = toDate.diff(fromDate, "months");
    fromDate.add(months, "months");

    let yearsOfExp = "";
    let monthsOfExp = "";

    if (years > 1) {
      yearsOfExp = `${years} years`;
    } else if (years === 1) {
      yearsOfExp = `${years} year`;
    }

    if (months > 1) {
      monthsOfExp = `${months} months`;
    } else if (months === 1) {
      monthsOfExp = `${years} month`;
    }

    return `${yearsOfExp} ${monthsOfExp}`;
  }, [experience.fromDate, experience.toDate]);

  function getFromToDates(fromDate: string, toDate: string): string {
    return `${fromDate.substring(3)} - ${
      toDate.includes("Present") ? toDate : toDate.substring(3)
    }`;
  }
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Typography variant="h5" color="text.primary" sx={{ pt: 1 }}>
          {experience.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="body1" color="text.secondary">
            {getFromToDates(experience.fromDate, experience.toDate)}
          </Typography>
          <Box
            component="div"
            sx={{
              backgroundColor: theme.palette.grey[400],
              width: 4,
              height: 4,
              borderRadius: "50%",
            }}
          />
          <Typography variant="body1" color="text.secondary">
            {totalExperience}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{experience.summary}</Typography>
      </Grid>
    </Grid>
  );
};

export default function WorkExperience() {
  const {
    profileData: { experience },
  } = useProfileDataContext();
  return (
    <Container component="article">
      <Stack>
        <Typography variant="h3" color="primary" sx={{ pt: 1 }}>
          Work Experience
        </Typography>
        <Grid container spacing={1}>
          {experience.map((exp) => {
            return (
              <Grid key={exp.name} item xs={6}>
                <WorkDetails experience={exp} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
