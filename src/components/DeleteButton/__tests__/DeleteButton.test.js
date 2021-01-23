import React from "react";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import { DeleteButton } from "../../";
describe("DeleteButton", () => {
  afterEach(cleanup);
  it("should be exist default props and check children", () => {
    render(<DeleteButton />);
    const button = screen.getByText(/x/i);
    expect(button).toHaveTextContent("X");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<DeleteButton onClick={handleClick} />);
    fireEvent.click(screen.getByText(/x/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
