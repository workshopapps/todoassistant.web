import React from 'react'
import styles from './Home.module.scss'
import { AiOutlineClockCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

const TaskDetail = ({ taskDetails, handleClose }) => {
  return (
    <div className = {styles.taskDetail_container} id = {taskDetails.id}>
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
                        <p className = {styles.child_sub_typo}>Pending</p>
                    </div>                    
                </div>

                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>DUE TIME</div>
                    <p className = {styles.child_sub_typo}>{taskDetails.due_time}</p>                  
                </div>

                <div className = {styles.taskDetail_child}>
                    <div className = {styles.child_title}>CLIENT</div>
                    <div className = {styles.child_sub}>
                        <p className = {styles.child_sub_username}>{taskDetails.username}</p>
                        <p className = {styles.child_sub_typo}>{taskDetails.username}</p>
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