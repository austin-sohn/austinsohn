import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class TwitchBotCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/austin-sohn/twitch-bot"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Twitch Bot</H3Style>
        <em>Javascript, sqlite3, Twitch API</em>
        <ULStyle>
          <li>Bot connects to given twitch stream</li>
          <li>Create and delete text commands from the database</li>
          <li>Change the title of the stream</li>
          <li>Return all of the saved commands</li>
          <li>Roll a die</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default TwitchBotCard;
