import React from "react";
import "./Home.css";
import Particles from "../particles/particles";

const Home = () => {
  return (
    <div className="container">
      <Particles />
      <div className="text-container">
        <div className="text-title">Hey, I'm Darshan</div>
        <div className="role">
          <span>I try to learn things</span>
        </div>
        <div className="text-subtitle">
          <span>and i've started to log it</span>
        </div>
        {/* <div className="Resume">
          <a
            href="_blank"
            id="resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume &gt;
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
