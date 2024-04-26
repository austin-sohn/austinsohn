import React from "react";
import ProjectStyle from "../styles/project.style";
import Card from "@mui/material/Card";
import TwitterCard from "./project-cards/twitter-card";
import TodoCard from "./project-cards/todo-card";
import ControllerCard from "./project-cards/controller-card";
import AICard from "./project-cards/ai-card";
import PortfolioCard from "./project-cards/portfolio-card";
import TwitchBotCard from "./project-cards/twitchbot-card";
class Projects extends React.Component<{}> {
  render() {
    return (
      <ProjectStyle id="Projects">
        <Card sx={{ minWidth: 275 }}>
          <TwitterCard />
          <TodoCard />
          <ControllerCard />
          <AICard />
          <PortfolioCard />
          <TwitchBotCard />
        </Card>
      </ProjectStyle>
    );
  }
}

export default Projects;
