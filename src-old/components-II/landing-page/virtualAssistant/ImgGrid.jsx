import React from "react";
import styles from "./img.module.scss";

const ImgGrid = ({ children }) => {
  return <section className={styles.flex}>{children}</section>;
};

export default ImgGrid;
