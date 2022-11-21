import React from 'react'
import styles from '../../core/todo/NewTask.module.scss'

function Header() {
  return (
      <header className={styles.newTaskHeader}>
      <h2 className={ styles.newTaskTitle }>New Task</h2>
      </header>
  )
}

export default Header