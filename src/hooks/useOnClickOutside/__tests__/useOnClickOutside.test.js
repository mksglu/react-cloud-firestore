import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useOnClickOutside } from "../../";

const ClickOutside = () => {
  const inputRef = React.useRef(null);
  const [say, setSay] = React.useState("Hello");
  useOnClickOutside(inputRef, () => {
    setSay("Hi");
  });
  return <button data-testid="input" value={say} ref={inputRef} />;
};

describe("<ClickOutside />", () => {
  it("should call useOnClickOutside when clicking outside", () => {
    const { getByTestId } = render(<ClickOutside />);
    fireEvent.mouseDown(document.body);
    expect(getByTestId("input").value).toEqual("Hi");
  });
  it("should not call useOnClickOutside when clicking outside", () => {
    const { getByTestId } = render(<ClickOutside />);
    fireEvent.mouseDown(getByTestId("input"));
    expect(getByTestId("input").value).toEqual("Hello");
  });
});
