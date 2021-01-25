import React from "react";
import { Logout } from "./";
import { render, fireEvent, screen } from "../utils/test-utils";
import { logOut } from "../utils/api";
jest.mock("../utils/api.js");
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("Logout", () => {
  it("should be isLogged false when logout button is clicked", async () => {
    const { getState, getDispatchedActions } = render(<Logout>Click Me</Logout>, { initialState: { user: { isLogged: true, loading: false } } });
    logOut.mockReturnValueOnce(Promise.resolve());
    fireEvent.click(screen.getByText(/click me/i));
    await getDispatchedActions();
    expect(mockHistoryPush).toHaveBeenCalledWith("/signIn");
    expect(getState().user).toEqual({ isLogged: false, loading: false });
  });
});
