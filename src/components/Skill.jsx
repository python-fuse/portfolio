import React from "react";
import "./components.css";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <div className="skill-name">{skill.name}</div>
      <div className={`${skill.name} skill-lvl`}>{skill.lvl}</div>
    </div>
  );
};

export default Skill;
