import React from "react";
import styled from "styled-components";
import { Remove, Todo } from "./";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;
const Task = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Tasks = (props) => {
  if (props.todos.length === 0) return <h2>:(</h2>;
  return (
    <TasksContainer>
      {props.todos.map((todo, index) => {
        return (
          <Task key={index}>
            <Todo todoId={todo.id}>{todo.todo}</Todo>
            <Remove todoId={todo.id} />
          </Task>
        );
      })}
    </TasksContainer>
  );
};

export default React.memo(Tasks);
