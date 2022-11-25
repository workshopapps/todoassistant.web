import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const taskCtxDefaultValues = {
  tasks: [],
  task: {},
  isLoading: false,
  setTask: () => null,
  getClickedTask: () => null,
  getTasks: () => null,
  getTaskById: () => null,
  updateTask: () => null,
  deleteTask: () => null
};

export const TaskCtx = createContext(taskCtxDefaultValues);

const TaskContextProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user")).access_token;
  console.log(token);
  const base_url = "https://api.ticked.hng.tech/api/v1";
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getTasks = useCallback(async () => {
    setIsLoading(true);
    // axios
    //   .get(`${base_url}/task`, {
    //     headers: { Authorization: "Bearer " + token }
    //   })
    //   .then(res => setTasks(res))
    //   .catch(err => console.log(err.response.data))
    //   .finally(() => setIsLoading(false));
    try {
      axios
        .get(`${base_url}/task`, {
          headers: { Authorization: "Bearer " + token }
        })
        .then(res => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }, [setTasks]);

  const getTaskById = useCallback(
    id => {
      setIsLoading(true);
      axios
        .get(`${base_url}/task/${id}`, {
          headers: { Authorization: "Bearer " + token }
        })
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
