import React from "react";
import WorkCard, { workCardData } from "./WorkCard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockData: workCardData = {
  company: "darshanCORPERATION",
  duration: "10Centuries",
  responsibilities: ["be awesome", "be good"],
  role: "captain",
};

describe("WorkCard Component", () => {
  it("renders correctly", () => {
    const { queryByTestId } = render(
      <WorkCard
        company={mockData.company}
        duration={mockData.duration}
        responsibilities={mockData.responsibilities}
        role={mockData.role}
      />
    );

    expect(queryByTestId("work-card-container")).toBeTruthy();
  });

  it("renders title correctrly", () => {
    const { queryByTestId } = render(
      <WorkCard
        company={mockData.company}
        duration={mockData.duration}
        responsibilities={mockData.responsibilities}
        role={mockData.role}
      />
    );

    expect(queryByTestId("word-card-role")).toHaveTextContent(mockData.role);
  });

  it("renders company correctrly", () => {
    const { queryByTestId } = render(
      <WorkCard
        company={mockData.company}
        duration={mockData.duration}
        responsibilities={mockData.responsibilities}
        role={mockData.role}
      />
    );

    expect(queryByTestId("word-card-company")).toHaveTextContent(
      mockData.company
    );
  });

  it("renders duration correctrly", () => {
    const { queryByTestId } = render(
      <WorkCard
        company={mockData.company}
        duration={mockData.duration}
        responsibilities={mockData.responsibilities}
        role={mockData.role}
      />
    );

    expect(queryByTestId("word-card-duration")).toHaveTextContent(
      mockData.duration
    );
  });

  it("renders all responsibiltiies correctly", () => {
    const { queryAllByTestId, getAllByTestId } = render(
      <WorkCard
        company={mockData.company}
        duration={mockData.duration}
        responsibilities={mockData.responsibilities}
        role={mockData.role}
      />
    );

    expect(
      queryAllByTestId("word-card-responsibilities-container")
    ).toHaveLength(mockData.responsibilities.length);

    const responsibilities = getAllByTestId("responsibility");
    responsibilities.forEach((e, idx) => {
      expect(e).toHaveTextContent(mockData.responsibilities[idx]);
    });
  });
});
