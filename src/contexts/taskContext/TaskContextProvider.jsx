import React, { createContext, useState } from "react";
import axios from "axios";

export const taskCtxDefaultValues = {
  tasks: [],
  isLoading: false,
  getTasks: () => null,
  updateTask: () => null,
  deleteTask: () => null
};

export const TaskCtx = createContext(taskCtxDefaultValues);

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getTasks = () => {
    setIsLoading(true);
    axios
      .get("http://api.ticked.hng.tech:2022/task")
      .then(res => setTasks(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const updateTask = () => {};

  const deleteTask = () => {};
  return (
    <TaskCtx.Provider
      value={{ tasks, isLoading, getTasks, updateTask, deleteTask }}
    >
      {children}
    </TaskCtx.Provider>
  );
};

export default TaskContextProvider;
