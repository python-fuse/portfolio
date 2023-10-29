import React from "react";

const Card = ({ name, icon }) => {
  return (
    <div className="card">
      <img src={icon} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
