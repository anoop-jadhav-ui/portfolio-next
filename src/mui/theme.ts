import { colors } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Poppins, Zilla_Slab } from "@next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla",
});

const PRIMARY_COLOR = colors.red[500];

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: PRIMARY_COLOR,
        },
        text: {
          primary: "black",
          secondary: colors.grey[400],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: PRIMARY_COLOR,
        },
        text: {
          primary: "white",
          secondary: colors.grey[600],
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
    h1: {
      fontFamily: zillaSlab.style.fontFamily,
      fontWeight: "bold",
      fontSize: 44,
    },
    h2: {
      fontFamily: zillaSlab.style.fontFamily,
      fontWeight: "bold",
      fontSize: 32,
    },
    h3: {
      fontFamily: zillaSlab.style.fontFamily,
      fontWeight: "bold",
      fontSize: 28,
    },
    h4: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: "bold",
      fontSize: 28,
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: "bold",
      fontSize: 24,
    },
    h6: {
      fontFamily: zillaSlab.style.fontFamily,
      fontWeight: "bold",
      fontSize: 18,
    },
    subtitle1: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: "bold",
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: zillaSlab.style.fontFamily,
      fontWeight: "bold",
      fontSize: 20,
    },
    caption: {
      fontSize: 14,
    },
    body1: {
      fontFamily: poppins.style.fontFamily,
      fontSize: 16,
    },
    body2: {
      fontFamily: zillaSlab.style.fontFamily,
      fontSize: 16,
    },
  },
  spacing: 16,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textDecoration: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

//@ts-ignore
theme.typography.fontFamilyHeader = zillaSlab.style.fontFamily;

export default theme;
