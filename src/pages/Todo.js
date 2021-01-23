import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getTodos } from "../actions";
import { Button, Tasks, CreateTask, Logout } from "../components";
import styled from "styled-components";
function TodoPage(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  React.useEffect(() => {
    dispatch(_getTodos());
  }, [dispatch, props.user.userId]);

  const Container = styled.div`
    justify-content: space-around;
    width: 100%;
    margin-top: 50px;
    display: inline-flex;
    flex-wrap: wrap;
  `;
  const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;
  const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
  `;
  return (
    <Container>
      <TodoContainer>
        <CreateTask userId={props.user.userId}></CreateTask>
        <Tasks todos={todos}></Tasks>
      </TodoContainer>
      <UserContainer>
        <Button>{props.user.userName}</Button>
        <Logout>Logout</Logout>
      </UserContainer>
    </Container>
  );
}

export default TodoPage;
