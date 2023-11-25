import { createTheme } from "@mui/material/styles";

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  errorColor: "#DE3730",
  error90Color: "#FFDAD6",
  labtopPrimary: "#0DAE1D",
  textDefault: "#373535",
  textDisabled: "#8D8D8D",
  buttonDisabled: "#C0C0C0",
  backgroundGrey: "#B8B8B8",
  favoriteRed: "#D8322F",
  scrapStarYellow: "#FFC332",
  yellow: "#FFCA0E",
  searchBackgroundGrey: "#E6E8E9",
};

export const customTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.labtopPrimary,
    },
    secondary: {
      main: COLORS.yellow,
    },
    info: {
      main: COLORS.black,
    },
    error: {
      main: COLORS.errorColor,
    },
  },
  typography: {
    allVariants: {
      color: COLORS.textDefault,
    },
    body1: {
      color: COLORS.textDisabled,
    },
    h1: {
      fontWeight: 400,
      fontSize: 150,
    },
    h2: {
      fontWeight: 600,
      fontSize: 24,
    },
    h3: {
      fontWeight: 600,
      fontSize: 20,
    },
    h4: {
      fontWeight: 400,
      fontSize: 18,
    },
    h5: {
      fontWeight: 400,
      fontSize: 16,
    },
    h6: {
      fontWeight: 400,
      fontSize: 14,
    },
    m1: {
      fontWeight: 400,
      fontSize: 12,
    },
    q1: {
      fontWeight: 400,
      fontSize: 100,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
