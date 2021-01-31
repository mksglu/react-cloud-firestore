import React from "react";
import { useDispatch } from "react-redux";
import { handleLogOut } from "../../actions";
import { Button } from "../../components";
import { useHistory } from "react-router-dom";
const LOGIN_URI = "/signIn";

const Logout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(handleLogOut());
    history.push(LOGIN_URI);
  };
  return (
    <Button logout onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Logout;
