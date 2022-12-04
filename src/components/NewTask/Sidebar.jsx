import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/newTask/logotask.svg";
import back from "../../assets/newTask/arrowBack.png";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="logo" />
      <div className={styles.backContainer}>
        <Link to=".." relative="path">
          <img src={back} alt="logo" />
          {" "} Back
          
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
