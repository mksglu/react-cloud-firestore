import { SIGNIN, LOGOUT } from "../actions";
const initialState = { loading: true, isLogged: false };
export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { isLogged: true, loading: false, ...action.payload };
    case LOGOUT:
      return { isLogged: false, loading: false };
    default:
      return state;
  }
}
