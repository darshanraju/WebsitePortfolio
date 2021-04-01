import React from "react";
import "./ProjectsPage.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsPage = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="title">
          <span className="green">02. </span>Projects
        </div>
        <div className="project-cards">
          <ProjectCard
            gitHubRepositoryLink="https://github.com/"
            imagePath="../../../images/githubImage.png"
            projectInfo={[
              "did some horendous stuff",
              "and then some more horrible stuff, test",
              "did some horendous stuff",
              "and then some more horrible stuff, test",
            ]}
            projectName="Project 1"
            tools={["React", "Node.js"]}
            alignment="right"
            key={1}
          />
          <ProjectCard
            gitHubRepositoryLink="https://github.com/"
            imagePath="../../../images/githubImage.png"
            projectInfo={[
              "did some horendous stuff",
              "and then some more horrible stuff, test",
            ]}
            projectName="Project 2"
            tools={["React", "Node.js"]}
            alignment="left"
            key={2}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
