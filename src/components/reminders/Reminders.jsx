import React from "react";
import Reminder from "../reminder/Reminder";
// import classes from "./Reminder.module.scss";
// import { Link, useNavigate } from "react-router-dom";
// import arrowRight from "../../../assets/arrow-right-cj.svg";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../contexts/authContext/AuthContext";
// import axios from "axios";
// import ProfileAvatar from "../../dashboard/va-client-page/Avatar";

const Reminders = () => {
  //   const navigate = useNavigate();
  //   const { user } = useContext(AuthContext);
  //   const { first_name, last_name, user_id, email, phone } = user.data;

  // option type
  // show save button
  //header type
  //header
  //   };
  const reminders = [
    {
      id: 1,
      headerType: "big",
      header: "Remind me via",
      optionType: "check",
      showSave: true,
      list: ["Mobile Push Notification", "Desktop Push Notification", "Email"]
    },
    {
      id: 2,
      headerType: "small",
      header: "When Snoozed",
      optionType: "radio",
      showSave: false,
      list: [
        "5 minutes",
        "15 minutes",
        "30 minutes,",
        "1 hour",
        "6 hours",
        "12 hours,"
      ]
    },
    {
      id: 3,
      headerType: "small",
      header: "Send Automatic Reminders",
      optionType: "radio",
      showSave: false,
      list: [
        "5 minutes",
        "15 minutes",
        "30 minutes,",
        "1 hour",
        "6 hours",
        "12 hours,"
      ]
    },
    {
      id: 4,
      headerType: "small",
      header: "Refresh Todo List",
      optionType: "radio",
      showSave: false,
      list: [
        "5 minutes",
        "15 minutes",
        "30 minutes,",
        "1 hour",
        "6 hours",
        "12 hours,"
      ]
    }
  ];

  const remindersListRender = reminders.map(reminder => (
    <Reminder
      key={reminder.id}
      header={reminder.header}
      optionType={reminder.optionType}
      headerType={reminder.headerType}
      showSave={reminder.showSave}
      list={reminder.list}
    />
  ));
  return <div>{remindersListRender}</div>;
};

export default Reminders;
