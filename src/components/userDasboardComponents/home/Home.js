import React, { useState } from "react";
import styles from "./Home.module.scss";
import icon1 from "../../../assets/completion-rate-icon.png";
import icon2 from "../../../assets/streak-icon.png";
import searchIcon from "../../../assets/search-normal.png";
import downarrowIcon from "../../../assets/arrow-down.svg";
import TodoCard from "./TodoCard";
import Log from "./Log";
export default function Home() {
  const dummy_todos = [
    { va: true, completed: false, todoName: "Resolve frontend bugs" },
    { va: true, completed: true, todoName: "Learn NextJS" },
    { va: false, completed: false, todoName: "Learn React" },
    { va: false, completed: false, todoName: "Learn Typescript" },
    { va: false, completed: false, todoName: "Learn Strapi" },
    { va: true, completed: false, todoName: "Learn Go" },
    { va: false, completed: true, todoName: "Learn Contex" },
    { va: false, completed: true, todoName: "Learn Api" },
    { va: false, completed: true, todoName: "Learn Redux" },
    { va: true, completed: false, todoName: "Learn React-Router" }
  ];

  const [myTodos, setMyTodos] = useState(dummy_todos);
  const [searchTodos, setSearchTodos] = useState(dummy_todos);
  const numOfCompleted = myTodos.filter(i => i.completed);
  const [allActive, setAllActive] = useState({
    style: { color: "#714DD9", borderBottom: "2px solid #714DD9" },
    active: true
  });
  const [mineActive, setMineActive] = useState({
    style: { color: "", borderBottom: "" },
    active: false
  });
  const [assistantActive, setAssistantActive] = useState({
    style: { color: "", borderBottom: "" },
    active: false
  });

  const handleCheckbox = index => {
    const dummy = [...myTodos];
    dummy[index].completed = !dummy[index].completed;
    setMyTodos(dummy);
  };

  const handleSearch = e => {
    const searchData = myTodos.filter(i => {
      return i.todoName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(searchData);
    if (e.target.value === "") {
      setSearchTodos(myTodos);
    } else {
      setSearchTodos(searchData);
    }
    // console.log(searchData);
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
              setAllActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
              setMineActive({
                style: { color: "#714DD9", borderBottom: "2px solid #714DD9" },
                active: true
              });
              setAssistantActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
            }}
          >
            Mine
          </p>
          <p
            style={assistantActive.style}
            onClick={() => {
              setAllActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
              setMineActive({
                style: { color: "", borderBottom: "" },
                active: false
              });
              setAssistantActive({
                style: { color: "#714DD9", borderBottom: "2px solid #714DD9" },
                active: true
              });
            }}
          >
            Assistant
          </p>
        </div>
        {searchTodos.map((i, index) => {
          if (allActive.active) {
            return (
              !i.completed && (
                <TodoCard
                  title={i.todoName}
                  va={i.va}
                  completed={i.completed}
                  handleChange={() => {
                    handleCheckbox(index);
                  }}
                />
              )
            );
          }
          if (mineActive.active) {
            return (
              !i.completed &&
              !i.va && (
                <TodoCard
                  title={i.todoName}
                  va={i.va}
                  completed={i.completed}
                  handleChange={() => {
                    handleCheckbox(index);
                  }}
                />
              )
            );
          }
          if (assistantActive.active) {
            return (
              !i.completed &&
              i.va && (
                <TodoCard
                  title={i.todoName}
                  va={i.va}
                  completed={i.completed}
                  handleChange={() => {
                    handleCheckbox(index);
                  }}
                />
              )
            );
          }
        })}
        <div className={styles.completedTitle}>
          <p>Completed {numOfCompleted.length}</p>
          <img src={downarrowIcon} alt="down-arrow" />
        </div>
        {myTodos.map((i, index) => {
          return (
            i.completed && (
              <TodoCard
                title={i.todoName}
                va={i.va}
                completed={i.completed}
                handleChange={() => {
                  handleCheckbox(index);
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
            <h3>4/8 To do's</h3>
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
