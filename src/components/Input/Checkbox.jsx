import React from "react";
import styled from "styled-components";

export const Checkbox = ({ checked, handleToggle }) => {
  return (
    <input type="checkbox" onChange={handleToggle} defaultChecked={checked} />
  );
};

const StyledCheckbox = styled.input``;
