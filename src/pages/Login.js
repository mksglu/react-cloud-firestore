import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { _signInAnonymous } from "../actions";
import { Input, Button } from "../components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
`;
function SignIn() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (data) {
      dispatch(_signInAnonymous(data));
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        login
        register={register({ required: true })}
        name="userName"
        placeholder="username"
      ></Input>
      {errors.userName && "user name is required"}
      <Input
        login
        register={register({ required: true })}
        name="firstName"
        placeholder="firstname"
      ></Input>
      {errors.firstName && "first name is required"}
      <Input
        login
        register={register({ required: false })}
        name="lastName"
        placeholder="lastname"
      ></Input>
      <Button type="submit">Sign In</Button>
    </Form>
  );
}

export default SignIn;
