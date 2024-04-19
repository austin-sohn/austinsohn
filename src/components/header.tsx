import React from "react";
import { HeaderStyle, HeaderRight } from "../styles/header.style";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include anwhite option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}
const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFF",
    },
  },
});

class Header extends React.Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HeaderStyle id="Header">
          <Button
            id="home-button"
            variant="text"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            color="white"
          >
            AS
          </Button>
        </HeaderStyle>
        <HeaderRight id="Links">
          <IconButton id="linkedin-button">
            <a
              href="https://www.linkedin.com/in/austin-sohn-9bb721230/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ color: "white" }} />
            </a>
          </IconButton>
          <IconButton id="github-button">
            <a
              href="https://github.com/austin-sohn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
          </IconButton>
        </HeaderRight>
      </ThemeProvider>
    );
  }
}
export default Header;
