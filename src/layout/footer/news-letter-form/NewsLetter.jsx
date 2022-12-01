import React from "react";
import style from "./newsLetter.module.scss";
const NewsLetter = () => {
  return (
    <section className={style.news__letter}>
      <h3 className={style.header}>Newsletter</h3>
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          Email Address
        </label>
        <div className={style.input_container}>
          <input
            className={`${style.input} hover`}
            type="email"
            placeholder="Enter email"
          />
          <input
            className={`${style.subscribe_btn} hover`}
            type="button"
            value="Subscribe"
          />
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
