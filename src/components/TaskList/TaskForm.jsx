import React from "react";

import styles from "./TaskForm.module.scss";

export const TaskForm = ({
  children,
  handleChangeValue,
  handleAddButton,
  inputValue
}) => {
  return (
    <div className={styles.wrapper}>
      {/* <input type="text" onChange={handleChangeValue} value={inputValue} />
      <button onClick={handleAddButton}>Add task</button> */}
      {children}
    </div>
  );
};
