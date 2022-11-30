import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const taskCtxDefaultValues = {
  tasks: [],
  task: {},
  isLoading: false,
  getTasks: () => null,
  getClickedTask: () => null,
  getTaskById: () => null,
  updateTask: () => null,
  deleteTask: () => null
};

export const TaskCtx = createContext(taskCtxDefaultValues);

const TaskContextProvider = ({ children }) => {
  const base_url = "https://api.ticked.hng.tech/api/v1";
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getTasks = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`${base_url}/task`)
      .then(res => setTasks(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setTasks]);

  const getTaskById = useCallback(
    id => {
      setIsLoading(true);
      axios
        .get(`${base_url}/task/${id}`)
        .then(res => setTask(res))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    },
    [setTask]
  );

  const getClickedTask = id => {
    const tasks = JSON.parse(localStorage.getItem("myTasks"));
    const singleTask = tasks.find(i => i.task_id === id);
    setTask(singleTask);
  };

  const updateTask = (id, body) => {
    setIsLoading(true);
    axios
      .put(`${base_url}/task/${id}`, body)
      .then(res => res)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const deleteTask = id => {
    setIsLoading(true);
    axios
      .delete(`${base_url}/task/${id}`)
      .then(res => res)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <TaskCtx.Provider
      value={{
        tasks,
        task,
        isLoading,
        getTasks,
        getTaskById,
        updateTask,
        deleteTask,
        getClickedTask
      }}
    >
      {children}
    </TaskCtx.Provider>
  );
};

export default TaskContextProvider;
