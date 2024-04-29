// import React from "react";
import React from "react";
import { LandingStyle, ButtonStyle } from "../styles/landing.style"; // , CircleStyle, Test

class Landing extends React.Component {
  render() {
    // some jank way to add offset to window.ScrollTo
    const yOffset = -55.5;
    const handleClick = (value: string) => () => {
      const element = document.getElementById(value)!;
      const y = element.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    return (
      <LandingStyle id="Landing">
        <ButtonStyle onClick={handleClick("Projects")}>
          {/* style="--btnClr:#39FF14" */}
          <span>Projects</span>
          <i></i>
        </ButtonStyle>
        <ButtonStyle onClick={handleClick("Contact")}>
          {/* style="--btnClr:#0FF0FC" */}
          <span>Contact</span>
          <i></i>
        </ButtonStyle>
      </LandingStyle>
    );
  }
}

export default Landing;
