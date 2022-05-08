import "./ProjectCard.css";

const Fade = require("react-reveal/Fade");

const ProjectCard = ({
  gitHubRepositoryLink,
  image,
  projectInfo,
  projectName,
  tools,
  liveProjectLink,
}: ProjectCardData) => {
  return (
    <div
      className="project-card-container"
      data-testid="project-card-container"
    >
      <Fade duraction={800} left>
        <div
          data-testid="project-image"
          onClick={() => window.open(liveProjectLink)}
          className="project-image-container"
        >
          <img className="project-image" src={image} alt="logo" />
        </div>
      </Fade>

      <Fade duraction={800} right>
        <div className="project-info-container">
          <div className="project-name" data-testid="project-name">
            {projectName}
          </div>
          <div className="project-info-color-card">
            <div className="project-info" data-testid="project-info">
              {projectInfo}
            </div>
          </div>
          <div
            className="project-tools-container"
            data-testid="project-tools-container"
          >
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
              data-testid="github-link-icon"
              onClick={() => window.open(gitHubRepositoryLink)}
              className="fab fa-github"
            ></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export interface ProjectCardData {
  gitHubRepositoryLink: string;
  liveProjectLink?: string;
  image: any;
  projectInfo: string;
  projectName: string;
  tools: Array<string>;
}

export default ProjectCard;
