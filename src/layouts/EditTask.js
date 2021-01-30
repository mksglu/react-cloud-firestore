import React from "react";
import { handleEditVisible,_editTodo } from "../actions";
import { useDispatch } from "react-redux";
import { useOnClickOutside } from "../hooks";
import { EditInput } from "../components";

const EditTask = ({ todoId, todo }) => {
  const inputRef = React.useRef(null);
  const [newTask, setNewTask] = React.useState(todo);
  const dispatch = useDispatch();
  useOnClickOutside(inputRef, () => {
    dispatch(handleEditVisible(false));
    dispatch(_editTodo(todoId, newTask));
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleEditVisible(false));
    dispatch(_editTodo(todoId, newTask));
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return <EditInput onSubmit={handleSubmit} inputRef={inputRef} value={newTask} onChange={handleChange} />;
};

export default React.memo(EditTask);
