import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/newTask/newtasklogo.png'
import back from '../../assets/newTask/arrowBack.png'
import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
          <img src={logo} alt="logo" />
      <div className={styles.backContainer}>
            <Link to="/home"><img src={back} alt="logo" /></Link> Back
          </div>
      </div>
  )
}

export default Sidebar