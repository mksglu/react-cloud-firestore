import React from "react";
import styled from "styled-components";

const Button = styled.button`
background: ${(props) => (props.logout ? "palevioletred" : "white")};
color: ${(props) => (props.logout ? "white" : "palevioletred")};
font-size: 1em;
border: 2px solid palevioletred;
border-radius: 3px;
width: 100px;
height: 65px;
}
`;
const ButtonComponent = ({ logout, onClick, type, children }) => {
  return (
    <Button logout={logout} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  type: "button",
};
export default React.memo(ButtonComponent);
