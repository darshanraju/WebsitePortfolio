import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <span>&lt;\&gt;</span>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item" id="skills">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#certifications">Certifications</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
