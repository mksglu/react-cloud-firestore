import React from "react";
import { SignInPage } from "../../";
import { cleanup, render } from "../../../utils/test-utils";
import { signInAnonymous } from "../../../utils/api";
jest.mock("../../../utils/api.js");
describe("SignIn Page", () => {
  afterEach(cleanup);
  const initialState = {
    user: { isLogged: true, loading: false, userId: "userId", userName: "mksglu", firstName: "Mert", lastName: "Koseoglu" },
    todos: [{ id: "todoId", userId: "userId1", todo: "Hello" }],
    loadingBar: { default: 0 },
  };
  it("SignIn page should be successfuly render", async () => {
    const { getByTestId, getState } = render(<SignInPage />, { initialState });
    signInAnonymous.mockReturnValueOnce(
      Promise.resolve({ userId: initialState.user.userId, userName: initialState.user.userName, firstName: initialState.user.firstName, lastName: initialState.user.lastName })
    );
    expect(getByTestId("form")).toBeTruthy();
    expect(getState().user.userId).toEqual(initialState.user.userId);
    expect(getState().user.userName).toEqual(initialState.user.userName);
    expect(getState().user.firstName).toEqual(initialState.user.firstName);
    expect(getState().user.lastName).toEqual(initialState.user.lastName);
  });
});
