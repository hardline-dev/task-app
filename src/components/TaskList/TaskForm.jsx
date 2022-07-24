import React from "react";
import styled from "styled-components";

export const TaskForm = ({
  handleChangeValue,
  handleAddButton,
  inputValue
}) => {
  return (
    <Wrapper>
      <input type="text" onChange={handleChangeValue} value={inputValue} />
      <button onClick={handleAddButton}>Add task</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);

  padding: 20px;
`;
