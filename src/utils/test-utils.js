import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";
const history = createMemoryHistory();
const actions = [];
const observerMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  if (typeof action === "function") {
    actions.push(action);
    return action(dispatch, getState);
  }
  return next(action);
};
function render(
  ui,
  {
    initialState = {},
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(observerMiddleware)
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Router history={history}>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  }
  const utils = {
    dispatch(action) {
      console.log("action", action);
      return store.dispatch(action);
    },
    async getDispatchedActions() {
        return actions;
      },
    getState() {
      return store.getState();
    },
    store
  };
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    ...utils,
  };
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
