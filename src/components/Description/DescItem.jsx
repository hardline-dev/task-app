import React from "react";

import styles from "./DescItem.module.scss";

export const DescItem = ({ children, label }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};
