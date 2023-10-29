import React from "react";
import Card from "./Card";
import "./components.css";
import weblogo from "../assets/startup.gif";

const Services = () => {
  const services = [
    "Web Design",
    "3D Art",
    "Mobile Development",
    "Web Development",
    "Automation",
    "Photography",
  ];

  const cards = services.map((service, index) => {
    return <Card key={index} name={service} icon={weblogo} />;
  });
  return (
    <>
      <div className="services-section">
        <h2 className="section">
          My <span>Services</span>
        </h2>
        <div className="grid">{cards}</div>
      </div>
    </>
  );
};

export default Services;
