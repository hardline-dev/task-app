import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

import { TaskForm } from "../components/TaskList/TaskForm";
import { TaskGroup } from "../components/TaskList/TaskGroup";
import { TaskItem } from "../components/TaskList/TaskItem";
import { Modal } from "../components/Modal/Modal";

import styles from "./App.module.scss";

export const App = () => {
  const [tasks, setTasks] = useState(getLocalStorage("tasks"));
  const [inputValue, setInputValue] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const handleChangeValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleAddButton = () => {
    addTask(inputValue);
    setInputValue("");
  };

  function addTask(value) {
    if (value.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : tasks.length + 1,
          task: value,
          completed: false
        }
      ]);
    } else {
      console.log("MALO LENGTH");
    }
  }

  const handleRemoveTask = (id) => {
    removeTask(id);
  };

  function removeTask(id) {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  const handleToggle = (id) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : { ...task }
      )
    ]);
  };

  useEffect(() => {
    setLocalStorage("tasks", tasks);
  }, [tasks]);

  return (
    <div className={styles.wrapper}>
      <TaskForm
        handleChangeValue={handleChangeValue}
        inputValue={inputValue}
        handleAddButton={handleAddButton}
      />

      <TaskGroup>
        {tasks.length ? (
          tasks.map(({ id, task, completed }) => (
            <TaskItem
              key={id}
              task={task}
              completed={completed}
              handleRemoveTask={() => handleRemoveTask(id)}
              handleToggle={() => handleToggle(id)}
              modalActive={() => setModalActive(true)}
            />
          ))
        ) : (
          <div className="no-task">No task.</div>
        )}
      </TaskGroup>

      <Modal active={modalActive} setActive={setModalActive}>
        Hello
      </Modal>
    </div>
  );
};
