import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import LoadingBar from "react-redux-loading";
import middleware from "./middleware";
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <LoadingBar />
    <App />
  </Provider>,
  document.getElementById("root")
);
