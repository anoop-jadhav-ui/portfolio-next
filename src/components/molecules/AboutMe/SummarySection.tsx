import parse from "html-react-parser";
import { SocialIcons } from "@/components/atoms/SocialIcons/SocialIcons";
import { useProfileDataContext } from "@/contexts/ProfileDataContext";
import { Container, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useMemo } from "react";
import { DummyImage } from "../RecentArticleCard/RecentArticleCard";
import Image from "next/image";

export function SummarySection() {
  const {
    profileData: { overview, experience },
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

  return (
    <Container component="article">
      <Grid container spacing={2} alignItems="center" flexWrap="nowrap">
        <Grid item>
          <Image
            src="/assets/images/AboutMePic.png"
            width={512 / 1.5}
            height={587 / 1.5}
            alt="profile pic"
          />
        </Grid>
        <Grid item>
          <Typography variant="h2" color="text.primary" sx={{ pt: 1 }}>
            {overview.name}
          </Typography>
          <Typography
            variant="body1"
            fontSize={20}
            color="text.primary"
            sx={{ pt: 1 }}
          >
            {parse(
              overview.summary.replace(
                "{totalYearsOfExperience}",
                totalExperience
              )
            )}
          </Typography>
          <SocialIcons />
        </Grid>
      </Grid>
    </Container>
  );
}
