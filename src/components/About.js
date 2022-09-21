import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I have wanted to be a Software Developer ever since I interacted with a computer for the first time.</p>
      <img src={image} alt="I made this"/>
    </div>
    )
}

export default About;
