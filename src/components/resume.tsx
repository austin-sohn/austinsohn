import * as React from "react";
import Biography from "./biography";
import ResumeStyle from "../styles/resume.style";
class resume extends React.Component<{}> {
  render() {
    return (
      <ResumeStyle>
        <div>resume</div>
        <Biography />
      </ResumeStyle>
    );
  }
}

export default resume;
