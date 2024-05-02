import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
