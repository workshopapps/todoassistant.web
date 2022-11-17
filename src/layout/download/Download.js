import React from 'react'
import styles from './Download.module.scss'

//Images
import tick from  '../../assets/home/tick.png'
import play from  '../../assets/home/play.png'
import apple from  '../../assets/home/apple.png'
import phone from  '../../assets/home/phone.png'

export default function Download() {
  return (
    <div className={styles.main}>
        <div className={styles.main__tick}>
            <div className={styles.main__tick__tickSub}>
                <img src={tick} alt="ticked" />
                <h4>Ticked</h4>
            </div>
            <div className={styles.main__tick__download}>
                <h5>Download Mobile App</h5>
                <p>Start adding tasks, staying organised and keeping up with your time. We’re here to help you!</p>
            </div>
            <div className={styles.main__tick__image}>
                <img src={apple} alt="Apple store" />
                <img src={play} alt="Google play" />
            </div>
        </div>
        <div className={styles.main__phone}>
            <img src={phone} alt="phone" />
        </div>
    </div>
  )
}
