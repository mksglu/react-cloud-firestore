import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { _deleteTodo } from "../actions";

const Delete = styled.span`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 2em;
  cursor: pointer;
  border-radius: 3px;
  width: 10px;
`;
const DeleteComponent = ({ todoId, children }) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(_deleteTodo(todoId));
  };
  return <Delete onClick={handleClick}>{children}</Delete>;
};

DeleteComponent.defaultProps = {
  children: "X",
};

export default React.memo(DeleteComponent);
