import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class TodoCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/254-group13"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Todo list with GUI</H3Style>
        <em>QtPy, sqlite-utils, and Tkinter</em>
        <ULStyle>
          <li>Add or remove from list</li>
          <li>Save and export list</li>
          <li>Create and vote for polls</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default TodoCard;
