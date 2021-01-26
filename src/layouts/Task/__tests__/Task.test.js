import React from "react";
import { Task } from "../../";
import { cleanup, render, fireEvent } from "../../../utils/test-utils";
jest.mock("../../../utils/api.js");
describe("Task", () => {
  afterEach(cleanup);
  it("should be list task and could be edit", async () => {
    const initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
    const { queryByTestId, getByTestId, getState, getDispatchedActions } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    expect(queryByTestId(/todoelement/i)).toBeTruthy();
    expect(queryByTestId(/editinput/i)).toBeNull();
    expect(getByTestId("todoelement").textContent).toEqual("Hello");
    fireEvent.click(getByTestId("todoelement"));
    expect(queryByTestId(/editinput/i)).toBeTruthy();
    expect(queryByTestId(/todoelement/i)).toBeNull();
    expect(getByTestId("editinput").value).toEqual("Hello");
    fireEvent.change(getByTestId("editinput"), { target: { value: "Hello Mert!" } });
    expect(getByTestId("editinput").value).toEqual("Hello Mert!");
    expect(getState().todos[0].todo).toEqual("Hello");
    fireEvent.submit(getByTestId("editform"));
    await getDispatchedActions();
    expect(getState().todos[0].todo).toEqual("Hello Mert!");
  });
  it("should not visible edit input when loading is true", async () => {
    const initialState = { loadingBar: { default: 1 }, todos: [{ id: "todoId1", todo: "Hello" }] };
    const { queryByTestId, getByTestId } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    expect(queryByTestId(/todoelement/i)).toBeTruthy();
    expect(getByTestId("todoelement").textContent).toEqual("Hello");
    fireEvent.click(getByTestId("todoelement"));
    expect(queryByTestId(/editinput/i)).toBeNull();
  });
});
