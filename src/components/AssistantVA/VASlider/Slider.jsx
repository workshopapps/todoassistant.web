import React from 'react'
import styles from './Slider.module.scss'
import ticked from '../../../assets/VADashboard/ticked.svg'
import VAHome from '../../../assets/VADashboard/VAHome.svg'
// import VATasks from '../../../assets/VADashboard/VATasks.svg'
import VAClients from '../../../assets/VADashboard/VAClients.svg'
import vaSettings from '../../../assets/VADashboard/vaSettings.svg'

const Slider = ({ clients }) => {
  return (
    <section className={styles.va_slider_container}>
        < div className = {styles.slider_top}>
            <img src={ticked} alt="ticked" />
            <div className = {styles.va_title}> TICKED </div>
        </div>

        < div className = {styles.slider_nav}>
            <div className = {styles.va_navLink}> 
                <img src={VAHome} alt="VAHome" />
                <p className = {styles.va_typo}>Home</p>
            </div>
            {/* <div className = {styles.va_navLink}> 
                <img className = {styles.va_img} src={VATasks} alt="VAClients" />
                <p className = {styles.va_typo}>Tasks</p>
                <span className = {[styles.va_typo, styles.clients].join(" ")}>{ clients }</span>
            </div> */}
            <div className = {styles.va_navLink}> 
                <img className = {styles.va_img} src={VAClients} alt="VAClients" />
                <p className = {styles.va_typo}>Clients</p>
                <span className = {[styles.va_typo, styles.clients].join(" ")}>{ clients }</span>
            </div>
            <div className = {styles.va_navLink}> 
                <img className = {styles.va_img} src={vaSettings} alt="VASettings" />
                <p className = {styles.va_typo}>Settings</p>
            </div>
        </div>

    </section>
  )
}

export default Slider