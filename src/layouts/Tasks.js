import React from "react";
import styled from "styled-components";
import { Task, DeleteTask } from "../layouts";

const TasksContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;
const TaskElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Tasks = ({ todos }) => {
  if (todos.length === 0) return <h2>:(</h2>;
  return (
    <TasksContainerElement>
      {todos.map((todo, index) => {
        return (
          <TaskElement key={index}>
            <Task todoId={todo.id}>{todo.todo}</Task>
            <DeleteTask todoId={todo.id} />
          </TaskElement>
        );
      })}
    </TasksContainerElement>
  );
};

export default React.memo(Tasks);
