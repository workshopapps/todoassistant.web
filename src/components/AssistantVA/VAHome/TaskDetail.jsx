import React from 'react'
import moment from "moment";
import styles from './Home.module.scss'
import { AiOutlineClockCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
// import { Link } from 'react-router-dom'

const TaskDetail = ({ taskDetails, handleClose }) => {
    const format_time = moment(taskDetails.end_time).format("lll")

  return (
    <div className = {styles.taskDetail_container} id = {taskDetails.task_id}>
        <div className = {styles.taskDetail_title_con}>
            <span className = {styles.taskDetail_title}>{taskDetails.title}</span>
            <AiOutlineCloseCircle onClick = {handleClose} className = {styles.cancel} size={25}/>
        </div>
        <div className = {styles.taskDetail_body_con}>

            {taskDetails.assigned ?
            <div className = {styles.client}>
                <BsPatchCheck className = {styles.va_task_img} size={20}/>
                <p className = {styles.va_client_typo}>Assigned to me</p>                    
            </div>
            : null}

            <div className = {styles.taskDetail_body}>
                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>STATUS</div>
                    <div className = {`${styles.child_sub} ${styles.client}` }>
                        <AiOutlineClockCircle className = {styles.child_sub_img} size={20} />
                        <p className = {styles.child_sub_typo}>{taskDetails.status}</p>
                    </div>                    
                </div>

                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>CONTACT OPTION</div>
                    {
                        taskDetails.va_option === "call" || taskDetails.va_option === "whatsapp" ? <a href={`https://wa.me/${taskDetails.user.phone}`} target="_blank" rel="noreferrer">
                        <p className = {styles.child_sub_typo}>{taskDetails.va_option}</p>
                        </a> : <p className = {styles.child_sub_typo}>{taskDetails.va_option}</p>
                    }                     
                </div>

                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>DUE TIME</div>
                    <p className = {styles.child_sub_typo}>{format_time}</p>                  
                </div>

                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>CLIENT</div>
                    <div className = {styles.child_sub}>
                        <p className = {styles.child_sub_username}>{taskDetails.user.name}</p>
                        <p className = {styles.child_sub_typo}>{taskDetails.user.phone}</p>
                    </div>                    
                </div>
            </div>

            {taskDetails.description ?
            <div className = {styles.taskDetail_child}>
                <div className = {styles.child_title}>DESCRIPTION</div>
                <p className = {styles.child_sub_typo}>{taskDetails.description}</p>                    
            </div>
            : null}
        </div>
    </div>
  )
}

export default TaskDetail