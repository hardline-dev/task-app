import React from "react";

import styles from "./Checkbox.module.scss";

export const Checkbox = ({ checked, handleToggle }) => {
  return (
    <input
      onClick={(e) => e.stopPropagation()}
      type="checkbox"
      onChange={handleToggle}
      defaultChecked={checked}
    />
  );
};
