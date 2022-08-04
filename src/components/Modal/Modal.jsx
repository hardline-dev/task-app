import React from "react";
import cn from "classnames";

import styles from "./Modal.module.scss";

export const Modal = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? cn(styles.modal, styles.active) : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? cn(styles.modal__content, styles.active)
            : styles.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
