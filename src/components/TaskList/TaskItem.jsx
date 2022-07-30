import React from "react";
import cn from "classnames";

import { Checkbox } from "../Input/Checkbox";

import styles from "./TaskItem.module.scss";

export const TaskItem = ({
  id,
  task,
  date,
  completed,
  handleRemoveTask,
  handleToggle,
  modalActive,
  getTaskData
}) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        modalActive({ taskInfo: true });
        getTaskData();
      }}
    >
      <Checkbox id={id} checked={completed} handleToggle={handleToggle} />
      <span
        className={
          completed ? cn(styles.title, styles.completed) : styles.title
        }
      >
        {task}
      </span>
      {/* <button onClick={handleRemoveTask} className="remove">
        ×
      </button> */}
      <span className={styles.completed}>{date}</span>
    </div>
  );
};
