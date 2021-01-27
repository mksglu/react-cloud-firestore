import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAuthentication } from "./actions/index";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LoadingBar from "react-redux-loading";

const Todo = React.lazy(() => import("./pages/Todo/Todo"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));

function App() {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => {
    return state.user;
  });
  React.useEffect(() => {
    dispatch(handleAuthentication());
  }, [dispatch]);
  const isLogged = getUser.isLogged;
  return (
    <React.Suspense fallback={<LoadingBar />}>
      {getUser.loading ? (
        <LoadingBar />
      ) : (
        <Router>
          <PrivateRoute
            isLogged={isLogged}
            path="/"
            component={() => <Todo user={getUser} />}
            exact
          />
          <PublicRoute
            isLogged={isLogged}
            path="/signIn"
            component={SignIn}
            exact
          />
        </Router>
      )}
    </React.Suspense>
  );
}

export default React.memo(App);
