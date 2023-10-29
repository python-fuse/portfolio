import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="get-in-touch">
        <h2 className="section">
          Get in <span> touch</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          voluptas sit sint iure deserunt deleniti quasi maxime cumque fuga ea
          porro laboriosam qui rerum exercitationem tenetur molestiae
          temporibus? Totam, dolorum.
        </p>
        <div className="adress">
          <h4>36 Eri Street</h4>
          <h4>hauwamuktar880@gmail.com</h4>
          <h4>+234 90-365-252-29</h4>
        </div>
      </div>
      <div className="contact">
        <h2 className="section">
          Contact <span>me</span>
        </h2>

        <form>
          <div className="top">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <div className="bottom">
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea
            name="message"
            placeholder="Leave me a message.."
            id="message"
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
