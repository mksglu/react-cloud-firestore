import React from "react";
import styled from "styled-components";

const DeleteButtonElement = styled.span`
  background: white;
  color: palevioletred;
  font-size: 2em;
  cursor: pointer;
  border-radius: 3px;
  width: 10px;
`;
const DeleteButton = ({ onClick, children }) => (
  <DeleteButtonElement data-testid="deleteButton" onClick={onClick}>
    {children}
  </DeleteButtonElement>
);

DeleteButton.defaultProps = {
  children: "X",
};

export default React.memo(DeleteButton);
