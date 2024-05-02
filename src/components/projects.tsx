import React from "react";
import { ProjectStyle, CardContainer } from "../styles/project.style";
import SocialMediaCard from "./project-cards/sm-card";
import TodoCard from "./project-cards/todo-card";
import ControllerCard from "./project-cards/controller-card";
import AICard from "./project-cards/ai-card";
import PortfolioCard from "./project-cards/portfolio-card";
import TwitchBotCard from "./project-cards/twitchbot-card";
import CompilerCard from "./project-cards/compiler-card";
import ReminderCard from "./project-cards/reminder-card";

class Projects extends React.Component<{}> {
  render() {
    return (
      <ProjectStyle id="Projects">
        <CardContainer>
          <SocialMediaCard />
          <AICard />
          <ControllerCard />
          <PortfolioCard />
          <TwitchBotCard />
          <CompilerCard />
          <ReminderCard />
          <TodoCard />
        </CardContainer>
      </ProjectStyle>
    );
  }
}

export default Projects;
