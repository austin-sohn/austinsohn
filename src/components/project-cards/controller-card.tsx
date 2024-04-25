import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class ControllerCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Custom 4 button controller
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Arduino
          </Typography>
          <Typography variant="body2">
            Created a custom 4 button controller on a breadboard with an arduino
            with some sample games to play.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://github.com/austin-sohn/Computer-System-Architecture-Project"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </div>
    );
  }
}
export default ControllerCard;
