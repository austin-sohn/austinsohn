import React from "react";
import { HeaderStyle, HeaderRight } from "../styles/header.style";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../resources/theme";

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
        </HeaderStyle>
      </ThemeProvider>
    );
  }
}
export default Header;
