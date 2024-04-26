import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";
class TwitterCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Twitter Backend Clone</h3>
        <span>AWS, DynamoDB, Foreman, HAProxy, and sqlite-utils</span>
        <ul>
          <li>Create an account</li>
          <li>See own post history or post history of others</li>
          <li>Like posts</li>
          <li>Create and vote for polls</li>
        </ul>
        <Button size="small">
          <a
            href="https://github.com/austin-sohn/Twitter-Backend-Clone"
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
export default TwitterCard;
