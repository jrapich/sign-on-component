import { createTheme } from "@mui/material/styles";

//color palette object. customize the colors as you see fit
const colors = {
  silver: "#c2c2c2",
  jade: "#5bae6a",
  airForceBlue: "#597e9b",
  spaceCadetBlue: "#27293f",
  raisinBlack: "#181d27",
};

// Create our theme palette
let theme = createTheme({
  palette: {
    text: {
      main: colors.jade,
    },
    background: {
      main: colors.spaceCadetBlue,
    },
    primary: {
      main: colors.airForceBlue,
      contrastText: colors.jade,
    },
    secondary: {
      main: colors.raisinBlack,
      contrastText: colors.jade,
    },
    tertiary: {
      main: colors.silver,
    },
    accent: {
      main: colors.jade,
    },
  },
});

//create the theme with MUI
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // backgroundColor: theme.palette.background.main,
          // color: theme.palette.text.main,
        },
      },
    },
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: theme.palette.secondary.main,
    //     },
    //   },
    // },
    // MuiDivider: {
    //   styleOverrides: {
    //     root: {
    //       borderTop: `solid ${theme.palette.primary.dark}`,
    //       borderBottom: `solid ${theme.palette.primary.dark}`,
    //     },
    //   },
  },
});

export default theme;
