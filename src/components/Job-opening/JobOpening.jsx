import React from "react";
import styles from "./JobOpening.module.scss";
import arrowIcon from "../../assets/arrow-down.png";
import searchIcon from "../../assets/search-normal.png";
import CardJobs from "../cardjobs/CardJobs";

const JobOpening = () => {
  const jobs = [
    { name: "Graphic Design", id: "1" },
    { name: "Web Developer", id: "2" },
    { name: "UI/UX Designer", id: "3" },
    { name: "Virtual Assistant", id: "4" },
    { name: "Design Lead", id: "5" },
    { name: "Mobile Developer", id: "6" },
  ];
  return (
    <div className={styles.career}>
      <div className={styles.container}>
        <div className={styles.jobOpenings}>
          <h2>Job Openings</h2>
          <p className={styles.sub}>
            Our door is always open for a good cup of cofee
          </p>
          <form>
            <div className={styles.inputWrapper}>
              <img src={searchIcon} alt="search" />
              <input type="text" placeholder="Search Jobs" />
            </div>
            <div className={styles.selectWrapper}>
              <img src={arrowIcon} alt="arrow-down" />
              <select name="location" id="location">
                <option value="">Location</option>
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <img src={arrowIcon} alt="arrow-down" />

              <select name="department" id="department">
                <option value="">Department</option>
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <img src={arrowIcon} alt="arrow-down" />
              <select name="workType" id="workType">
                <option value="">Work Type</option>
              </select>
            </div>
          </form>
          <div className={styles.grid}>
            {jobs.map((i) => (
              <CardJobs name={i.name} key={i.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpening;
