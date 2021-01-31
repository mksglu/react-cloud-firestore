import { logOut, signInAnonymous, createTodo, editTodo, deleteTodo, getTodos, checkAuthentication } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const EDIT_TODO_VISIBLE = "EDIT_TODO_VISIBLE";
export const DELETE_TODO = "DELETE_TODO";
export const GET_TODOS = "GET_TODOS";

export const SIGNIN = "SIGNIN";
export const LOGOUT = "LOGOUT";

export const TODO_ERROR = "TODO_ERROR";
export const USER_ERROR = "USER_ERROR";

export function handleAuthentication() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const userData = await checkAuthentication();
      dispatch({ type: SIGNIN, payload: { ...userData } });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: LOGOUT });
      dispatch(hideLoading());
    }
  };
}

export function handleGetTodos() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const todos = await getTodos();
      dispatch({ type: GET_TODOS, payload: [...todos] });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: TODO_ERROR });
    }
  };
}

export function handleCreateTodo(userId, newTodo) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const { id } = await createTodo(userId, newTodo);
      dispatch({ type: ADD_TODO, payload: { id, todo: newTodo } });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: TODO_ERROR });
    }
  };
}

export function handleEditTodo(todoId, newTodo) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      await editTodo(todoId, newTodo);
      const userId = getState().user.userId;
      dispatch({
        type: EDIT_TODO,
        payload: { id: todoId, todo: newTodo, userId },
      });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: TODO_ERROR });
    }
  };
}

export function handleEditVisible(visible) {
  return async (dispatch /*getState*/) => {
    dispatch({ type: EDIT_TODO_VISIBLE, payload: { visible } });
  };
}

export function handleDeleteTodo(todoId) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      await deleteTodo(todoId);
      dispatch({ type: DELETE_TODO, payload: { todoId } });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: TODO_ERROR });
    }
  };
}

export function handleSignInAnonymous(userData) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const _data = await signInAnonymous(userData);
      dispatch({ type: SIGNIN, payload: { ..._data } });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };
}

export function handleLogOut() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await logOut();
      dispatch({ type: LOGOUT });
      dispatch(hideLoading());
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };
}
