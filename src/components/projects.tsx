import React from "react";
import ProjectStyle from "../styles/project.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
class Projects extends React.Component<{}> {
  render() {
    return (
      <ProjectStyle id="Projects">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="test" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some Project Description
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ProjectStyle>
    );
  }
}

export default Projects;
