import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getTodos } from "../actions";
import { Button } from "../components";
import { CreateTask, Logout, Tasks } from "../layouts";
import styled from "styled-components";

function TodoPage(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  React.useEffect(() => {
    dispatch(_getTodos());
  }, [dispatch, props.user.userId]);

  const ContainerElement = styled.div`
    justify-content: space-around;
    width: 100%;
    margin-top: 50px;
    display: inline-flex;
    flex-wrap: wrap;
  `;
  const TodoContainerElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;
  const UserContainerElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
  `;
  return (
    <ContainerElement>
      <TodoContainerElement>
        <CreateTask userId={props.user.userId}></CreateTask>
        <Tasks todos={todos}></Tasks>
      </TodoContainerElement>
      <UserContainerElement>
        <Button>{props.user.userName}</Button>
        <Logout>Logout</Logout>
      </UserContainerElement>
    </ContainerElement>
  );
}

export default React.memo(TodoPage);
