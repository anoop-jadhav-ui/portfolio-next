import { useAlertBanner } from "@/contexts/AlertBannerContext";
import { Alert, Snackbar, useTheme } from "@mui/material";

const AlertBanner = () => {
  const theme = useTheme();
  const { messageComponent, severity, clearBanner, isBannerVisible } =
    useAlertBanner();

  return (
    <Snackbar
      open={isBannerVisible}
      onClose={clearBanner}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {isBannerVisible ? (
        <Alert
          variant="filled"
          severity={severity}
          onClose={clearBanner}
          sx={{ color: theme.palette.common.white }}
        >
          {messageComponent}
        </Alert>
      ) : (
        <div />
      )}
    </Snackbar>
  );
};

export default AlertBanner;
