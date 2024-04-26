import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class TwitterCard extends React.Component<{}> {
  render() {
    return (
      <div>
        <CardContent>
          <Typography variant="h5" component="div">
            Twitter Backend Clone
          </Typography>
          <Typography
            component={"span"}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            AWS, DynamoDB, Foreman, HAProxy, and sqlite-utils
          </Typography>
          <Typography component={"span"} variant="body2">
            <ul>
              <li>Create an account</li>
              <li>See own post history or post history of others</li>
              <li>Like posts</li>
              <li>Create and vote for polls</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              href="https://github.com/austin-sohn/Twitter-Backend-Clone"
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
export default TwitterCard;
