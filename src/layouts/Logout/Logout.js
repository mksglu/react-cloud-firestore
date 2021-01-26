import React from "react";
import { useDispatch } from "react-redux";
import { _logOut } from "../../actions";
import { Button } from "../../components";
import { useHistory } from "react-router-dom";
const LOGIN_URI = "/signIn"

const Logout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(_logOut());
    history.push(LOGIN_URI);
  };
  return (
    <Button logout onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Logout;
