import React from "react";
import styled from "styled-components";
import { Input } from "../../components";
import { useDispatch } from "react-redux";
import { handleCreateTodo } from "../../actions";

const Form = styled.form``;
const CreateTask = ({ userId }) => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/\S/.test(task)) return;
    dispatch(handleCreateTodo(userId, task));
    setTask("");
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit} data-testid="form">
      <Input value={task} onChange={handleChange} data-testid="input"></Input>
    </Form>
  );
};

export default React.memo(CreateTask);
