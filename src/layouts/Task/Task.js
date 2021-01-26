import React from "react";
import styled from "styled-components";
import { _editTodo } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useOnClickOutside } from "../../hooks";
import { EditInput } from "../../components";

const TodoElement = styled.span`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 2em;
`;
const Task = ({ todoId, children }) => {
  const loading = useSelector((state) => state.loadingBar.default);
  const inputRef = React.useRef(null);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [text, setText] = React.useState(children);
  const dispatch = useDispatch();
  useOnClickOutside(inputRef, () => {
    setInputVisible(false);
    dispatch(_editTodo(todoId, text));
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputVisible(false);
    dispatch(_editTodo(todoId, text));
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (!loading) {
      setInputVisible(true);
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <React.Fragment>
      {inputVisible ? (
        <EditInput onSubmit={handleSubmit} inputRef={inputRef} value={text} onChange={handleChange} />
      ) : (
        <TodoElement data-testid="todoelement" onClick={handleClick}>
          {children}
        </TodoElement>
      )}
    </React.Fragment>
  );
};

export default React.memo(Task);
