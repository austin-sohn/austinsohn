import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CardStyle from "../../styles/cards.style";
class AICard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h2>AI Projects</h2>
        <span>Pygame and Python</span>
        <ul>
          <li>
            Project 1: Wolf, Goat, and Cabbage
            <ul>
              <li>
                BFS/DFS algorithm to solve the wolf, goat, and cabbage problem.
              </li>
            </ul>
          </li>

          <li>
            Project 2: Game of Nim
            <ul>
              <li>Play game of nim in command prompt against AI.</li>
            </ul>
          </li>
          <li>
            Project 3: Game of Nim Extension
            <ul>
              <li>Project 2 with GUI.</li>
            </ul>
          </li>
        </ul>

        <a
          href="https://github.com/austin-sohn/Computer-System-Architecture-Project"
          target="_blank"
          rel="noreferrer"
        >
          <OpenInNewIcon />
        </a>
      </CardStyle>
    );
  }
}
export default AICard;
