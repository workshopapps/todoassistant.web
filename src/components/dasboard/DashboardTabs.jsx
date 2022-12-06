import React, { useState } from "react";
import styles from "./DashboardTabs.module.scss";

const DashboardTabs = ({ tabNames, setActiveTab }) => {
  const defaultTabs = [];
  tabNames.map((i, index) =>
    defaultTabs.push({
      id: index + 1,
      name: i,
      active: index === 0 ? true : false
    })
  );
  const [tabs, setTabs] = useState(defaultTabs);
  const handleClick = id => {
    const dummyTabs = [...tabs];
    dummyTabs.map(i => (i.active = i.id === id ? true : false));
    setTabs(dummyTabs);
    setActiveTab({ filter: "", value: "" });
  };
  return tabs.map(i => (
    <div
      key={i.id}
      className={styles.wrapper}
      style={i.active ? { borderBottom: "2px solid #714DD9" } : {}}
      onClick={() => {
        handleClick(i.id);
      }}
    >
      <h3 style={i.active ? { color: "#714DD9" } : {}}>{i.name}</h3>
    </div>
  ));
};

export default DashboardTabs;
