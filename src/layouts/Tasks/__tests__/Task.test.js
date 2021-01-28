import React from "react";
import { cleanup, render } from "../../../utils/test-utils";
import { Tasks } from "../../";
describe("Tasks Layout", () => {
  afterEach(cleanup);
  it("should be render todos are empty", async () => {
    const todos = [];
    const { queryByText } = render(<Tasks todos={todos} />);
    expect(queryByText(":(")).toBeInTheDocument();
  });
  it("should be render todos are fiiled", async () => {
    const todos = [{ id: "todoId", userId: "userId1", todo: "Hello" }];
    const { getByTestId, queryByText } = render(<Tasks todos={todos} />);
    expect(queryByText(":(")).not.toBeInTheDocument();
    expect(getByTestId("todoelement").textContent).toEqual("Hello");
    expect(getByTestId("deleteButton").textContent).toEqual("X");
  });
});
