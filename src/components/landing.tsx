// import React from "react";
import React from "react";
import LandingStyle from "../styles/landing.style"; // , CircleStyle, Test

class Landing extends React.Component {
  render() {
    // some jank way to add offset to window.ScrollTo
    const yOffset = -55.5;
    const handleClick = (value: string) => () => {
      const element = document.getElementById(value)!;
      const y = element.getBoundingClientRect().top + yOffset;
      console.log(element);
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    return (
      <LandingStyle id="Landing">
        <p>
          Landing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          eget metus pretium, euismod lectus id, ultrices purus. Donec ut tempus
          risus, eget tempor nulla. Morbi dolor risus, placerat et pellentesque
          vitae, eleifend id tortor. Donec id justo maximus, suscipit dui a,
          ultrices tellus. Fusce eget ullamcorper sem. Nullam iaculis viverra
          urna ac molestie. Vestibulum vel sagittis lorem.
        </p>

        <button onClick={handleClick("Projects")}>Project</button>
        <button onClick={handleClick("Contact")}>Contact</button>
      </LandingStyle>
    );
  }
}

export default Landing;
