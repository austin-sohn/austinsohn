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
    // some jank way to add offset to window.ScrollTo
    const yOffset = -55.5;
    const handleClick = (value: string) => () => {
      const element = document.getElementById(value)!;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      console.log(element);
      console.log(element.getBoundingClientRect().top);
      console.log(y);
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    return (
      <ThemeProvider theme={theme}>
        <HeaderStyle id="Header">
          <Button
            id="home-button"
            variant="text"
            onClick={handleClick("Landing")} // temporarily set to "Landing". "HomePage doesn't work"
            color="white"
          >
            AS
          </Button>

          <Button
            id="projects-button"
            variant="text"
            onClick={handleClick("Projects")}
            color="white"
          >
            <span>Projects</span>
          </Button>
          <Button
            id="contact-button"
            variant="text"
            onClick={handleClick("Contact")}
            color="white"
          >
            <span>Contact</span>
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
