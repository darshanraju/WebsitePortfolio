import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
const Fade = require("react-reveal/Fade");

const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <Fade duration={800} left>
          <Link activeClass="active" to="hero" smooth={true}>
            <span>&lt;\&gt;</span>
          </Link>
        </Fade>
      </div>
      <Fade duration={1000} right cascade>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              activeClass="active"
              className="testtwo"
              to="experience"
              smooth={true}
            >
              <span className="numbers">01. </span>Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="projects" smooth={true}>
              <span className="numbers">02. </span>Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="skills" smooth={true}>
              <span className="numbers">03. </span>Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="contact" to="contact" smooth={true}>
              <span className="numbers">04. </span> Contact
            </Link>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Header;
