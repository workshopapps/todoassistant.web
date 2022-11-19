import React from "react";
import style from "./newsLetter.module.scss";
const NewsLetter = () => {
  return (
    <section className={style.news__letter}>
      <h3 className={style.header}>Newsletter</h3>
      <form className={style.form}>
        <div>
          <label className={style.label} htmlFor="email">
            Email Address
          </label>
          <input
            className={style.input}
            type="email"
            placeholder="Enter email"
          />
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
