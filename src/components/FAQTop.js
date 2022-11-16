import React from 'react'
import classes from "./FAQTop.module.scss"
import icon from "../assets/faqsearchicon.png"

const FAQTop = () => {
  return (
    <div className={classes.container}>
        <h1>Hi, How can we help you today?</h1>
        <div className={classes.search}>
            <img src={icon} width={15} alt="" />
        <input type="text" placeholder="Search for something" name="" id="" />
        </div>
        <p className={classes.web}> You can browse the topics below to see what you are looking for</p>
        <p className={classes.mobile}> You can browse the topics below.</p>
    </div>
  )
}

export default FAQTop