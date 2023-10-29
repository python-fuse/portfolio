import React, { useState } from "react";
import "./components.css";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div className="about-section ">
      <div className="about-image">
        <img src={avatar} alt="Umar" />
      </div>
      <div className="about-info">
        <h2 className="section">
          About <span>Me</span>
        </h2>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptas, assumenda expedita et temporibus quis totam earum. Dolorem
            est aut sit ea iusto, inventore, laudantium, mollitia commodi amet
            eum quaerat.
          </p>

          <table className="details">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Umar Muhammad Muktar</td>
              </tr>
              <tr>
                <td>Adress:</td>
                <td>Makurdi, Benue State</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>hauwamuktar880@gmail.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>+234 9036525229</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
