import React from "react";
import cn from "classnames";

import { Checkbox } from "../Input/Checkbox";

import styles from "./TaskItem.module.scss";

export const TaskItem = ({
  task,
  date,
  completed,
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
      <div>
        <Checkbox checked={completed} onChange={handleToggle} />
        <span
          className={
            completed ? cn(styles.title, styles.completed) : styles.title
          }
        >
          {task}
        </span>
      </div>
      <span className={styles.completed}>{date}</span>
    </div>
  );
};
