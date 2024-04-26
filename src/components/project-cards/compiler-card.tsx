// https://github.com/austin-sohn/Compilers-and-Languages-project
import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";
class CompilerCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Compilers Project</h3>
        <span>C++</span>

        <ul>
          <li>
            Parses through each individual letter in a text file to execute a
            program
          </li>
          <li>Ignores comments</li>
          <li>Creates integer variables</li>
          <li>Assigns variables with integers</li>
          <li>Computes an expression</li>
          <li>Displays text</li>
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
export default CompilerCard;
