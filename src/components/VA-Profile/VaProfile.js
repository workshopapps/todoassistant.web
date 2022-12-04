import { CgProfile } from "react-icons/cg";
import axios from "axios";

import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import mainProfileImage from "../../assets/Ellipse 2.svg";
import style from "./VaProfile.module.scss";
import { useState } from "react";

function VAProfile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  var va_id = JSON.parse(localStorage.getItem("VA"));
   
  if (va_id) {
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/api/v1/va`,
        {
          headers: {
            Authorization: `Bearer ${va_id}`
          }
        }
      );

  const data = response.data;
  
  return (
    
      <div className={style.app}>
        <div className={style.major_container}>
          <div className={style.edit_container}>
            <div className={style.profile_icon_container}>
              <CgProfile className={style.CgProfile} />
              <h1 className={style.profile_icon_header}>Profile</h1>
            </div>
            <div>
              <button className={style.edit_button}>Edit Profile</button>
            </div>
          </div>

          <div className={style.profile_raw_box}>
            <div className={style.profile_container}>
              <img
                src={mainProfileImage}
                alt=""
                className={style.main_profile_image}
              />

              <div className={style.profile_container_items}>
                <div className={style.profile_container_details1}>
                  <p className={style.profile_container_items_header}>
                    {data?.firstname + " " + data?.lastname}
                  </p>
                  <p className={style.profile_container_items_id}>
                    ID: {data?.vaid}
                  </p>
                </div>

                <div className={style.profile_container_details3}>
                  <p className={style.profile_container_items_paragraph1}>
                    Bio
                  </p>
                  <p className={style.profile_container_bio}>{data?.bio}</p>
                </div>

                <div className={style.profile_container_details4}>
                  <div>
                    <p className={style.profile_container_items_paragraph1}>
                      Phone
                    </p>
                    <p className={style.profile_container_num}>{data?.phone}</p>
                  </div>
                  <div>
                    <p className={style.profile_container_items_paragraph1}>
                      Email Address
                    </p>
                    <p className={style.profile_container_items_header}>
                      {data?.email}
                    </p>
                  </div>
                </div>

                <div className={style.profile_container_details}>
                  <p className={style.profile_container_items_paragraph1}>
                    Skills
                  </p>
                  <div className={style.button_container}>
                    <button className={style.button1}>Excel Software</button>
                    <button className={style.button1}>Time Management</button>
                    <button className={style.button1}>Communication</button>
                    <button className={style.button1}>Writing Skills</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.rating_container_div}>
              <div className={style.rating_container}>
                <p className={style.rating_header}>Ratings</p>
                <div>
                  <span className={style.rating_star_header}>
                    {data?.rating}
                  </span>
                  <span>
                    <BsStarFill className={style.star} />
                    <BsStarFill className={style.star} />
                    <BsStarFill className={style.star} />
                    <BsStarHalf className={style.star} />
                    <BsStar className={style.star} />
                  </span>
                </div>
              </div>

              <div className={style.profile_stats_container}>
                <h1 className={style.profile_stats_header}>Profile Stats</h1>
                <div className={style.profile_stats_items_container}>
                  <div className={style.profile_stats_items}>
                    <p className={style.profile_stats_items_header1}>
                      {data?.completedtasks}
                    </p>
                    <p className={style.profile_stats_items_paragraph1}>
                      Completed Task
                    </p>
                  </div>

                  <div className={style.profile_stats_items}>
                    <p className={style.profile_stats_items_header2}>
                      {data?.assigned}
                    </p>
                    <p className={style.profile_stats_items_paragraph2}>
                      Assigned Client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default VAProfile;
