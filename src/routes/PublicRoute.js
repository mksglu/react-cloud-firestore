import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isLogged, ...props }) => {
  return isLogged ? <Redirect to="/" /> : <Route {...props} />;
};
export default PublicRoute;
