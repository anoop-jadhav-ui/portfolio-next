import { SocialIcons } from "components/atoms/SocialIcons/SocialIcons";
import { useProfileDataContext } from "contexts/ProfileDataContext";
import { Chip, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import { useMemo } from "react";

export function SummarySection() {
  const {
    profileData: { overview, experience, skills },
  } = useProfileDataContext();

  const totalExperience = useMemo((): string => {
    try {
      return experience
        .map((exp) => {
          const fromDate = moment(exp.fromDate);
          const toDate =
            exp.toDate !== "Present" ? moment(exp.toDate) : moment();
          return moment(toDate).diff(fromDate, "year", true);
        })
        .reduce((a, b) => a + b)
        .toFixed(1);
    } catch (err) {
      return String(moment().year() - 2014);
    }
  }, [experience]);

  const allSkills = [
    ...skills.development.map((skill) => skill.skillName),
    ...skills.design.map((skill) => skill.skillName),
  ];

  return (
    <Container component="article">
      <Grid container spacing={2} alignItems="center" flexWrap="nowrap">
        <Grid item>
          <Image
            src="/assets/images/AboutMePic.png"
            width={350}
            height={350}
            alt="profile pic"
            priority={true}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="h2" color="text.primary" sx={{ pt: 1 }}>
                {overview.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" fontSize={20} color="text.primary">
                {parse(
                  overview.summary.replace(
                    "{totalYearsOfExperience}",
                    totalExperience,
                  ),
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={0.5} sx={{ pt: 0.5 }}>
                {allSkills.map((skill) => (
                  <Grid item key={skill}>
                    <Chip
                      label={skill}
                      variant="filled"
                      size="small"
                      color="default"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <SocialIcons />
        </Grid>
      </Grid>
    </Container>
  );
}
