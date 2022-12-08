import React, { useEffect, useState } from 'react'
import styles from "./Clock.module.scss";
import moment from "moment";

const Clock = () => {
    const [digital, setDigital] = useState()
    const [period, setPeriod] = useState()
    const [day, setDay] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const format_day = moment(date).format("LL")
            const clock = moment(date).format("hh:mm:ss")
            const periodClock = moment(date).format("A")
            
            setPeriod(periodClock)
            setDigital(clock)
            setDay(format_day)

        }, 1000)
    })

  return (
    <div className={styles.clock}>
        <div className={styles.digital}>{digital} <span className={styles.period}>{period}</span></div>                
        <div className={styles.day}>{day}</div>
    </div>
       
   
  )
}

export default Clock