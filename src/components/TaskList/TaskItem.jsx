import React, { useEffect } from "react";
import styled from "styled-components";
import { setLocalStorage } from "../../utils/localStorage";
import { Checkbox } from "../Input/Checkbox";

export const TaskItem = ({
  id,
  task,
  completed,
  handleRemoveTask,
  handleChecked
}) => {
  return (
    <Wrapper>
      <Checkbox
        id={id}
        checked={completed}
        handleChecked={() => handleChecked(id)}
      />
      {/* <input type="checkbox" checked={completed ? "checked" : ""} /> */}
      {task}
      <button onClick={handleRemoveTask} className="remove">
        ×
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px 24px;

  &:hover {
    background-color: #e4e4e4;
    border-radius: 5px;
    transition: 0.4s;
  }
`;
