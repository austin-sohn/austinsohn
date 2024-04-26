import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";
class TwitchBotCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Twitch Bot</h3>
        <span>Javascript, sqlite3, Twitch API</span>
        <ul>
          <li>Bot connects to given twitch stream</li>
          <li>Create and delete text commands from the database</li>
          <li>Change the title of the stream</li>
          <li>Return all of the saved commands</li>
          <li>Roll a die</li>
        </ul>
        <Button size="small">
          <a
            href="https://github.com/austin-sohn/twitch-bot"
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
export default TwitchBotCard;
