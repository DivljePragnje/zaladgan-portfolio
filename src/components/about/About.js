import React from "react";
import "./About.styles.scss";
import aboutImage from "../../images/about-monitor.png";

function About() {
  return (
    <div className="about-wrapper">
      <img className="about-image" src={aboutImage} alt="about-monitor" />
      <div className="about-text">
        <h3> THE MAN BEHIND</h3>
        <p>
          My name is Igor Tomić graphic and web designer from Serbia. I have
          graduated the University of Novi Sad , Faculty of Tehnical Sciences. I
          am a highly motivated, creative, hardworking full time freelancer!
        </p>
        <p>More than 8 years of experience in the Logo Design.</p>
        <p>
          All of my work is 100% original and every design come with all rights
          included. Take a look below at all of my services below and reach out
          if there is anything I can do to help you or your company.
        </p>
      </div>
    </div>
  );
}

export default About;
