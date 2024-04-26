import React from "react";
import { ProjectStyle, CardStyle } from "../styles/project.style";
import Card from "@mui/material/Card";
import TwitterCard from "./project-cards/twitter-card";
import TodoCard from "./project-cards/todo-card";
import ControllerCard from "./project-cards/controller-card";
import AICard from "./project-cards/ai-card";
import PortfolioCard from "./project-cards/portfolio-card";
import TwitchBotCard from "./project-cards/twitchbot-card";
import CompilerCard from "./project-cards/compiler-card";
class Projects extends React.Component<{}> {
  render() {
    return (
      <ProjectStyle id="Projects">
        <CardStyle>
          <Card>
            <TwitterCard />
            <TodoCard />
            <ControllerCard />
            <AICard />
            <PortfolioCard />
            <TwitchBotCard />
            <CompilerCard />
          </Card>
        </CardStyle>
      </ProjectStyle>
    );
  }
}

export default Projects;
