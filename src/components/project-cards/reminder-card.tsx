import React from "react";
import Button from "@mui/material/Button";
import CardStyle from "../../styles/cards.style";
class ReminderCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle>
        <h3>Stretch Reminder App</h3>
        <span>Pygame, Python, and Tkinter</span>
        <ul>
          <li>Reminds user to stretch</li>
          <li>Provides examples of stretches</li>
          <li>Points and leaderboard system for completing stretches</li>
        </ul>
        <Button size="small">
          <a
            href="https://github.com/ErnestoHkirk/362-Stretch-Reminder-App"
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
export default ReminderCard;
