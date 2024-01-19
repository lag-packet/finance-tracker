// RecentTransactions.test.js
import React from "react";
import { render, screen, within } from "@testing-library/react";
import RecentTransactions from "./RecentTransactions";

describe("RecentTransactions Component", () => {
  // Render the component
  beforeEach(() => {
    render(<RecentTransactions />);
  });

  // Check for Initial Render
  test("should render without crashing", () => {
    expect(screen.getByText("Recent Transactions")).toBeInTheDocument();
  });

  // Validate Conditional Rendering
  test("should correctly render the color based on the transaction type", () => {
    const transactionItems = screen.getAllByRole("listitem");

    transactionItems.forEach((item) => {
      const amountSpan = within(item).getByText(/\$\d+/); // Adjust the regex as needed to match the format of amount
      const isIncome = within(item).queryByText("Income");

      if (isIncome) {
        expect(amountSpan).toHaveClass("text-green-500");
      } else {
        expect(amountSpan).toHaveClass("text-red-500");
      }
    });
  });
});
