import React from "react";
import styled from "styled-components";
import { Input } from "./";
import { useDispatch } from "react-redux";
import { _createTodo } from "../actions";

const Form = styled.form``;
const CreateTask = ({ userId }) => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/\S/.test(task)) return;
    dispatch(_createTodo(userId, task));
    setTask("");
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input value={task} onChange={handleChange}></Input>
    </Form>
  );
};

export default React.memo(CreateTask);
