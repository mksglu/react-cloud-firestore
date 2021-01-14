import { combineReducers } from "redux";
import user from "./user";
import todos from "./todos";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  user,
  todos,
  loadingBar: loadingBarReducer,
});
