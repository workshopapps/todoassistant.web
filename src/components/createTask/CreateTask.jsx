// import React, { useState } from "react";
// import styles from "./createTask.module.scss";
// import axios from "axios";
const CreateTask = () => {
//   const [date1Input, setDate1Type] = useState("text");
//   const [date2Input, setDate2Type] = useState("text");
//   // const [timeInput, setTimeType] = useState("text");
//   const [openModal, setOpenModal] = useState(false);


//   // values
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     date1: "",
//     date2: "",
//     time: "",
//     repeat: "",
//     assistant: ""
//   });

//   const baseurl = "https://api.ticked.hng.tech/api/v1";
//   const token = JSON.parse(localStorage.getItem("user")).access_token;

//   function handle(e) {
//     const newData = { ...data };
//     newData[e.target.id] = e.target.value;
//     setData(newData);
//     // console.log(newData);
//   }

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

//       console.log(res);
//       res.data.completed = false;
//       console.log(res.data);
//       const tasks = JSON.parse(localStorage.getItem("myTasks"));
//       tasks.push(res.data);
//       localStorage.setItem("myTasks", JSON.stringify(tasks));

//       setOpenModal(true);

//       // useTasksLoading();
//       // getTasks();

//       // navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//       alert("Invalid input Check and try again");
//     }

//     // setOpenModal(true);
//   };
  return <div>CreateTask</div>;
};

export default CreateTask;
