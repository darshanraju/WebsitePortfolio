import React from "react";
import "./ProjectsPage.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import PortfolioData from "../../../PortfolioData";

const ProjectsPage = () => {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const logos = importAll(require.context("../../../images/Projects", false));
  const projects = PortfolioData.projects;
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="title">
          <span className="green">02. </span>Projects
        </div>
        <div className="project-cards">
          {projects.map((project, index) => {
            const projectMatcher = new RegExp(project.projectImage, "i");
            const logo = logos.find((images: any) => {
              return images.default.match(projectMatcher);
            });
            return (
              <ProjectCard
                gitHubRepositoryLink={project.githubLink}
                image={logo.default}
                projectInfo={project.description}
                projectName={project.projectName}
                tools={project.toolsUsed}
                liveProjectLink={project.liveProjectLink}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
