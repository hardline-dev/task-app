import React from "react";

import styles from "./Checkbox.module.scss";

export const Checkbox = ({ id, checked, onChange }) => {
  return (
    <input
      onClick={(e) => e.stopPropagation()}
      type="checkbox"
      onChange={onChange}
      defaultChecked={checked}
    />
  );
};
