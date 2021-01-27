import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./logger";
const getEnvironment = process.env.NODE_ENV;

export default applyMiddleware(
  thunk,
  logger
);
