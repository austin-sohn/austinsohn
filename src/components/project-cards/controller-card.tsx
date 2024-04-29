import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class ControllerCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/Computer-System-Architecture-Project"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Custom 4 button controller</H3Style>
        <em>Arduino</em>
        <br />
        <ULStyle>
          <li>
            Created a custom 4 button controller on a breadboard with an arduino
            with some sample games to play.
          </li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default ControllerCard;
