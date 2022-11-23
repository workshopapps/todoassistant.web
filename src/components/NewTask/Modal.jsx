import React from 'react'
import styles from './Modal.module.scss'

function Modal( {title, description, date, time, repeat, assistant, open, onClose }) {
    if(!open) return null
  return (
      <div>
          <div className={styles.taskOverlay} onClick={onClose}>
              <div className={styles.taskModalContainer} onClick={(e) => {
            //   avoid further propagating the onclick event 
                e.stopPropagation();
              }}>

                <h2 className={styles.taskModalHeader}>Created Task</h2>
                  <h4 className={ styles.taskTitle }>Title</h4>
                <p>{title}</p>
                <h4 className={ styles.taskTitle }>Task Description</h4>
                <p>{description}</p>
                <h4 className={ styles.taskTitle }>Date</h4>
                <p>{date}</p>
                <h4 className={ styles.taskTitle }>Time</h4>
                <p>{time}</p>
                <h4 className={ styles.taskTitle }>Repeat</h4>
                <p>{repeat}</p>
                <h4 className={ styles.taskTitle }>Assistant</h4>
                <p>{assistant}</p>
                <button className={styles.closeBtn} onClick={onClose}>Ok</button>
            </div>
          </div>
          </div>
  )
}

export default Modal