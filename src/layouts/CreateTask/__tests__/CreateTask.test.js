import React from "react";
import { CreateTask } from "../../";
import { cleanup, render, fireEvent } from "../../../utils/test-utils";
import { createTodo } from "../../../utils/api";
jest.mock("../../../utils/api.js");
describe("CreateTask", () => {
  afterEach(cleanup);
  it("should create a new task", async () => {
    const { getByTestId, getState, getDispatchedActions } = render(<CreateTask />, {
      initialState: { todos: [{ id: "todo1", todo: "Todo 1" }] },
    });
    const input = getByTestId(/input/i);
    fireEvent.change(input, { target: { value: "That is new todo item!" } });
    createTodo.mockReturnValueOnce(Promise.resolve({ id: "todo2" }));
    fireEvent.submit(getByTestId("form"));
    await getDispatchedActions();
    const expectedTodos = [
      { id: "todo1", todo: "Todo 1" },
      { id: "todo2", todo: "That is new todo item!" },
    ];
    const todos = getState().todos;
    expect(todos).toEqual(expectedTodos);
  });
  it("should not create a new task when input is empty", async () => {
    const { getByTestId, getState, getDispatchedActions } = render(<CreateTask />, {
      initialState: { todos: [{ id: "todo1", todo: "Todo 1" }] },
    });
    const input = getByTestId(/input/i);
    fireEvent.change(input, { target: { value: "" } });
    createTodo.mockReturnValueOnce(Promise.resolve({ id: "todo2" }));
    fireEvent.submit(getByTestId("form"));
    await getDispatchedActions();
    const expectedTodos = [{ id: "todo1", todo: "Todo 1" }];
    const todos = getState().todos;
    expect(todos).toEqual(expectedTodos);
  });
});
