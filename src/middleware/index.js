import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./logger";
const getEnvironment = process.env.NODE_ENV;

let middleware = [thunk];
if (getEnvironment === "development") {
  middleware = [...middleware, logger];
}

export default applyMiddleware(...middleware);

