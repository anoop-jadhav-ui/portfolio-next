import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

interface CopyrightType {
  sx: SxProps<Theme>;
}
export default function Copyright({ sx }: CopyrightType) {
  return (
    <Typography variant="body1" color="text.secondary" sx={sx && { ...sx }}>
      {`All rights reserved © Anoop Jadhav ${new Date().getFullYear()}`}
    </Typography>
  );
}
