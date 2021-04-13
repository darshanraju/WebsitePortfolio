import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";
import PortfolioData from "../../PortfolioData";

describe("Home Component", () => {
  it("Renders component", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("hero-container")).toBeTruthy();
  });

  it("renders before name text", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("before-text")).toHaveTextContent(
      PortfolioData.homePage.introText
    );
  });

  it("renders name", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("home-name")).toHaveTextContent(
      PortfolioData.homePage.name
    );
  });

  it("renders short description", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("test-subtitle")).toHaveTextContent(
      PortfolioData.homePage.aboutMe
    );
  });

  it("renders hero subtitle description", () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId("home-subtitle")).toHaveTextContent(
      PortfolioData.homePage.subtitle
    );
  });
});
