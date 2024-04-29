import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class AICard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/AI-Projects"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>AI Projects</H3Style>
        <em>Pygame and Python</em>
        <ULStyle>
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
        </ULStyle>
      </CardStyle>
    );
  }
}
export default AICard;
