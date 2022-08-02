import React from "react";

import styles from "./DescList.module.scss";

export const DescList = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
