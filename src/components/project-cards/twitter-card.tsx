import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class TwitterCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/Twitter-Backend-Clone"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Twitter Backend Clone</H3Style>
        <em>AWS, DynamoDB, Foreman, HAProxy, and sqlite-utils</em>
        <ULStyle>
          <li>Create an account</li>
          <li>See own post history or post history of others</li>
          <li>Like posts</li>
          <li>Create and vote for polls</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default TwitterCard;
