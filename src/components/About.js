import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a professional web developer who focuses on front-end projects that address real-world issues.</p>
      <img src={ image } alt="I made this"/>
    </div>
  );
}

export default About;
