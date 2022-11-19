import React from "react";

import styles from "./JobOpening.module.scss";
import arrowIcon from "../../../assets/arrow-down.png";
import searchIcon from "../../../assets/search-normal.png";
import CardJobs from "./cardjobs/CardJobs";

const JobOpening = () => {
  const jobs = [
    { name: "Graphic Design", text: "Minimum of 3 years experience in Graphics design or any related work", id: "1" },
    { name: "Web Developer", text: "Minimum of 3 years experience in Web Development or any related work", id: "2" },
    { name: "UI/UX Designer", text: "Minimum of 2 years experience in UI/UX Design or any related work", id: "3" },
    { name: "Virtual Assistant", text: "Minimum of 1 year experience being an assistant or any related work", id: "4" },
    { name: "Design Lead", text: "Minimum of 5 years experience in Design or any related work", id: "5" },
    { name: "Mobile Developer", text: "Minimum of 2 years experience in Mobile development or any related work", id: "6" },
  ];
  return (
    <section className={styles.careerJobContainer}>
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
            {jobs.map((data) => (
              <CardJobs name={data.name} text={data.text} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpening;
