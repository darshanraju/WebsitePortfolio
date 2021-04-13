import React from "react";
import SkillCard, { SkillCardData } from "./SkillsCard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockData: SkillCardData = {
  icon: "darshan",
  percentage: "100",
  skill: "tableTennis",
};

describe("SkillCard Component", () => {
  it("renders title properly", () => {
    const { queryByTestId } = render(
      <SkillCard
        icon={mockData.icon}
        percentage={mockData.percentage}
        skill={mockData.skill}
      />
    );

    expect(queryByTestId("skill-card-container")).toBeTruthy();
  });

  it("renders percentage properly", () => {
    const { queryByTestId } = render(
      <SkillCard
        icon={mockData.icon}
        percentage={mockData.percentage}
        skill={mockData.skill}
      />
    );

    expect(queryByTestId("skill-percentage-number")).toHaveTextContent(
      `${mockData.percentage}%`
    );
  });

  it("renders percentage width properly", () => {
    const { queryByTestId } = render(
      <SkillCard
        icon={mockData.icon}
        percentage={mockData.percentage}
        skill={mockData.skill}
      />
    );

    expect(queryByTestId("skill-percentage-bar-completed")).toHaveProperty(
      "style.width",
      `${mockData.percentage}%`
    );
  });

  it("renders image properly", () => {
    const { queryByTestId } = render(
      <SkillCard
        icon={mockData.icon}
        percentage={mockData.percentage}
        skill={mockData.skill}
      />
    );

    expect(queryByTestId("skill-image")).toHaveProperty(
      "className",
      mockData.icon
    );
  });
});
