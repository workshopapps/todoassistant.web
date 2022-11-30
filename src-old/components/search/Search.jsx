import React from "react";
import styles from "./search.module.scss";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className={styles.search_wrap}>
      <IoMdSearch className={styles.search_icon} />
      <input type="text" placeholder="Search for something" />
    </div>
  );
};

export default Search;
