import React from "react";
import Skill from "./Skill";
import "./components.css";

const Portfolio = () => {
  const skills = [
    { name: "HTML", lvl: "98%" },
    { name: "CSS", lvl: "90%" },
    { name: "Python", lvl: "85%" },
    { name: "Javascript", lvl: "70%" },
    { name: "Dart", lvl: "70%" },
    { name: "React", lvl: "70%" },
    { name: "Flutter", lvl: "50%" },
  ];

  const skills_list = skills.map((skill, index) => {
    return <Skill key={index} skill={skill} />;
  });
  return (
    <div className="portfolio-section">
      <h2 className="section">
        My <span>Skills</span>
      </h2>

      <div className="skill-container">{skills_list}</div>
    </div>
  );
};

export default Portfolio;
