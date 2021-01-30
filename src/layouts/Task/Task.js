import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import EditTask from "../EditTask";
import { handleEditVisible } from "../../actions";

const TodoElement = styled.span`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 2em;
`;
const Task = ({ todoId, children }) => {
  const loading = useSelector((state) => state.loadingBar.default);
  const isEdit = useSelector((state) => {
    const getTodo = state.todos.find((todo) => todo.id === todoId);
    return getTodo.visible;
  });
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    if (!loading) {
      dispatch(handleEditVisible(true));
    }
  };
  return (
    <React.Fragment>
      {isEdit ? (
        <EditTask todo={children} todoId={todoId} />
      ) : (
        <TodoElement data-testid="todoelement" onClick={handleClick}>
          {children}
        </TodoElement>
      )}
    </React.Fragment>
  );
};

export default React.memo(Task);
