import React from "react";
import { LandingStyle, CircleStyle, Test } from "../styles/landing.style";

const Landing = () => {
  return (
    <LandingStyle id="Landing">
      <p>
        Landing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        eget metus pretium, euismod lectus id, ultrices purus. Donec ut tempus
        risus, eget tempor nulla. Morbi dolor risus, placerat et pellentesque
        vitae, eleifend id tortor. Donec id justo maximus, suscipit dui a,
        ultrices tellus. Fusce eget ullamcorper sem. Nullam iaculis viverra urna
        ac molestie. Vestibulum vel sagittis lorem.
      </p>

      <button
        onClick={() => {
          document
            .getElementById("Projects")!
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Project
      </button>
      <button
        onClick={() => {
          document
            .getElementById("Contact")!
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </button>
    </LandingStyle>
  );
};

export default Landing;
