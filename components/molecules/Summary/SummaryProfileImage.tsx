import AnimatedBlob from "components/atoms/Blob/AnimatedBlob";
import { Grid, colors } from "@mui/material";
import Image from "next/image";
import S from "./SummaryProfileImage.module.css";

export default function SummaryProfileImage() {
  return (
    <Grid item xs={6} className={S.profilePicWrapper}>
      <AnimatedBlob
        classname={S.blob}
        bgColor={colors.red[100]}
        width={900}
        height={500}
        duration={10000}
      />

      <Image
        className={S.profilePic}
        src="/assets/images/ProfilePic.png"
        alt="profile picture"
        width={560}
        height={625}
        quality={70}
        priority={true}
      />
    </Grid>
  );
}
