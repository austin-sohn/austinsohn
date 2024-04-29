import React from "react";
import {
  FooterStyle,
  FooterTitle,
  IconStyle,
  CreditStyle,
} from "../styles/footer.style";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../resources/theme";

class Footer extends React.Component<{}> {
  render() {
    return (
      <FooterStyle id="Footer">
        <FooterTitle id="footer-heading">Quick Links</FooterTitle>
        <IconStyle>
          <IconButton>
            <a
              href="https://github.com/austin-sohn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/austin-sohn-9bb721230/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ marginLeft: 2 }} style={{ color: "white" }} />
            </a>
            <a
              href="https://www.youtube.com/@tohroo/videos"
              target="_blank"
              rel="noreferrer"
              id="youtube-link"
            >
              <YouTubeIcon
                sx={{ marginLeft: 2 }}
                style={{ color: "white" }}
              ></YouTubeIcon>
            </a>
          </IconButton>
        </IconStyle>
        <CreditStyle>
          <ThemeProvider theme={theme}>
            <span>Credits: Icons are from </span>
            <Button
              variant="outlined"
              href="https://mui.com/material-ui/"
              target="_blank"
              rel="noreferrer"
              sx={{ minHeight: 0, minWidth: 0, padding: 0.1 }}
              color="white"
            >
              MUI
            </Button>
            <span>, the background is Endless Constellation from </span>

            <Button
              variant="outlined"
              href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/"
              target="_blank"
              rel="noreferrer"
              sx={{ minHeight: 0, minWidth: 0, padding: 0.1 }}
              color="white"
            >
              SVGBackgrounds
            </Button>
            <span>, and buttons are from </span>
            <Button
              variant="outlined"
              href="https://codepen.io/nuhmanpk/pen/XWqBrae"
              target="_blank"
              rel="noreferrer"
              sx={{ minHeight: 0, minWidth: 0, padding: 0.1 }}
              color="white"
            >
              here
            </Button>
          </ThemeProvider>
        </CreditStyle>
      </FooterStyle>
    );
  }
}
export default Footer;
