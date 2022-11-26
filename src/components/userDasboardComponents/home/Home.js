import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import icon1 from "../../../assets/completion-rate-icon.png";
import icon2 from "../../../assets/streak-icon.png";
import searchIcon from "../../../assets/search-normal.png";
import downarrowIcon from "../../../assets/arrow-down.svg";
import TodoCard from "./TodoCard";
import Log from "./Log";
// import useTasksLoading from "../../../hooks/tasks/useTasksLoading";
import { TaskCtx } from "../../../contexts/taskContext/TaskContextProvider";
export default function Home() {
  if (localStorage.getItem("myTasks")) {
    console.log("lsdjj");
  } else {
    localStorage.setItem("myTasks", "[]");
  }
  const tasks = JSON.parse(localStorage.getItem("myTasks"));
  const navigate = useNavigate();
  const { getClickedTask } = useContext(TaskCtx);
  // useTasksLoading();
  // const dummy_todos = [
  //   { va: true, completed: false, todoName: "Resolve frontend bugs", id: "1" },
  //   { va: true, completed: true, todoName: "Learn NextJS", id: "2" },
  //   { va: false, completed: false, todoName: "Learn React", id: "3" },
  //   { va: false, completed: false, todoName: "Learn Typescript", id: "4" },
  //   { va: false, completed: false, todoName: "Learn Strapi", id: "5" },
  //   { va: true, completed: false, todoName: "Learn Go", id: "6" },
  //   { va: false, completed: true, todoName: "Learn Contex", id: "7" },
  //   { va: false, completed: true, todoName: "Learn Api", id: "8" },
  //   { va: false, completed: true, todoName: "Learn Redux", id: "9" },
  //   { va: true, completed: false, todoName: "Learn React-Router", id: "10" }
  // ];

  const [completedDropdown, setCompletedDropdown] = useState(true);
  const [myTodos, setMyTodos] = useState(tasks);
  const [filterTodos, setFilterTodos] = useState(myTodos);
  const [activeTab, setActiveTab] = useState({
    filter: "completed",
    value: false
  });
  const numOfCompleted = myTodos.filter(i => i.completed);
  const [allActive, setAllActive] = useState({
    style: { color: "#714DD9", borderBottom: "2px solid #714DD9" }
  });
  const [mineActive, setMineActive] = useState({
    style: { color: "", borderBottom: "" }
  });
  const [assistantActive, setAssistantActive] = useState({
    style: { color: "", borderBottom: "" }
  });

  const handleCheckbox = id => {
    const dummy = [...myTodos];
    dummy.map((i, index) => {
      if (i.task_id === id) {
        dummy[index].completed = !dummy[index].completed;
      }
    });
    setMyTodos(dummy);
  };

  const handleSearch = e => {
    const searchData = myTodos.filter(i => {
      return i.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setFilterTodos(myTodos);
    } else {
      setFilterTodos(searchData);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todos}>
        <h1>To do's</h1>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search"
            onChange={handleSearch}
          />
          <img src={searchIcon} alt="search" />
        </div>
        <div className={styles.todoNav}>
          <p
            style={allActive.style}
            onClick={() => {
              setActiveTab({ filter: "completed", value: false });
              setAllActive({
                style: { color: "#714DD9", borderBottom: "2px solid #714DD9" },
                active: true
              });
              setMineActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
              setAssistantActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
            }}
          >
            All
          </p>
          <p
            style={mineActive.style}
            onClick={() => {
              setActiveTab({ filter: "va_option", value: "none" });
              setAllActive({
                style: { color: "", borderBottom: "" }
              });
              setMineActive({
                style: { color: "#714DD9", borderBottom: "2px solid #714DD9" }
              });
              setAssistantActive({
                style: { color: "", borderBottom: "" }
              });
            }}
          >
            Mine
          </p>
          <p
            style={assistantActive.style}
            onClick={() => {
              setActiveTab({
                filter: "va_option",
                value: "Assign the task to assistant"
              });
              setAllActive({
                style: { color: "", borderBottom: "" }
              });
              setMineActive({
                style: { color: "", borderBottom: "" }
              });
              setAssistantActive({
                style: { color: "#714DD9", borderBottom: "2px solid #714DD9" }
              });
            }}
          >
            Assistant
          </p>
        </div>
        {filterTodos.map(i => {
          if (i[activeTab.filter] === activeTab.value && !i.completed) {
            return (
              <TodoCard
                key={i.task_id}
                completed={i.completed}
                title={i.title}
                va={
                  i.va_option === "Assign the task to assistant" ? true : false
                }
                handleChange={() => {
                  handleCheckbox(i.task_id);
                }}
                onClick={() => {
                  getClickedTask(i.task_id);
                  navigate("/taskdetails");
                }}
              />
            );
          }
        })}
        <div
          className={styles.completedTitle}
          onClick={() => {
            setCompletedDropdown(completedDropdown => !completedDropdown);
          }}
        >
          <p>Completed {numOfCompleted.length}</p>
          <img src={downarrowIcon} alt="down-arrow" />
        </div>
        {myTodos.map(i => {
          return (
            i.completed &&
            completedDropdown && (
              <TodoCard
                key={i.task_id}
                title={i.title}
                va={
                  i.va_option === "Assign the task to assistant" ? true : false
                }
                completed={i.completed}
                handleChange={() => {
                  handleCheckbox(i.task_id);
                }}
              />
            )
          );
        })}
      </div>
      <div className={styles.activity}>
        <h2>Activity</h2>
        <div className={styles.activityBox}>
          <div className={styles.left}>
            <img src={icon1} alt="" />
            <h3>
              {numOfCompleted.length}/{myTodos.length} To do's
            </h3>
            <p>Ticked</p>
          </div>
          <div className={styles.right}>
            <img src={icon2} alt="" />
            <h3>7 days</h3>
            <p>Streak</p>
          </div>
        </div>
        <div className={styles.logWrapper}>
          <div className={styles.logHeader}>
            <p className={styles.left}>Log</p>
            <p className={styles.right}>Refreshes in 3h</p>
          </div>
          <Log
            action="To do completed"
            taskName="Resolve frontend bugs"
            time="3hrs"
          />
          <Log
            action="New To do"
            taskName="Resolve frontend bugs"
            time="3hrs"
          />
          <Log
            action="To do deleted"
            taskName="Resolve frontend bugs"
            time="3hrs"
          />
          <Log
            action="To do updated"
            taskName="Resolve frontend bugs"
            time="3hrs"
          />
        </div>
      </div>
    </div>
  );
}
