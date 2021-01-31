import { ADD_TODO, EDIT_TODO, DELETE_TODO, GET_TODOS, EDIT_TODO_VISIBLE } from "../actions";
const initialState = [];
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO_VISIBLE:
      return state.map((task) => ({
        ...task,
        visible: action.payload.visible,
      }));
    case EDIT_TODO:
      return state.map((task) => (task.id === action.payload.id ? { ...task, todo: action.payload.todo } : task));
    case DELETE_TODO:
      const currentTodoIndex = state.findIndex((todo) => todo.id === action.payload.todoId);
      const newState = [...state];
      newState.splice(currentTodoIndex, 1);
      return newState;
    case GET_TODOS:
      return action.payload;
    default:
      return state;
  }
}
