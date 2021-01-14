import React from "react";
import styled from "styled-components";
import { _editTodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = styled.span`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 2em;
`;
const Input = styled.input`
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  margin-top: 5px;
  padding-top: 5px;
`;
const Form = styled.form``;

const TodoComponent = ({ todoId, children }) => {
  const loading = useSelector((state) => {
    return state.loadingBar.default;
  });
  const inputRef = React.useRef(null);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [text, setText] = React.useState(children);
  const dispatch = useDispatch();

  const onClickOutSide = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputVisible(false);
      dispatch(_editTodo(todoId, text));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputVisible(false);
    dispatch(_editTodo(todoId, text));
  };
  React.useEffect(() => {
    if (inputVisible) {
      document.addEventListener("mousedown", onClickOutSide);
    }
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  });
  return (
    <React.Fragment>
      {inputVisible ? (
        <Form onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </Form>
      ) : (
        <Todo
          onClick={() => {
            !loading && setInputVisible(true);
          }}
        >
          {children}
        </Todo>
      )}
    </React.Fragment>
  );
};

export default React.memo(TodoComponent);
