import React from "react";

import styles from "./Checkbox.module.scss";

export const Checkbox = ({ id, checked, onChange }) => {
  return (
    <label onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={onChange}
        defaultChecked={checked}
      />
      <span className={styles.label}></span>
    </label>
  );
};
