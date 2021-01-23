import React from "react";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../";
describe("Input", () => {
  afterEach(cleanup);
  it("should be exist default props and check children", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId(/input/i);
    expect(input.getAttribute("placeholder")).toBe("Type a task...");
    expect(input.getAttribute("type")).toBe("text");
  });
  it("calls handleChange prop when texting", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId(/input/i);
    fireEvent.change(input, { target: { value: "do better!" } });
    expect(input.value).toBe("do better!");
  });
  it("should be style have specified sizes when login prop is true", () => {
    render(<Input data-testid="input" login />);
    const input = screen.getByTestId(/input/i);
    expect(input).toHaveStyle(`font-size: 20px; padding: 20px;`);
  });
});
