import React, { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/AuthContext";

export const taskCtxDefaultValues = {
  tasks: [],
  task: {},
  notification: [],
  setNotification: () => null,
  isLoading: false,
  getTasks: () => null,
  setTasks: () => null,
  getClickedTask: () => null,
  getTaskById: () => null,
  updateStatus: () => null,
  updateTask: () => null,
  deleteTask: () => null
};

export const TaskCtx = createContext(taskCtxDefaultValues);

const TaskContextProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("user"));
  const idVa = JSON.parse(localStorage.getItem("VA"));
  const base_url = "https://api.ticked.hng.tech/api/v1";
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState([]);
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

  const getNotificationVA = async () => {
    try {
      await axios
        .get("https://api.ticked.hng.tech/api/v1/notification", {
          headers: {
            Authorization: `Bearer ${
              id?.data?.access_token || idVa?.extra?.token
            }`
          }
        })
        .then(res => {
          // alert("You have a new notification")
          localStorage.setItem("userNotification", JSON.stringify(res.data));
          setNotification(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //Deleting and resetting notiification
  const resetNotification = async () => {
    setNotification([])
    try {
      await axios.delete("https://api.ticked.hng.tech/api/v1/notification", {
        headers: { Authorization: `Bearer ${
          id?.data?.access_token || idVa?.extra?.token
        }` }
      }).then((res) => {
        console.log(res)
      })
    } catch (error) {
      console.error(error)
      
    }
  }

  const getClickedTask = id => {
    // const tasks = JSON.parse(localStorage.getItem("myTasks"));
    const singleTask = tasks.find(i => i.task_id === id);
    setTask(singleTask);
  };

  const updateTask = useCallback(
    (id, body) => {
      setIsLoading(true);
      axios
        .put(`${base_url}/task/${id}`, body, {
          headers: { Authorization: "Bearer " + token }
        })
        .then(() => getTasks())
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    },
    [token]
  );

  const updateStatus = (id, body) => {
    setIsLoading(true);
    axios
      .put(`${base_url}/task/status/${id}`, body, {
        headers: { Authorization: "Bearer " + token }
      })
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
        updateStatus,
        getNotificationVA,
        notification,
        resetNotification,
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
