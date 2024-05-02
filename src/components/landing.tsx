// import React from "react";
import React from "react";
import { LandingStyle, IntroStyle } from "../styles/landing.style"; //

class Landing extends React.Component {
  render() {
    return (
      <LandingStyle id="Landing">
        <IntroStyle>
          <h2>Hello, my name is Austin</h2>
        </IntroStyle>
      </LandingStyle>
    );
  }
}

export default Landing;
