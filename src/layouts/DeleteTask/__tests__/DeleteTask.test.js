import React from "react";
import { DeleteTask } from "../../";
import { cleanup, render, fireEvent } from "../../../utils/test-utils";
import { deleteTodo } from "../../../utils/api";
jest.mock("../../../utils/api.js");
describe("DeleteTask", () => {
  afterEach(cleanup);
  let initialState = [];
  beforeAll(() => {
    initialState = { todos: [{ id: "todoId1", todo: "Hello" }] };
  });
  it("should not task is deleted when api result is reject", async () => {
    const { getDispatchedActions, getState, getByTestId } = render(<DeleteTask todoId="todoId1" />, {
      initialState,
    });
    deleteTodo.mockReturnValue(Promise.reject());
    expect(getState().todos.length).toBe(1);
    fireEvent.click(getByTestId("deleteButton"));
    await getDispatchedActions();
    expect(getState().todos.length).toBe(1);
  });
  it("should task is deleted when api result is resolve", async () => {
    const { getDispatchedActions, getState, getByTestId } = render(<DeleteTask todoId="todoId1" />, {
      initialState,
    });
    deleteTodo.mockReturnValue(Promise.resolve());
    expect(getState().todos.length).toBe(1);
    fireEvent.click(getByTestId("deleteButton"));
    await getDispatchedActions();
    expect(getState().todos.length).toBe(0);
  });
  it("should not task is deleted when loading still is true", async () => {
    const { getDispatchedActions, getState, getByTestId } = render(<DeleteTask todoId="todoId1" />, {
      initialState,
    });
    deleteTodo.mockReturnValue(new Promise(() => {}));
    expect(getState().todos.length).toBe(1);
    fireEvent.click(getByTestId("deleteButton"));
    await getDispatchedActions();
    expect(getState().todos.length).toBe(1);
  });
});
