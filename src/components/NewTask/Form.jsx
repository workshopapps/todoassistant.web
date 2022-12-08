import React, { useState } from "react";
import dateIcon from "../../assets/newTask/calender.png";
// import clockIcon from "../../assets/newTask/clock.png";
import styles from "../../core/todo/NewTask.module.scss";
import Select from "react-select";
import Modal from "./Modal";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useTasksLoading from "../../hooks/tasks/useTasksLoading";
// import { useContext } from "react";
// import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";

function Form({ value }) {
  if (localStorage.getItem("myTasks")) {
    console.log("lsdjj");
  } else {
    localStorage.setItem("myTasks", "[]");
  }

  // const { getTasks } = useContext(TaskCtx);
  // const navigate = useNavigate();
  const [date1Input, setDate1Type] = useState("text");
  const [date2Input, setDate2Type] = useState("text");
  // const [timeInput, setTimeType] = useState("text");
  const [openModal, setOpenModal] = useState(false);

  // options
  const options = [
    { value: "never", label: "Never" },
    { value: "daily", label: "Every Day" },
    { value: "weekly", label: "Every Week" },
    { value: "bi-weekly", label: "Every 2 Weeks" },
    { value: "monthly", label: "Every Month" },
    { value: "yearly", label: "Every Year" }
  ];

  // option styles
  const selectStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: "white",
      border: "none"
    }),
    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: ".5px solid #707070",
        padding: "10px",
        color: state.isFocused ? "purple" : "grey",
        backgroundColor: state.isSelected ? "white" : "white"
      };
    }
  };

  // values
  const [data, setData] = useState({
    title: "",
    description: "",
    date1: "",
    date2: "",
    time: "",
    repeat: "",
    assistant: ""
  });

  const baseurl = "https://api.ticked.hng.tech/api/v1";
  const token = JSON.parse(localStorage.getItem("user")).access_token;

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseurl}/task`,
        {
          title: data.title,
          description: data.description,
          start_time: new Date(data.date1).toISOString(),
          end_time: new Date(data.date2).toISOString(),
          repeat: data.repeat,
          va_option: data.assistant,
          status: "done"
        },
        { headers: { Authorization: "Bearer " + token } }
      );

      console.log(res);
      res.data.completed = false;
      console.log(res.data);
      const tasks = JSON.parse(localStorage.getItem("myTasks"));
      tasks.push(res.data);
      localStorage.setItem("myTasks", JSON.stringify(tasks));

      setOpenModal(true);

      // useTasksLoading();
      // getTasks();

      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Invalid input Check and try again");
    }

    // setOpenModal(true);
  };

  const handleEdit = e => {
    e.preventDefault();
  };

  return value === "edit" ? (
    //--------------------Edit Task Form------------------

    <form
      className={styles.newTaskForm}
      onSubmit={e => {
        handleEdit(e);
      }}
    >
      <h1>{"Go to bank"}</h1>
      <div className={styles.formGroup}>
        <label htmlFor="task_description" className={styles.newTaskLabel}>
          Task Description
        </label>
        <textarea
          placeholder="Describe what you want to do?"
          id="description"
          className={styles.newTaskTextarea}
          value={data.description}
          onChange={e => handle(e)}
          required
        ></textarea>
      </div>
      <div className={`${styles.formGroup} ${styles.newTaskRow}`}>
        <div className={styles.formGroup}>
          <label htmlFor="date1" className={styles.newTaskLabel}>
            Start
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={date1Input}
              value={data.date1}
              onChange={e => handle(e)}
              placeholder="Select date"
              id="date1"
              onFocus={() => setDate1Type("datetime-local")}
              onBlur={() => setDate1Type("text")}
              required
            />
            <span
              className={`${styles.dateIcon} ${styles.icon}`}
              style={
                date1Input === "datetime-local"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setDate1Type("datetime-local")}
              onBlur={() => setDate1Type("text")}
            >
              <img
                className={styles.newTaskImg}
                src={dateIcon}
                alt="Date icon"
              />
            </span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date2" className={styles.newTaskLabel}>
            End
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={date2Input}
              value={data.date2}
              onChange={e => handle(e)}
              placeholder="Select date"
              id="date2"
              onFocus={() => setDate2Type("datetime-local")}
              onBlur={() => setDate2Type("text")}
              required
            />
            <span
              className={`${styles.dateIcon} ${styles.icon}`}
              style={
                date2Input === "datetime-local"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setDate2Type("datetime-local")}
              onBlur={() => setDate2Type("text")}
            >
              <img
                className={styles.newTaskImg}
                src={dateIcon}
                alt="Date icon"
              />
            </span>
          </div>
        </div>
        {/* <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.newTaskLabel}>
            Select reminder
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInputTime}
              type={timeInput}
              value={data.time}
              onChange={e => handle(e)}
              placeholder="Select time"
              id="time"
              onFocus={() => setTimeType("time")}
              onBlur={() => setTimeType("text")}
              required
            />
            <span
              className={`${styles.clockIcon} ${styles.icon}`}
              style={
                timeInput === "time"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setTimeType("time")}
              onBlur={() => setTimeType("text")}
            >
              <img
                className={styles.newTaskImg}
                src={clockIcon}
                alt="Clock icon"
              />
            </span>
          </div>
        </div> */}
      </div>
      {/* Drop down */}
      <div className={styles.formGroup}>
        <label htmlFor="repeat" className={styles.newTaskLabel}>
          Repeat
        </label>
        <Select
          options={options}
          id="repeat"
          className={styles.formSelect}
          onChange={e => (data.repeat = e.value)}
          styles={selectStyles}
          placeholder="Select Option"
        />
      </div>
      <div className={`${styles.formGroup} ${styles.radio_container}`}>
        <label htmlFor="virtual_assistant" className={styles.newTaskLabel}>
          Virtual Assistant
        </label>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="Assign the task to assistant"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          Assign the task to assistant
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="Get a call from an assistant to remind you"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          Get a call from an assistant to remind you
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="None"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          None
        </div>
      </div>

      <button className={styles.newTaskButton} type="submit">
        Create Task
      </button>

      <Modal
        title={data.title}
        description={data.description}
        start={data.date1}
        end={data.date2}
        repeat={data.repeat}
        assistant={data.assistant}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </form>
  ) : (
    //--------------------Create Task Form------------------
    <form
      className={styles.newTaskForm}
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="todo" className={styles.newTaskLabel}>
          Task Title
        </label>
        <input
          className={styles.newTaskInput}
          type="text"
          placeholder="What do you want to do?"
          id="title"
          value={data.title}
          onChange={e => handle(e)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="task_description" className={styles.newTaskLabel}>
          Task Description
        </label>
        <textarea
          placeholder="Describe what you want to do?"
          id="description"
          className={styles.newTaskTextarea}
          value={data.description}
          onChange={e => handle(e)}
          required
        ></textarea>
      </div>
      <div className={`${styles.formGroup} ${styles.newTaskRow}`}>
        <div className={styles.formGroup}>
          <label htmlFor="date1" className={styles.newTaskLabel}>
            Start
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={date1Input}
              value={data.date1}
              onChange={e => handle(e)}
              placeholder="Select date"
              id="date1"
              onFocus={() => setDate1Type("datetime-local")}
              onBlur={() => setDate1Type("text")}
              required
            />
            <span
              className={`${styles.dateIcon} ${styles.icon}`}
              style={
                date1Input === "datetime-local"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setDate1Type("datetime-local")}
              onBlur={() => setDate1Type("text")}
            >
              <img
                className={styles.newTaskImg}
                src={dateIcon}
                alt="Date icon"
              />
            </span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date2" className={styles.newTaskLabel}>
            End
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={date2Input}
              value={data.date2}
              onChange={e => handle(e)}
              placeholder="Select date"
              id="date2"
              onFocus={() => setDate2Type("datetime-local")}
              onBlur={() => setDate2Type("text")}
              required
            />
            <span
              className={`${styles.dateIcon} ${styles.icon}`}
              style={
                date2Input === "datetime-local"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setDate2Type("datetime-local")}
              onBlur={() => setDate2Type("text")}
            >
              <img
                className={styles.newTaskImg}
                src={dateIcon}
                alt="Date icon"
              />
            </span>
          </div>
        </div>
        {/* <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.newTaskLabel}>
            Select reminder
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInputTime}
              type={timeInput}
              value={data.time}
              onChange={e => handle(e)}
              placeholder="Select time"
              id="time"
              onFocus={() => setTimeType("time")}
              onBlur={() => setTimeType("text")}
              required
            />
            <span
              className={`${styles.clockIcon} ${styles.icon}`}
              style={
                timeInput === "time"
                  ? { display: "none" }
                  : { display: "inline" }
              }
              onClick={() => setTimeType("time")}
              onBlur={() => setTimeType("text")}
            >
              <img
                className={styles.newTaskImg}
                src={clockIcon}
                alt="Clock icon"
              />
            </span>
          </div>
        </div> */}
      </div>
      {/* Drop down */}
      <div className={styles.formGroup}>
        <label htmlFor="repeat" className={styles.newTaskLabel}>
          Repeat
        </label>
        <Select
          options={options}
          id="repeat"
          className={styles.formSelect}
          onChange={e => (data.repeat = e.value)}
          styles={selectStyles}
          placeholder="Select Option"
        />
      </div>
      <div className={`${styles.formGroup} ${styles.radio_container}`}>
        <label htmlFor="virtual_assistant" className={styles.newTaskLabel}>
          Virtual Assistant
        </label>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="Assign the task to assistant"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          Assign the task to assistant
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="Get a call from an assistant to remind you"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          Get a call from an assistant to remind you
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type="radio"
            value="None"
            onChange={e => handle(e)}
            id="assistant"
            name="virtual_assistant"
            required
          />{" "}
          None
        </div>
      </div>

      <button className={styles.newTaskButton} type="submit">
        Create Task
      </button>

      <Modal
        title={data.title}
        description={data.description}
        start={data.date1}
        end={data.date2}
        repeat={data.repeat}
        assistant={data.assistant}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </form>
  );
}

export default Form;
