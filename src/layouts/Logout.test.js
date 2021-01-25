import React from "react";
import { Logout } from "./";
import {  render, fireEvent, screen } from "../utils/test-utils";
jest.mock("../utils/api.js", () => ({
  logOut: () => Promise.resolve(true),
}));
describe("Logout", () => {
  it("should be isLogged false when logout button is clicked", async () => {
    const { getState,getDispatchedActions} = render(<Logout>Click Me</Logout>, {
        initialState: { user: {isLogged:true} },
    });
    fireEvent.click(screen.getByText(/click me/i));
    await getDispatchedActions()
    expect(getState().user).toEqual({ isLogged: false, loading: false });
  });
});
