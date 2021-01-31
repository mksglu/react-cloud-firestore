import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSignInAnonymous } from "../../actions";
import { SignIn } from "../../layouts";
function SignInPage() {
  const loading = useSelector((state) => state.loadingBar.default);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data && !loading) {
      dispatch(handleSignInAnonymous(data));
    }
  };
  return <SignIn onSubmit={onSubmit} />;
}

export default React.memo(SignInPage);
