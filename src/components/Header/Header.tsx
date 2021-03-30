import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <Link activeClass="active" to="hero" smooth={true}>
          <span>&lt;\&gt;</span>
        </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link activeClass="active" to="experience" smooth={true}>
            Experience
          </Link>
        </li>

        <li className="nav-item">
          <Link activeClass="active" to="projects" offset={-48} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="nav-item" id="skills">
          <p id="skills-underline">
            <Link activeClass="skills" to="projects" smooth={true}>
              Skills
            </Link>
          </p>
        </li>
        <li className="nav-item">
          <Link activeClass="certifications" to="projects" smooth={true}>
            Certifications
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
