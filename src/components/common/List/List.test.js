import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

const MockItemComponent = ({ item, i }) => (
  <div data-testid="mock-item" data-index={i}>
    {item.text}
  </div>
);

describe("List", () => {
  it('displays "No records" when list is null', () => {
    render(<List item={MockItemComponent} list={null} />);
    expect(screen.getByText("No records")).toBeInTheDocument();
  });

  it("renders correct number of items", () => {
    const mockList = [{ text: "Item 1" }, { text: "Item 2" }];
    render(<List item={MockItemComponent} list={mockList} />);
    const items = screen.getAllByTestId("mock-item");
    expect(items).toHaveLength(mockList.length);
  });
});
