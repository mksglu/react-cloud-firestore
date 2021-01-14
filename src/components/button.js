import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ logout, onClick, type, children }) => {
  const Button = styled.button`
  background: ${logout ? "palevioletred" : "white"};
  color: ${logout ? "white" : "palevioletred"};
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100px;
  height: 65px;
}
`;
  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  type: "button"
};
export default React.memo(ButtonComponent);
