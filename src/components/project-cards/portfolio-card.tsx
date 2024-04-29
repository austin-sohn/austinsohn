import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class PortfolioCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/austinsohn"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Portfolio Website</H3Style>
        <em>Html, React, Styled Components, and Typescript</em>
        <ULStyle>
          <li>This website</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default PortfolioCard;
