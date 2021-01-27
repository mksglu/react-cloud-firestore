import React from "react";
import styled from "styled-components";
import { Input, Button } from "../../components";
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
    <FormElement onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <Input login register={register({ required: true })} data-testid="userName" name="userName" placeholder="username"></Input>
      {errors.userName && <div data-testid="userNameRequired">user name is required</div>}
      <Input login register={register({ required: true })} data-testid="firstName" name="firstName" placeholder="firstname"></Input>
      {errors.firstName && <div data-testid="firstNameRequired">first name is required</div>}
      <Input login register={register({ required: false })} data-testid="lastName" name="lastName" placeholder="lastname"></Input>
      <Button type="submit">Sign In</Button>
    </FormElement>
  );
};

export default React.memo(SignIn);
