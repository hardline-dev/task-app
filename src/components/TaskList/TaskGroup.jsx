import React from "react";

import styles from "./TaskGroup.module.scss";

export const TaskGroup = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
