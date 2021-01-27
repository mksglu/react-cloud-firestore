import * as React from "react";
import { cleanup, render, fireEvent, act } from "@testing-library/react";
import { SignIn } from "../../";
describe("SignIn Layout", () => {
  afterEach(cleanup);
  it("should call onSubmit when all inputs is filled", async () => {
    const onSubmit = jest.fn();
    const { getByTestId, queryByText } = render(<SignIn onSubmit={onSubmit} />);
    const userName = getByTestId("userName");
    const firstName = getByTestId("firstName");
    await act(async () => {
      await fireEvent.change(userName, { target: { value: "mksglu" } });
      await fireEvent.change(firstName, { target: { value: "Mert" } });
      await fireEvent.submit(getByTestId("form"));
    });
    expect(queryByText("user name is required")).not.toBeInTheDocument();
    expect(queryByText("first name is required")).not.toBeInTheDocument();
    expect(onSubmit).toBeCalled();
  });

  it("should not call onSubmit when which is required inputs are empty", async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignIn onSubmit={onSubmit} />);
    await act(async () => {
      await fireEvent.submit(getByTestId("form"));
    });
    expect(getByTestId("userNameRequired")).toBeVisible();
    expect(getByTestId("firstNameRequired")).toBeVisible();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
