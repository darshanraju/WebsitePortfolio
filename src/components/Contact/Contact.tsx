import React from "react";
import "./Contact.css";

const Footer = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <div className="text-above-contact green">4.0 Whats Next?</div>
          <div className="stay-connected">Stay Connected</div>
        </div>
        <div className="contact-info">
          I'll be graduating Nov 2021, and open for graduate roles in 2022
        </div>

        <a className="contact-btn" href="mailto:darshanraju9@gmail.com">
          <button className="inner-contact-button">Get in touch</button>
        </a>
      </div>
    </section>
  );
};

export default Footer;
