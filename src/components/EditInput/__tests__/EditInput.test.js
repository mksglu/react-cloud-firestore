import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { EditInput } from "../../";
describe("EditInput", () => {
  afterEach(cleanup);
  it("should be exist default props", () => {
    const { getByTestId } = render(<EditInput />);
    expect(getByTestId("editinput").getAttribute("type")).toBe("text");
  });
  it("should be calls handleChange and handleSubmit", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<EditInput onSubmit={handleSubmit} onChange={handleChange} />);
    fireEvent.change(getByTestId("editinput"), { target: { value: "The task is changed." } });
    expect(handleChange).toHaveBeenCalled();
    fireEvent.submit(getByTestId("editform"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
