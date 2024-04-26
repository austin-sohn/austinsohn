import React from "react";
import ProjectStyle from "../styles/project.style";
import TwitterCard from "./project-cards/twitter-card";
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
        <TwitterCard />
        <AICard />
        <ControllerCard />
        <PortfolioCard />
        <TwitchBotCard />
        <CompilerCard />
        <ReminderCard />
        <TodoCard />
      </ProjectStyle>
    );
  }
}

export default Projects;
