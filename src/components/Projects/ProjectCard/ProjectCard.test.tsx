import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProjectCard, { ProjectCardData } from "./ProjectCard";
import "@testing-library/jest-dom/extend-expect";
const mockData: ProjectCardData = {
  gitHubRepositoryLink: "https://www.google.com",
  image:
    "https://images.pexels.com/photos/6171709/pexels-photo-6171709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  projectInfo: "darshan was here",
  projectName: "mockName",
  tools: ["React", "Typescript"],
  liveProjectLink: "https://darshanraju.copm",
};

describe("ProjectCard", () => {
  it("renders correctly", () => {
    const { queryByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    expect(queryByTestId("project-card-container")).toBeTruthy();
  });
  it("clicking on project opens URL", () => {
    const windowSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    const { getByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    const projectImage = getByTestId("project-image");
    fireEvent.click(projectImage);
    expect(windowSpy).toBeCalledTimes(1);
  });
  it("clicking on gitHub opens repo", () => {
    const windowSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    const { getByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    const gitHubLink = getByTestId("github-link-icon");
    fireEvent.click(gitHubLink);
    expect(windowSpy).toBeCalledTimes(1);
  });
  it("project title is correct", () => {
    const { queryByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    expect(queryByTestId("project-name")).toHaveTextContent(
      mockData.projectName
    );
  });
  it("project description is correct", () => {
    const { queryByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    expect(queryByTestId("project-info")).toHaveTextContent(
      mockData.projectInfo
    );
  });
  it("project tools is correct", () => {
    const { queryByTestId } = render(
      <ProjectCard
        gitHubRepositoryLink={mockData.gitHubRepositoryLink}
        image={mockData.image}
        projectInfo={mockData.projectInfo}
        projectName={mockData.projectName}
        tools={mockData.tools}
        liveProjectLink={mockData.liveProjectLink}
      />
    );

    const toolsContainer = queryByTestId("project-tools-container");

    expect(toolsContainer?.childNodes.length).toBe(mockData.tools.length);

    expect(toolsContainer).toHaveTextContent(mockData.tools.join(""));
  });
});
