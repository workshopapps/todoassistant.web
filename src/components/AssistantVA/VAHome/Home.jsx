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
            task_id: "1",
            title: "Resolve frontend bugs",
            assigned: true,
            end_time: "2022-11-21T12:56:04+01:00",
            status: "PENDING",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting.",
            user: {
                name: "Sandra Davids",
                phone: "+2349043567891",
                img: profile,
            },
        },
        {
            task_id: "2",
            title: "Call Bigheart",
            assigned: false,
            end_time: "2022-11-21T12:56:04+01:00",
            status: "PENDING",
            description: "This task is very important for a presentation.",
            user: {
                name: "Sandra Davids",
                phone: "+2349043567891",
                img: profile,
            }
        },
        {
            task_id: "3",
            title: "Resolve frontend bugs",
            assigned: false,
            end_time: "2022-11-21T12:56:04+01:00",
            status: "PENDING",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting.",
            user: {
                name: "Sandra Davids",
                phone: "+2349043567891",
                img: profile,
            }
        },
        {
            task_id: "4",
            title: "Resolve frontend bugs",
            assigned: true,
            end_time: "2022-11-21T12:56:04+01:00",
            status: "PENDING",
            description: "This task is very important for a presentation I will be having tomorrow I want it ready before the meeting.",
            user: {
                name: "Sandra Davids",
                phone: "+2349043567891",
                img: profile,
            }
        }
    ]

    const [nav, setNav] = useState(true);
    const [taskDetail, setTaskDetail] = useState(false);
    const [showDetail, setShowDetail] = useState({});
    const [tasks, setTasks] = useState(Tasks);
    const [assigned, setAssigned] = useState([]);

    const fetchTasks = async () => {
        // let vaUser = JSON.parse(sessionStorage.getItem("VA"));
        let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IjJAYS5jb20iLCJJZCI6Ijc1MjVjNTIzLWQ0MzktNGU1NS1iM2M4LTMxMGViMjgzYTk4MiIsIlN0YXR1cyI6IlZBIiwiZXhwIjoxNjcwMDg1MjQyfQ.9ZUuXMb8Tn-VrpRb7NIoRsNE13GaUxI5G4LL60mmRis`
        if (token) {
          const response = await axios.get(
            `/task/all/va`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
    
          const vaTasks = response.data.data 
          
          console.log(vaTasks)
    
          setTasks(vaTasks);
        }
    };

    const handleClick = (e) => {
        setTaskDetail(true)
        const id = e.target.id;

        const currentTask = tasks.filter(
            task => task.task_id === id
        )

        setShowDetail(currentTask[0])
    }

    const handleClose = () => {
        setTaskDetail(false)
    }


    useEffect(() => {
        fetchTasks();
        
    }, []);

    useEffect(() => {
        setAssigned(tasks.filter(task => task.assigned === true))
        
    }, [tasks]);

    
  return (
    <section className = {styles.va_section_container}>
        <div className = {[styles.va_home_container, taskDetail && styles.va_home_container_active].join(" ")} >
            <div className = {styles.va_home_header}>
                <div className = {styles.va_home_title}>
                    <p className = {styles.va_home_typo}>Today</p>
                    <img className = {styles.va_img} src={vaArrowDown} alt="vaArrow" />                
                </div> 
                <div className = {styles.va_home_links}>
                    <div className = {[styles.va_home_link, nav && styles.active].join(" ")} onClick={() => setNav(true)}>All Tasks ({tasks.length})</div>
                    <div className = {[styles.va_home_link, !nav && styles.active].join(" ")} onClick={() => setNav(false)}>Assigned to me</div>                
                </div>   
            </div>

            <div className = {styles.va_tasks}>
                {tasks.length > 0 ?
                nav ? tasks.map((task) => (
                    <Task details={task} key={task.task_id} handleClick = {handleClick} />
                )) : assigned.length <= 0 ?
                <div className = {styles.va_no_tasks}>
                    <span className = {styles.va_no_tasks_title}>No Assigned Tasks Yet</span>
                    <span className = {styles.va_no_tasks_sub}>You will be notified when a user assigned a task to you</span>
                </div>
                 : tasks.map((task) => (
                    task.assigned ? <Task details={task} key={task.task_id} handleClick = {handleClick} /> : null
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