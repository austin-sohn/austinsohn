import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class TwitchBotCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Twitch Bot
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Javascript, sqlite3, Twitch API
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>Bot connects to given twitch stream</li>
              <li>Create and delete text commands from the database</li>
              <li>Change the title of the stream</li>
              <li>Return all of the saved commands</li>
              <li>Roll a die</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://github.com/austin-sohn/twitch-bot"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </div>
    );
  }
}
export default TwitchBotCard;
