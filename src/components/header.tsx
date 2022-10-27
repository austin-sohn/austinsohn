import * as React from "react";
import { HeaderStyle } from "../styles/header.style";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "@mui/material/colors";

// makes the button white?
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[50]),
}));

class Header extends React.Component<{}> {
  render() {
    return (
      <HeaderStyle>
        <ColorButton variant="text" href="/">
          Austin Sohn
        </ColorButton>
        <IconButton>
          <a
            href="https://www.linkedin.com/in/austin-sohn-9bb721230/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ color: "black" }} />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://github.com/austin-sohn"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon style={{ color: "black" }} />
          </a>
        </IconButton>
      </HeaderStyle>
    );
  }
}
export default Header;
