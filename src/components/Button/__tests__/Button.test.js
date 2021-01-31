import React from "react";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../../";
describe("Button", () => {
  afterEach(cleanup);
  it("should be exist default props and check children", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button.getAttribute("type")).toBe("button");
    expect(button).toHaveTextContent("Click Me");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should be style have specified colored when logout is true", () => {
    render(
      <Button logout={true} onClick={() => {}}>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/click me/i);
    expect(button).toHaveStyle(`background: palevioletred; color: white;`);
  });
  it("should be style have specified colored when logout is false", () => {
    render(
      <Button logout={false} onClick={() => {}}>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/click me/i);
    expect(button).toHaveStyle(`background: white; color: palevioletred;`);
  });
});
