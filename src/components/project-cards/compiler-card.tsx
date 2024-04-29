// https://github.com/austin-sohn/Compilers-and-Languages-project
import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class CompilerCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/Compilers-and-Languages-project"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Compilers Project</H3Style>
        <em>C++</em>

        <ULStyle>
          <li>
            Parses through each individual letter in a text file to execute a
            program
          </li>
          <li>Ignores comments</li>
          <li>Creates integer variables</li>
          <li>Assigns variables with integers</li>
          <li>Computes an expression</li>
          <li>Displays text</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default CompilerCard;
