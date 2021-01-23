import React from "react";
import { useDispatch } from "react-redux";
import { _signInAnonymous } from "../actions";
import { SignIn } from "../layouts";
function SignInPage() {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data) {
      dispatch(_signInAnonymous(data));
    }
  };
  return <SignIn onSubmit={onSubmit} />;
}

export default React.memo(SignInPage);
