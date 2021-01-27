import React from "react";
import { Task } from "../../";
import { cleanup, render, fireEvent } from "../../../utils/test-utils";
jest.mock("../../../utils/api.js");
describe("Task", () => {
  afterEach(cleanup);
  it("should be list task and when click task, input should be visible and task span must be hidden", async () => {
    const initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
    const { queryByTestId, getByTestId } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    expect(queryByTestId(/todoelement/i)).toBeTruthy();
    expect(queryByTestId(/editinput/i)).toBeNull();
    expect(getByTestId("todoelement").textContent).toEqual("Hello");
    fireEvent.click(getByTestId("todoelement"));
    expect(queryByTestId(/editinput/i)).toBeTruthy();
    expect(queryByTestId(/todoelement/i)).toBeNull();
  });
  it("should be render value to edit input which belongs to task", async () => {
    const initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
    const { getByTestId } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    fireEvent.click(getByTestId("todoelement"));
    expect(getByTestId("editinput").value).toEqual("Hello");
  });
  it("should be changed edit inputs value when call onchange", async () => {
    const initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
    const { getByTestId } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    fireEvent.click(getByTestId("todoelement"));
    fireEvent.change(getByTestId("editinput"), { target: { value: "Hello Mert!" } });
    expect(getByTestId("editinput").value).toEqual("Hello Mert!");
  });
  it("should be update store when form is submitted", async () => {
    const initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
    const { getByTestId, getState, getDispatchedActions } = render(<Task todoId="todoId1" children="Hello" />, {
      initialState,
    });
    fireEvent.click(getByTestId("todoelement"));
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
