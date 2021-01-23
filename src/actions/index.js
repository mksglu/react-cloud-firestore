import {
  logOut,
  signInAnonymous,
  createTodo,
  editTodo,
  deleteTodo,
  getTodos,
  checkAuthentication,
} from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const GET_TODOS = "GET_TODOS";

export const SIGNIN = "SIGNIN";
export const LOGOUT = "LOGOUT";

export function handleAuthentication() {
  return async (dispatch) => {
    dispatch(showLoading());
    const userData = await checkAuthentication();
    if (!userData) {
      dispatch({ type: LOGOUT });
      dispatch(hideLoading());
    } else {
      dispatch({ type: SIGNIN, payload: { ...userData } });
      dispatch(hideLoading());
    }
  };
}
export function _getTodos() {
  return async (dispatch) => {
    dispatch(showLoading());
    const todos = await getTodos();
    dispatch({ type: GET_TODOS, payload: [...todos] });
    dispatch(hideLoading());
  };
}
export function _createTodo(userId, newTodo) {
  return async (dispatch) => {
    dispatch(showLoading());
    const { id } = await createTodo(userId, newTodo);
    dispatch({ type: ADD_TODO, payload: { id, todo: newTodo } });
    dispatch(hideLoading());
  };
}
export function _editTodo(todoId, newTodo) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    await editTodo(todoId, newTodo);
    const userId = getState().user.userId;
    console.log("edit userid",userId);
    dispatch({
      type: EDIT_TODO,
      payload: { id: todoId, todo: newTodo, userId },
    });
    dispatch(hideLoading());
  };
}
export function _deleteTodo(todoId) {
  return async (dispatch) => {
    dispatch(showLoading());
    await deleteTodo(todoId);
    dispatch({ type: DELETE_TODO, payload: { todoId } });
    dispatch(hideLoading());
  };
}
export function _signInAnonymous(userData) {
  return async (dispatch) => {
    dispatch(showLoading());
    const _data = await signInAnonymous(userData);
    dispatch({ type: SIGNIN, payload: { ..._data } });
    dispatch(hideLoading());
  };
}
export function _logOut() {
  return async (dispatch) => {
    dispatch(showLoading());
    await logOut();
    dispatch({ type: LOGOUT });
    dispatch(hideLoading());
  };
}
