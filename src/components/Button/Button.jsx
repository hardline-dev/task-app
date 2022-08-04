import React from "react";

import styles from "./Button.module.scss";

export const Button = ({ children, onClick, color }) => {
  const handleColor =
    color === "red" ? "var(--color-red)" : "var(--color-purple)";

  return (
    <button
      style={{ backgroundColor: handleColor }}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
