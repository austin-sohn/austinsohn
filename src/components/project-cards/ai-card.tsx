import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class AICard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            AI Projects
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Pygame and Python
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>
                Project 1: Wolf, Goat, and Cabbage{" "}
                <ul>
                  <li>
                    Uses breadth and depth first search algorithm to solve the
                    wolf, goat, and cabbage problem.
                  </li>
                </ul>
              </li>

              <li>
                Project 2: Game of Nim
                <ul>
                  <li>
                    Play the game of nim in the command prompt against an AI.
                  </li>
                </ul>
              </li>
              <li>
                Project 3: Game of Nim Extension
                <ul>
                  <li>Play the game of nim with a GUI against an AI.</li>
                </ul>
              </li>
            </ul>
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
export default AICard;
