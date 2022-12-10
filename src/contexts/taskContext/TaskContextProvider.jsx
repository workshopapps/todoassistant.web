import React, { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/AuthContext";

export const taskCtxDefaultValues = {
  tasks: [],
  task: {},
  isLoading: false,
  getTasks: () => null,
  setTasks: () => null,
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
  const { user } = useContext(AuthContext);
  console.log(user?.data.access_token);
  let token = "";
  // if (JSON.parse(localStorage.getItem("user"))) {
  //   token = JSON.parse(localStorage.getItem("user"))?.data.access_token;
  // }
  token = user?.data.access_token;
  const getTasks = useCallback(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
    setIsLoading(true);
    axios
      .get(`${base_url}/task/`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => setTasks(Array.isArray(res.data) ? res.data : []))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setTasks, token]);

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
    // const tasks = JSON.parse(localStorage.getItem("myTasks"));
    const singleTask = tasks.find(i => i.task_id === id);
    setTask(singleTask);
  };

  const updateTask = (id, body) => {
    setIsLoading(true);
    axios
      .put(`${base_url}/task/${id}`, body)
      .then(() => getTasks())
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const deleteTask = id => {
    setIsLoading(true);
    axios
      .delete(`${base_url}/task/${id}`)
      .then(() => getTasks())
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
        setTasks,
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
