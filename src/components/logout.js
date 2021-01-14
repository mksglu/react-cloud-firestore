import React from "react";
import { useDispatch } from "react-redux";
import { _logOut } from "../actions";
import { Button } from "./";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(_logOut());
    history.push("/signIn");
  };
  return (
    <Button logout onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export default Logout;
