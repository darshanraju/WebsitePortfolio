import React from "react";
import "./ProjectCard.css";
import logo from "../../../AWSLogo-copy.png";
import logoV2 from "../../../Project-Website.PNG";

const Fade = require("react-reveal/Fade");

const ProjectCard = ({
  gitHubRepositoryLink,
  imagePath,
  projectInfo,
  projectName,
  tools,
  alignment,
}: ProjectCardData) => {
  return (
    <div className="project-card-container">
      <Fade duraction={800} left>
        <div className="project-image-container">
          <img className="project-image" src={logoV2} alt="logo" />
        </div>
      </Fade>

      <Fade duraction={800} right>
        <div className="project-info-container">
          <div className="project-name">{projectName}</div>
          <div className="project-info-color-card">
            <div className="project-info">{projectInfo}</div>
          </div>
          <div className="project-tools-container">
            {tools.map((tool, i) => {
              return (
                <div key={i} className="project-tools">
                  {tool}
                </div>
              );
            })}
          </div>
          <div className="github-link">
            <i
              onClick={() => window.open(gitHubRepositoryLink)}
              className="fab fa-github"
            ></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};

interface ProjectCardData {
  gitHubRepositoryLink: string;
  imagePath: string;
  projectInfo: Array<string>;
  projectName: string;
  tools: Array<string>;
  alignment: "left" | "right";
}

export default ProjectCard;
