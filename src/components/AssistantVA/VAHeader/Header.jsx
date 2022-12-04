import React from 'react'
import WavingHand from '../../../assets/VADashboard/WavingHand.svg'
import notification from '../../../assets/VADashboard/notification.svg'
import profile from '../../../assets/VADashboard/profile.svg'
// import vaArrowDown from '../../../assets/VADashboard/va-arrowDown.svg'
import styles from './Header.module.scss'

const Header = ({ name }) => {
  return (
    <header className = {styles.va_header} >
      <p className = {styles.va_header_greeting} > Hello, {name} <span><img src = {WavingHand} alt="" /></span></p>
      <div className = {styles.profile_notification}>
        <div className = {styles.notification}>
          <img src = {notification} alt = "notification" />
        </div>
        <div className = {styles.profile}>
          <img src = {profile} alt = "notification" />
          {/* <img className = {styles.va_img} src={vaArrowDown} alt="vaArrow" /> */}
        </div>
      </div>
    </header>
  )
}

export default Header