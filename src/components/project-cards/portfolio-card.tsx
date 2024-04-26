import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardStyle from "../../styles/cards.style";
class PortfolioCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Portfolio Website</h3>
        <span>Html, React, Styled Components, and Typescript</span>
        <Button size="small">
          <a
            href="https://github.com/austin-sohn/austinsohn"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </Button>
      </CardStyle>
    );
  }
}
export default PortfolioCard;
