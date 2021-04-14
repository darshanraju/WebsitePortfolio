import React from "react";
import { render } from "@testing-library/react";
import SkillsPage from "./SkillsPage";
import "@testing-library/jest-dom/extend-expect";
import PortfolioData from "../../../PortfolioData";

describe("SkillsPage component", () => {
  it("Renders component", () => {
    const { queryByTestId } = render(<SkillsPage />);
    expect(queryByTestId("skills-subtitle")).toHaveTextContent(
      PortfolioData.skills.skillsPageSubtitle
    );
  });

  it("Renders subtitle", () => {
    const { queryByTestId } = render(<SkillsPage />);
    expect(queryByTestId("skills-subtitle")).toHaveTextContent(
      PortfolioData.skills.skillsPageSubtitle
    );
  });

  it("Renders child Skill Card components", () => {
    const { queryAllByTestId } = render(<SkillsPage />);
    expect(queryAllByTestId("skills-container")).toBeTruthy();
  });
});
