import * as React from "react";
import Biography from "./biography";
import ResumeStyle from "../styles/resume.style";
class resume extends React.Component<{}> {
  render() {
    return (
      <ResumeStyle id="Resume">
        <Biography />
      </ResumeStyle>
    );
  }
}

export default resume;
