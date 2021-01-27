import React from "react";
import { TodoPage } from "../../";
import { render } from "../../../utils/test-utils";
jest.mock("../../../utils/api.js");
describe("Todo Page", () => {
  const user = { userId: "userId", userName: "userName" };
  const initialState = {
    user: { isLogged: true, loading: false, userId: "userId", firstName: "firstName", lastName: "lastName", userName: "userName" },
    todos: [{ id: "todoId", userId: "userId1", todo: "Hello" }],
    loadingBar: { default: 0 },
  };
  it("todo page should be successfuly render", async () => {
    const { getByTestId, getByText } = render(<TodoPage user={user} />, { initialState });
    expect(getByTestId(/form/i)).toBeInTheDocument();
    expect(getByTestId(/input/i)).toBeInTheDocument();
    expect(getByTestId(/todoelement/i)).toBeInTheDocument();
    expect(getByTestId(/todoelement/i).textContent).toEqual("Hello");
    expect(getByText("X")).toBeInTheDocument();
    expect(getByText("userName")).toBeInTheDocument();
    expect(getByText("Logout")).toBeInTheDocument();
  });
});
