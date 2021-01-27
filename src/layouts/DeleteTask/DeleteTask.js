import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { _deleteTodo } from "../../actions";
import { DeleteButton } from "../../components";

const DeleteTask = ({ todoId }) => {
  const loading = useSelector((state) => {
    return state.loadingBar.default;
  });
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    if (!loading) {
      dispatch(_deleteTodo(todoId));
    }
  };
  return <DeleteButton onClick={handleClick} />;
};

export default React.memo(DeleteTask);
