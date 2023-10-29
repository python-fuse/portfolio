import React from "react";
import avatar from "../assets/avatar.jpg";
import "./components.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="image-container">
        <img src={avatar} alt="" />
      </div>
      <div className="intro">
        <p id="hello">
          He<span>ll</span>o
        </p>
        <h3>
          I'm a{" "}
          <span>
            {" "}
            Frontend Developer, <br /> Mobile Developer{" "}
          </span>
          and
          <br />a <span>3D Artist.</span>
        </h3>

        <div className="download">
          <div className="btn" id="btn1">
            Hire Me
          </div>
          <div className="btn">Download CV</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
