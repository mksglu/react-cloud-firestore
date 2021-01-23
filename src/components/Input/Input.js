import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  font-size: ${(props) => (props.login ? "20px" : "40px")};
  padding: ${(props) => (props.login ? "20px" : "10px")};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
const InputComponent = (props) => {
  return <InputElement ref={props.register} {...props} />;
};

InputComponent.defaultProps = {
  type: "text",
  placeholder: "Type a task...",
};

export default React.memo(InputComponent);
