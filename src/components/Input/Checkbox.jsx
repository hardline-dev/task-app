import React from "react";
import styled from "styled-components";

export const Checkbox = ({ id, checked, handleChecked }) => {
  return (
    <input
      type="checkbox"
      value={id}
      onChange={handleChecked}
      defaultChecked={checked}
    />
  );
};

const StyledCheckbox = styled.input``;
