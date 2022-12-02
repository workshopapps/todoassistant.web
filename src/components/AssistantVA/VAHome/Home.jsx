import React, { useState, useEffect } from 'react'
import axios from "axios";
import Task from './Task'
import TaskDetail from './TaskDetail'
import styles from './Home.module.scss'
import vaArrowDown from '../../../assets/VADashboard/va-arrowDown.svg'
import profile from '../../../assets/VADashboard/profile.svg'

const Home = () => {

    const Tasks = [
        {
            id: "1",
            title: "Resolve frontend bugs",
            img: profile,
            username: "Sandra Davids",
            assigned: true,
            due_time: "6:00pm",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting."
        },
        {
            id: "2",
            title: "Resolve frontend bugs",
            img: profile,
            username: "Sandra Davids",
            assigned: false,
            due_time: "6:00pm",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting."
        },
        {
            id: "3",
            title: "Resolve frontend bugs",
            img: profile,
            username: "Sandra Davids",
            assigned: true,
            due_time: "6:00pm",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting."
        },
        {
            id: "4",
            title: "Resolve frontend bugs",
            img: profile,
            username: "Sandra Davids",
            assigned: false,
            due_time: "6:00pm",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting."
        }
    ]

    const [nav, setNav] = useState(true);
    const [taskDetail, setTaskDetail] = useState(false);
    const [showDetail, setShowDetail] = useState({});
    const [tasks, setTasks] = useState(Tasks);
    const [assigned, setAssigned] = useState([]);

    const fetchTasks = async () => {
        let vaUser = JSON.parse(sessionStorage.getItem("user"));
        if (vaUser) {
          const response = await axios.get(
            `user/task/${vaUser.id}`,
            {
              headers: {
                Authorization: `Bearer ${vaUser.token}`
              }
            }
          );
    
          const vaTasks = response.data;    
    
          setTasks(vaTasks);
        }
    };

    const handleClick = (e) => {
        setTaskDetail(true)
        const id = e.target.id;

        const currentTask = tasks.filter(
            task => task.id === id
        )

        setShowDetail(currentTask[0])
    }

    const handleClose = () => {
        setTaskDetail(false)
    }

    useEffect(() => {
        fetchTasks();
        setAssigned(tasks.filter(task => task.assigned === true))
    }, []);

    
  return (
    <section className = {styles.va_section_container}>
        <div className = {[styles.va_home_container, taskDetail && styles.va_home_container_active].join(" ")} >
            <div className = {styles.va_home_header}>
                <div className = {styles.va_home_title}>
                    <p className = {styles.va_home_typo}>Today</p>
                    <img className = {styles.va_img} src={vaArrowDown} alt="vaArrow" />                
                </div> 
                <div className = {styles.va_home_links}>
                    <div className = {[styles.va_home_link, nav && styles.active].join(" ")} onClick={() => setNav(true)}>All Tasks ({Tasks.length})</div>
                    <div className = {[styles.va_home_link, !nav && styles.active].join(" ")} onClick={() => setNav(false)}>Assigned to me</div>                
                </div>   
            </div>

            <div className = {styles.va_tasks}>
                {tasks.length > 0 ?
                nav ? Tasks.map((task) => (
                    <Task details={task} key={task.id} handleClick = {handleClick} />
                )) : assigned.length <= 0 ?
                <div className = {styles.va_no_tasks}>
                    <span className = {styles.va_no_tasks_title}>No Assigned Tasks Yet</span>
                    <span className = {styles.va_no_tasks_sub}>You will be notified when a user assigned a task to you</span>
                </div>
                 : tasks.map((task) => (
                    task.assigned ? <Task details={task} key={task.id} handleClick = {handleClick} /> : null
                )) :
                <div className = {styles.va_no_tasks}>
                    <span className = {styles.va_no_tasks_title}>No Clients</span>
                    <span className = {styles.va_no_tasks_sub}>You will be notified when a user has been assigned to you</span>
                </div>     
                }  
            </div> 
        </div>
        { taskDetail ? 
            <div className = {styles.task_detail_slider}>
                <TaskDetail taskDetails = {showDetail} handleClose = {handleClose} />
            </div>
        : null}
    </section>
  )
}

export default Home