import * as React from "react";
import text from "../resources/text.json";
import {
  ResumeStyle,
  PInfoStyle,
  EducationStyle,
  SkillStyle,
} from "../styles/resume.style";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
class resume extends React.Component<{}> {
  render() {
    return (
      <ResumeStyle id="Resume">
        {text.map((data) => {
          return (
            <div>
              <PInfoStyle id="Personal Information">
                <h1>Contact</h1>
                <EmailIcon></EmailIcon>
                <text>{data.personalInfo.email}</text>
                <LocationOnIcon></LocationOnIcon>
                <text>{data.personalInfo.location}</text>
              </PInfoStyle>
              <EducationStyle>
                <h1>Education</h1>
                <text>{data.education.name}</text>
                <text>{data.education.degree}</text>
                <text>{data.education.yearGraduated}</text>
              </EducationStyle>
              <SkillStyle>
                <h1>Skills</h1>
                <text>{data.skills.languages}</text>
                <text>{data.skills.frameworks}</text>
                <text>{data.skills.others}</text>
              </SkillStyle>
            </div>
          );
        })}
      </ResumeStyle>
    );
  }
}

export default resume;
