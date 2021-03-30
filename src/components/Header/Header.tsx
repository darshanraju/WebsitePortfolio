import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <span>&lt;\&gt;</span>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link activeClass="active" to="experience">
            Experience
          </Link>
        </li>

        <li className="nav-item">
          <Link activeClass="active" to="projects">
            Projects
          </Link>
        </li>
        <li className="nav-item" id="skills">
          <p id="skills-underline">
            <Link activeClass="skills" to="projects">
              Skills
            </Link>
          </p>
        </li>
        <li className="nav-item">
          <Link activeClass="certifications" to="projects">
            Certifications
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
