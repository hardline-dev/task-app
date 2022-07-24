import React from "react";
import styled from "styled-components";

export const TaskGroup = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: var(--radius-medium);
  width: 100%;
`;
