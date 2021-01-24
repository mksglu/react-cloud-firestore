import React from "react";
import styled from "styled-components";

const EditInputElement = styled.input`
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  margin-top: 5px;
  padding-top: 5px;
`;
const FormElement = styled.form``;

const EditInputComponent = ({ onSubmit, onChange, inputRef, value }) => {
  return (
    <FormElement onSubmit={onSubmit}>
      <EditInputElement ref={inputRef} onChange={onChange} value={value} />;
    </FormElement>
  );
};

EditInputComponent.defaultProps = {
  type: "text",
};

export default React.memo(EditInputComponent);
