import React, { useContext, useState, useEffect } from "react";
import styles from "./createTask.module.scss";
import VALogo from "../../assets/createTaskVasst.png";
import axios from "axios";
import { CgClose } from "react-icons/cg";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateTask = ({ taskModal, setTaskModal, func, editData }) => {
  const navigate = useNavigate();
  const { getTasks, getNotificationVA, notification } = useContext(TaskCtx);
  //   const modal1 = useRef(0);
  console.log(notification, "teast");
  //   const modal2 = useRef(1);
  const [submit, setSubmit] = useState(1);
  const [check, setCheck] = useState("");
  const [buttonDisable, setButtonDisable] = useState(0);
  // const [notification, setNotification] = useState([]);

  const [data, setData] = useState({
    title: "",
    description: "",
    date1: "",
    date2: "",
    time: "",
    repeat: "",
    assigned: "",
    assistant: ""
  });
  //   const baseurl = "https://api.ticked.hng.tech/api/v1";
  const token = JSON.parse(localStorage.getItem("user"))?.data?.access_token;

  useEffect(() => {
    if (func === "edit") {
      data.title = editData.title;
    }
    getNotificationVA();
  }, []);

  const handleCheck = e => {
    if (check === "") {
      setCheck(e.currentTarget.id);
    } else {
      setCheck("");
    }
  };

  const handle = e => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleClose1 = e => {
    e.preventDefault();

    func === "edit" ? handleSubmit(e) : setSubmit(!submit);
  };

  const handleSubmit = async e => {
    setButtonDisable(!buttonDisable);
    e.preventDefault();
    const reminderOption = e.target.id;

    try {
      func !== "edit"
        ? await axios.post(
            `https://api.ticked.hng.tech/api/v1/task`,
            {
              title: data.title,
              description: data.title,
              start_time: new Date(
                new Date().setMinutes(new Date().getMinutes() + 10)
              ).toISOString(),
              end_time: new Date(`${data.date1}T${data.time}`).toISOString(),
              repeat: "never",
              va_option: data.assistant,
              status: "PENDING",
              reminder: reminderOption === "no" ? "No, Thanks" : "Remind me",
              assigned: check
            },
            { headers: { Authorization: "Bearer " + token } }
          )
        : await axios.put(
            `https://api.ticked.hng.tech/api/v1/task/${editData.task_id}`,
            {
              title: data.title,
              description: data.title,
              start_time: new Date(
                new Date().setMinutes(new Date().getMinutes() + 10)
              ).toISOString(),
              end_time: new Date(`${data.date1}T${data.time}`).toISOString(),
              repeat: "never",
              va_option: data.assistant,
              status: "PENDING",
              reminder: reminderOption === "no" ? "No, Thanks" : "Remind me",
              assigned: check
            },
            { headers: { Authorization: "Bearer " + token } }
          );
      await getTasks();
      toast.success(func === "edit" ? "Task Edited" : "Task Created", {
        position: toast.POSITION.TOP_RIGHT
      });
      getNotificationVA();
      setTaskModal(0);
      setSubmit(!submit);
      data.title = "";
      data.date1 = "";
      data.date2 = "";
      data.time = "";
      data.repeat = "";
      data.assistant = "";
      setCheck("");
      setButtonDisable(!buttonDisable);
      func === "edit" ? navigate("/dashboard") : "";
    } catch (error) {
      // alert("Server Error");
      toast.error("Server Error! Unable to create task. Try again later.", {
        position: toast.POSITION.TOP_RIGHT
      });
      setTaskModal(0);
      setSubmit(!submit);
      data.title = "";
      data.date1 = "";
      data.date2 = "";
      data.time = "";
      data.repeat = "";
      data.assistant = "";
      setCheck("");
      setButtonDisable(!buttonDisable);
    }
  };
  return (
    <div
      className={
        taskModal ? styles.createTask_wrapper : styles.createTask_close
      }
    >
      <ToastContainer />
      {submit ? (
        <form
          className={styles.createTask_form}
          onSubmit={e => {
            handleClose1(e);
          }}
        >
          <div className={styles.createTask_header_wrapper}>
            <h1 className={styles.createTask_header}>
              {func === "edit" ? "Edit Task" : "Add New Task"}
            </h1>
            <CgClose
              onClick={() => {
                setTaskModal(0);
              }}
              className={styles.createTask_header_close}
            />
          </div>

          <div className={styles.createTask_title}>
            <label className={styles.createTask_label} htmlFor="title">
              Task Title
            </label>
            <input
              required
              className={styles.createTask_input}
              type="text"
              id="title"
              name="title"
              placeholder="What do you want to do?"
              value={data.title}
              onChange={e => {
                handle(e);
              }}
            />
          </div>
          <div className={styles.createTask_date_time}>
            <div className={styles.createTask_date}>
              <label className={styles.createTask_label} htmlFor="date1">
                Date
              </label>
              <input
                required
                className={styles.createTask_input}
                type="Date"
                id="date1"
                name="date1"
                onChange={e => {
                  handle(e);
                }}
              />
            </div>
            <div className={styles.createTask_time}>
              <label className={styles.createTask_label} htmlFor="time">
                Due Time
              </label>
              <input
                required
                id="time"
                name="time"
                className={styles.createTask_input}
                type="time"
                placeholder="What do you want to do?"
                value={data.time}
                onChange={e => {
                  handle(e);
                }}
              />
            </div>
          </div>
          <div
            id="assigned"
            className={styles.createTask_assignVa_option}
            onClick={e => {
              handleCheck(e);
            }}
          >
            <div
              className={
                check === "assigned"
                  ? styles.createTask_assignVa_OptionCheckbox_active
                  : styles.createTask_assignVa_OptionCheckbox
              }
            ></div>
            <p className={styles.createTask_assignVa_optionText}>
              Assign to Virtual Assistant
            </p>
          </div>
          <div className={styles.createTask_va}>
            <p className={styles.createTask_va_title}>
              Virtual Assistant Contact Option
            </p>
            <ul className={styles.createTask_va_options}>
              <li className={styles.createTask_va_list1}>
                <input
                  required
                  type="radio"
                  id="call"
                  name="assistant"
                  value="call"
                  onChange={e => {
                    handle(e);
                  }}
                />
                <label htmlFor="assign">Get a Call</label>
              </li>
              <li className={styles.createTask_va_list2}>
                <input
                  required
                  type="radio"
                  id="call"
                  name="assistant"
                  value="email"
                  onChange={e => {
                    handle(e);
                  }}
                />
                <label htmlFor="call">Get an Email</label>
              </li>
              <li className={styles.createTask_va_list3}>
                <input
                  required
                  type="radio"
                  id="call"
                  name="assistant"
                  value="whatsapp"
                  onChange={e => {
                    handle(e);
                  }}
                />
                <label htmlFor="btn3">Get a Whatsapp Message</label>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className={[styles.createTask_button, `hover`].join(" ")}
            disabled={buttonDisable ? true : false}
          >
            {func === "edit" ? "Edit Task" : "Create Task"}
          </button>
        </form>
      ) : (
        ""
      )}

      {!submit ? (
        <div className={styles.createTask_submit_modal}>
          <img src={VALogo} alt="valogo" />
          <p className={styles.createTask_submit_header}>
            Hello, my name is James and I am your virtual assistant.
          </p>
          <p className={styles.createTask_submit_item}>
            {data.assistant === "call" &&
              "I would make sure you do not forget your tasks by giving you a call."}
            {data.assistant === "email" &&
              "I would make sure you do not forget your tasks by sending you an email."}
            {data.assistant === "whatsapp" &&
              "I would make sure you do not forget your tasks by sending you a whatsapp message."}
          </p>
          <div className={styles.createTask_submit_button_wrapper}>
            <button
              id="remind me"
              onClick={e => {
                handleSubmit(e);
              }}
              className={styles.createTask_submit_button1}
              disabled={buttonDisable ? true : false}
            >
              Done
            </button>
            {/* <button
              id="no"
              onClick={e => {
                handleSubmit(e);
              }}
              className={styles.createTask_submit_button2}
            >
              No, Thanks
            </button> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateTask;
