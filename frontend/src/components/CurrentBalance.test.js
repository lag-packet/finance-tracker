import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CurrentBalance from "./CurrentBalance";

describe("CurrentBalance Component", () => {
  it("renders the component correctly", () => {
    render(<CurrentBalance />);
    expect(screen.getByText("Current Balance")).toBeInTheDocument();
  });

  it("toggles input field on click", () => {
    render(<CurrentBalance />);
    fireEvent.click(screen.getByText(/\$\d+/));
    expect(screen.getByLabelText("Edit Balance")).toBeInTheDocument();
  });

  // Additional tests...
});
