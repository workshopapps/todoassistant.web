import React from 'react'
import styles from './Home.module.scss'
import { BsArrowRight, BsAlarm, BsPatchCheck } from "react-icons/bs";

const Task = ({ details, handleClick }) => {
  return (
    <div className = {styles.task_container} >
        <div className = {styles.task_title}>
            {details.title}
        </div>
        <div className = {styles.task_details_container}>
            <div className = {styles.task_details}>
                <div className = {styles.client}>
                    <img className = {styles.va_client_img} src={details.img} alt="vaArrow" />
                    <p className = {styles.va_client_typo}>{details.username}</p>                    
                </div>
                {details.assigned ?
                <div className = {styles.client}>
                    <BsPatchCheck className = {styles.va_task_img} size={20}/>
                    <p className = {styles.va_client_typo}>Assigned to me</p>                    
                </div>
                : null}

                <div className = {styles.client}>
                    <BsAlarm className = {styles.va_task_img} size={20}/>
                    <p className = {styles.va_client_typo}>{details.due_time}</p>                    
                </div>
            </div>
            <div className = {styles.task_view} id = {details.id} onClick = {handleClick}>
                <p className = {styles.va_task_typo} id = {details.id}>View</p>
                <BsArrowRight className = {styles.va_task_img} size={25} id = {details.id}/>
            </div>
        </div>
    </div>
  )
}

export default Task