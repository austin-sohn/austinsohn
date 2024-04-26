import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class TodoCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Todo list with GUI
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            QtPy, sqlite-utils, and Tkinter
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>Add or remove from list</li>
              <li>Save and export list</li>
              <li>Create and vote for polls</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://github.com/austin-sohn/254-group13"
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
export default TodoCard;
