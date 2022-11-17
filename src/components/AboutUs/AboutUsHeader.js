import styles from './AboutUsHeader.module.css'
import React from 'react'
import img from '../../assets/ticked_about_header.png'


const AboutUsHeader = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerTickedbox} >
            <p className={styles.ticked}>Ticked</p>
            <p className={styles.tickedabout}>About us</p>
            <p className={styles.tickedText} >A platform with great experience for <br/> everyone</p>
            <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.headerImageBox} >
            <image className={styles.img} src={img} alt=''/>
        </div>
    </div>
  )
}

export default AboutUsHeader