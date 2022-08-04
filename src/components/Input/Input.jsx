import React from "react";

import styles from "./Input.module.scss";

export const Input = ({ label, onChange, value, placeholder }) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type="text"
      />
    </label>
  );
};
