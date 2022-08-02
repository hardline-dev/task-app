import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

import { TaskForm } from "../components/TaskList/TaskForm";
import { TaskGroup } from "../components/TaskList/TaskGroup";
import { TaskItem } from "../components/TaskList/TaskItem";
import { DescList } from "../components/Description/DescList";
import { DescItem } from "../components/Description/DescItem";
import { Checkbox } from "../components/Input/Checkbox";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";

import styles from "./App.module.scss";

export const App = () => {
  const [tasks, setTasks] = useState(getLocalStorage("tasks"));
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueDescription, setInputValueDesciption] = useState("");
  const [modalActive, setModalActive] = useState({
    taskInfo: false,
    taskAdd: false
  });
  const [taskData, setTaskData] = useState();

  const handleValueTitle = (e) => {
    e.preventDefault();
    setInputValueTitle(e.target.value);
  };

  const handleValueDescription = (e) => {
    e.preventDefault();
    setInputValueDesciption(e.target.value);
  };

  const handleAddButton = () => {
    addTask(inputValueTitle, inputValueDescription);
    setInputValueTitle("");
    setInputValueDesciption("");
  };

  function addTask(title, description) {
    if (title.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : tasks.length + 1,
          task: title,
          description: description,
          completed: false,
          date: getDate()
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

  const getTaskData = (id) => {
    setTaskData(tasks.filter((task) => task.id === id));
  };

  const getDate = () => {
    const date = new Date();
    const options = { month: "short" };

    return `${date.toLocaleString("en-US", options)} ${date.getDate()}`;
  };

  useEffect(() => {
    setLocalStorage("tasks", tasks);
  }, [tasks]);

  return (
    <div className={styles.wrapper}>
      <TaskForm>
        <Button onClick={() => setModalActive({ taskAdd: true })}>
          Add task
        </Button>
      </TaskForm>
      <Modal active={modalActive.taskAdd} setActive={setModalActive}>
        <Input
          label="Title"
          onChange={handleValueTitle}
          value={inputValueTitle}
          placeholder="Create a new task"
        />
        <Input
          label="Description"
          onChange={handleValueDescription}
          value={inputValueDescription}
          placeholder="Complete this task for whole day"
        />

        <Button
          onClick={() => {
            handleAddButton();
            setModalActive({ taskAdd: false });
          }}
        >
          Add
        </Button>
      </Modal>

      <TaskGroup>
        {tasks.length ? (
          tasks.map(({ id, task, date, completed }) => (
            <TaskItem
              key={id}
              task={task}
              date={date}
              completed={completed}
              handleRemoveTask={() => handleRemoveTask(id)}
              handleToggle={() => handleToggle(id)}
              modalActive={setModalActive}
              getTaskData={() => getTaskData(id)}
            />
          ))
        ) : (
          <div className="no-task">No task.</div>
        )}
      </TaskGroup>

      <Modal active={modalActive.taskInfo} setActive={setModalActive}>
        {taskData && (
          <div>
            <Checkbox
              id={taskData[0].id}
              checked={taskData[0].completed}
              onChange={() => handleToggle(taskData[0].id)}
            />

            <DescList>
              <DescItem label="Title">{taskData[0].task}</DescItem>
              {taskData[0].description && (
                <DescItem label="Description">
                  {taskData[0].description}
                </DescItem>
              )}
              <DescItem label="Date">{taskData[0].date}</DescItem>
            </DescList>

            <button
              onClick={() => {
                handleRemoveTask(taskData[0].id);
                setModalActive({ taskAdd: false });
              }}
            >
              Remove
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};
