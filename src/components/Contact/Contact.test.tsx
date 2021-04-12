import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Footer from "./Contact";
import "@testing-library/jest-dom/extend-expect";
import PortfolioData from "../../PortfolioData";

describe("Contact Component", () => {
  it("renders successfully", () => {
    const { queryByTestId } = render(<Footer />);
    expect(queryByTestId("contact-section")).toBeTruthy();
  });

  it("renders title", () => {
    const { queryByTestId } = render(<Footer />);
    const title = queryByTestId("contact-section-title");
    expect(title).toHaveTextContent("04. Whats Next?");
  });

  it("renders description", () => {
    const { queryByTestId } = render(<Footer />);
    expect(queryByTestId("contact-info")).toHaveTextContent(
      PortfolioData.contact.contactText
    );
  });

  it("opens email for contact", () => {
    const { getByTestId } = render(<Footer />);
    const contactButton = getByTestId("contact-btn");
    expect(contactButton).toHaveAttribute(
      "href",
      `mailto:${PortfolioData.contact.email}`
    );
  });
});
