import React from "react";
import styled from "styled-components";
import { Input, Button } from "../components";
import { useForm } from "react-hook-form";

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
`;
const SignIn = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
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
    </FormElement>
  );
};

export default React.memo(SignIn);
