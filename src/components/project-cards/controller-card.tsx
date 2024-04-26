import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardStyle from "../../styles/cards.style";
class ControllerCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Custom 4 button controller</h3>
        <span>Arduino</span>
        <span>
          Created a custom 4 button controller on a breadboard with an arduino
          with some sample games to play.
        </span>
        <Button size="small">
          <a
            href="https://github.com/austin-sohn/Computer-System-Architecture-Project"
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
export default ControllerCard;
