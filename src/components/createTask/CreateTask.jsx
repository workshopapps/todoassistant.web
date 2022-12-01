import React, { useState, useRef } from "react";
import styles from "./createTask.module.scss";
import VALogo from "../../assets/createTaskVa.png";
// import axios from "axios";
const CreateTask = () => {
  const modal1 = useRef(0);
  //   const modal2 = useRef(1);
  const [data, setData] = useState({
    title: "",
    description: "",
    date1: "",
    date2: "",
    time: "",
    repeat: "",
    assistant: ""
  });

  //   const baseurl = "https://api.ticked.hng.tech/api/v1";
  //   const token = JSON.parse(localStorage.getItem("user")).access_token;

  const handle = e => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleClose1 = e => {
    e.preventDefault();
    modal1.current.style.overflow = "hidden";
    modal1.current.style.padding = "0px";
    modal1.current.style.height = "0px";
    modal1.current.style.width = "0px";
  };

  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.post(
  //         `${baseurl}/task`,
  //         {
  //           title: data.title,
  //           description: data.description,
  //           start_time: new Date(data.date1).toISOString(),
  //           end_time: new Date(data.date2).toISOString(),
  //           repeat: data.repeat,
  //           va_option: data.assistant,
  //           status: "done"
  //         },
  //         { headers: { Authorization: "Bearer " + token } }
  //       );
  //     } catch (error) {
  //       console.log(error);
  //       alert("Invalid input Check and try again");
  //     }

  //     // setOpenModal(true);
  //   };
  return (
    <div className={styles.createTask_wrapper}>
      <form ref={modal1} className={styles.createTask_form}>
        <h1 className={styles.createTask_header}>Add New Task</h1>
        <div className={styles.createTask_title}>
          <label className={styles.createTask_label} htmlFor="title">
            Task Title
          </label>
          <input
            required
            className={styles.createTask_input}
            type="text"
            id="title"
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
              value={data.date1}
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
        <div className={styles.createTask_va}>
          <p className={styles.createTask_va_title}>Virtual Assistant</p>
          <ul className={styles.createTask_va_options}>
            <li className={styles.createTask_va_list1}>
              <input
                required
                name="va"
                type="radio"
                id="assistant"
                value="assign task"
                onChange={e => {
                  handle(e);
                }}
              />
              <label htmlFor="">Assign the task to virtual assitant</label>
            </li>
            <li className={styles.createTask_va_list2}>
              <input
                required
                name="va"
                type="radio"
                id="assistant"
                value="get call"
                onChange={e => {
                  handle(e);
                }}
              />
              <label htmlFor="">
                Get a call from an asistant to remind you
              </label>
            </li>
            {/* <li className={styles.createTask_va_list3}>
              <input name="va" type="radio" id="btn3" />
              <label htmlFor="btn3">Assign the task to virtual assitant</label>
            </li> */}
          </ul>
        </div>
        <button
          onClick={e => {
            handleClose1(e);
          }}
          className={styles.createTask_button}
        >
          Create Task
        </button>
      </form>
      <div className={styles.createTask_submit_modal}>
        <img src={VALogo} alt="valogo" />
        <p className={styles.createTask_submit_header}>
          Hello, my name is Michael and I am your virtual assistant.
        </p>
        <p className={styles.createTask_submit_item}>
          I would make sure you do not forget your tasks by giving you a call.
        </p>
        <div className={styles.createTask_submit_button_wrapper}>
          <button className={styles.createTask_submit_button1}>
            Remind me
          </button>
          <button className={styles.createTask_submit_button2}>
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
