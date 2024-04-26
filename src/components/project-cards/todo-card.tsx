import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";

class TodoCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Todo list with GUI</h3>
        <span>QtPy, sqlite-utils, and Tkinter</span>
        <ul>
          <li>Add or remove from list</li>
          <li>Save and export list</li>
          <li>Create and vote for polls</li>
        </ul>
        <Button size="small">
          <a
            href="https://github.com/austin-sohn/254-group13"
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
export default TodoCard;
