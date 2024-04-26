import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";
class AICard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h2>AI Projects</h2>
        <span>Pygame and Python</span>
        <ul>
          <li>
            Project 1: Wolf, Goat, and Cabbage{" "}
            <ul>
              <li>
                Uses breadth and depth first search algorithm to solve the wolf,
                goat, and cabbage problem.
              </li>
            </ul>
          </li>

          <li>
            Project 2: Game of Nim
            <ul>
              <li>Play the game of nim in the command prompt against an AI.</li>
            </ul>
          </li>
          <li>
            Project 3: Game of Nim Extension
            <ul>
              <li>Play the game of nim with a GUI against an AI.</li>
            </ul>
          </li>
        </ul>
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
export default AICard;
