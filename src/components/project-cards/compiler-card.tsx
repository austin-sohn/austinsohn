// https://github.com/austin-sohn/Compilers-and-Languages-project
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class CompilerCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Compilers Project
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            C++
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>
                Parses through each individual letter in a text file to execute
                a program
              </li>
              <li>Ignores comments</li>
              <li>Creates integer variables</li>
              <li>Assigns variables with integers</li>
              <li>Computes an expression</li>
              <li>Displays text</li>
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
export default CompilerCard;
