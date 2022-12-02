import React, { useState } from "react";
import style from "./newsLetter.module.scss";
import axios from "axios"
const NewsLetter = () => {
  const [ email, setEmail ] = useState("")


  const handleNewsLetter = () => {
    axios.post('/subscribe', email)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <section className={style.news__letter}>
      <h3 className={style.header}>Newsletter</h3>
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          Email Address
        </label>
        <div className={style.input_container}>
           <input style={{outline: "none"}} autoComplete onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
           <input onClick={handleNewsLetter} className={style.subscribe_btn} type="button" value="Subscribe"/>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;