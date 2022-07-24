import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

import { TaskForm } from "../components/TaskList/TaskForm";
import { TaskGroup } from "../components/TaskList/TaskGroup";
import { TaskItem } from "../components/TaskList/TaskItem";

export const App = () => {
  const [tasks, setTasks] = useState(getLocalStorage("tasks"));
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
          completed: isChecked
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
    const newTasks = tasks.filter((task) => task.id !== id).map((item) => item);
    setTasks(newTasks);
    console.log(newTasks);
  }

  const handleChecked = (id) => {
    if (tasks.id === id) {
      setIsChecked(!isChecked);
    }
  };

  useEffect(() => {
    setLocalStorage("tasks", tasks);
  }, [tasks]);

  return (
    <Wrapper>
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
              handleChecked={handleChecked}
            />
          ))
        ) : (
          <div className="no-task">No task.</div>
        )}
      </TaskGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 20px;
`;
