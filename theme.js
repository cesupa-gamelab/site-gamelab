import { createMuiTheme } from "@material-ui/core/styles";

const mainBlack = "#212121";
const mainWhite = "#fafafa";
const blue = "#757ce8";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
        primary: {
            main: mainWhite,
    },
        secondary: {
            main: mainBlack,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
          fontWeight: 500,
          color: mainWhite
    },
    h2: {
      fontSize: "1.5rem",
        fontWeight: 500,
        color: mainWhite
    },
    h3: {
      fontSize: "1.25rem",
        fontWeight: 500,
        color: mainWhite
    },
    /*a: {
      color: mainBlack,
    },*/
  },
});

export default theme;
