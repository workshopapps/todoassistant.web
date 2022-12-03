import { CgProfile } from "react-icons/cg";
import Axios from "axios";

import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import mainProfileImage from "../../assets/Ellipse 2.svg";
import style from "./VaProfile.module.scss";
import { useEffect, useState } from "react";
import raw from "./raw.json";
import Dashboardlayout from "../../layout/dasboard-layout/Dashboardlayout";

function VAProfile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("2022/api/v1/va/user/task/436a5272-f911-4d8f-adf0-656c41ef8fb6")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("Error fetching data:", error);
        setError(error);
        setData(raw.data);
      });
  }, []);

  console.log(data);
  console.log(raw);
  console.log(error);

  return (
    <Dashboardlayout>
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
    </Dashboardlayout>
  );
}

export default VAProfile;
