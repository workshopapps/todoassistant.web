import axios from "axios";
import React, { useContext, useState } from "react";
import styles from "./delete.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ deleteTask, setDeleteTask, editData }) => {
  const token = JSON.parse(localStorage.getItem("user"))?.data?.access_token;
  const navigate = useNavigate();
  const { getTasks } = useContext(TaskCtx);
  const [disabled, setDisabled] = useState(false);
  const handleDelete = async () => {
    setDisabled(true);
    try {
      await axios.delete(
        `https://api.ticked.hng.tech/api/v1/task/${editData.task_id}`,
        { headers: { Authorization: "Bearer " + token } }
      );

      await getTasks();
      setDeleteTask(0);
      toast.success("Task Deleted", {
        position: toast.POSITION.TOP_RIGHT
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      navigate("/dashboard");
    }
    setDisabled(false);
  };
  return (
    <div
      className={!deleteTask ? styles.DeleteTask_close : styles.Delete_wrapper}
    >
      <ToastContainer />
      <div className={styles.Delete_box}>
        <h1 className={styles.Delete_head}>Delete Task</h1>
        <p className={styles.Delete_text}>
          Are you sure you want to delete task?
        </p>
        <div className={styles.Delete_buttons}>
          <button
            onClick={() => setDeleteTask(!deleteTask)}
            className={styles.Delete_button1}
          >
            No, Thanks
          </button>
          <button
            onClick={() => {
              handleDelete();
            }}
            className={styles.Delete_button2}
            disabled={disabled}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
