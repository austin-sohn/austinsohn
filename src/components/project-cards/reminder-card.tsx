import React from "react";
import { CardStyle, ULStyle, H3Style } from "../../styles/cards.style";
class ReminderCard extends React.Component<{}> {
  render() {
    return (
      <CardStyle
        href="https://github.com/ErnestoHkirk/362-Stretch-Reminder-App"
        target="_blank"
        rel="noreferrer"
      >
        <H3Style>Stretch Reminder App</H3Style>
        <em>Pygame, Python, and Tkinter</em>
        <ULStyle>
          <li>Reminds user to stretch</li>
          <li>Provides examples of stretches</li>
          <li>Points and leaderboard system for completing stretches</li>
        </ULStyle>
      </CardStyle>
    );
  }
}
export default ReminderCard;
