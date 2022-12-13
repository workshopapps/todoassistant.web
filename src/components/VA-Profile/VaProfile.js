// import { CgProfile } from "react-icons/cg";
import axios from "axios";

import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

import style from "./VaProfile.module.scss";
import { useState, useEffect } from "react";
import raw from "./raw.json";
import PersonIcon from "@mui/icons-material/Person";
import ProfileAvatar from "../../core/dashboard/va-client-page/Avatar";
import { Typography } from "@mui/material";

function VAProfile() {
  const [data, setData] = useState(null);
  const [vaUsers, setVaUsers] = useState([]);
  const vaUser = JSON.parse(localStorage.getItem("VA"));

  const fetchTasks = async () => {
    if (vaUser) {
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/api/v1/va`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.data.va_id}`
          }
        }
      );
      const rawdata = response.data.data;
      setData(rawdata);
    }
  };

  useEffect(() => {
    fetchTasks();
    // console.log(tasks);
  }, []);
  console.log(data);
  if (data == null) {
    setData(raw);
  }

  // console.log(vaUser);

  const getUsers = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));
    // let vaUser = JSON.parse(localStorage.getItem("MASTER"));

    try {
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/va/user/${vaUser.data.va_id}`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );
      if (response.data.code === 200) {
        console.log(response);
        setVaUsers(response.data.data);
      }
    } catch (error) {
      // setOpen(true); // Stop loading in case of error
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={style.app}>
      <div className={style.major_container}>
        <div className={style.edit_container}>
          <div className={style.profile_icon_container}>
            {/* <CgProfile className={style.CgProfile} /> */}
            <PersonIcon
              sx={{
                fontSize: `2.3rem`,
                margin: `0 1rem`,
                bgcolor: `#714DD980`,
                borderRadius: `100%`,
                padding: `.5rem`
              }}
            />
            <h1 className={style.profile_icon_header}>Profile</h1>
          </div>
          {/* <div>
            <button className={style.edit_button}>Edit Profile</button>
          </div> */}
        </div>

        <div className={style.profile_raw_box}>
          <div className={style.profile_container}>
            <ProfileAvatar
              image={vaUser.avatar}
              fontSize={`48px`}
              fullName={[vaUser?.data.first_name, vaUser?.data.last_name]
                .join(" ")
                .toUpperCase()}
              size={{ width: 100, height: 100 }}
            />

            <div className={style.profile_container_items}>
              <div className={style.profile_container_details1}>
                <Typography
                  color={`#000`}
                  fontWeight={700}
                  // className={style.profile_container_items_header}
                >
                  {[vaUser?.data.first_name, vaUser?.data.last_name]
                    .join(" ")
                    .toUpperCase()}
                </Typography>
                <Typography
                  fontSize={`12px`}
                  fontWeight={700}
                  fontStyle={`italic`}
                  // className={style.profile_container_items_id}
                >
                  ID: {vaUser?.data.va_id}
                </Typography>
              </div>

              <div className={style.profile_container_details3}>
                <Typography
                  fontSize={`20px`}
                  fontWeight={700}
                  color={`#000`}
                  // className={style.profile_container_items_paragraph1}
                >
                  Bio
                </Typography>
                <Typography
                  color={`grey`}
                  className={style.profile_container_bio}
                >
                  {data?.data.bio}
                  Hi, My disipline and tenacity to get the job done will robb of
                  on you.
                </Typography>
              </div>

              <div className={style.profile_container_details4}>
                <div>
                  <Typography fontSize={`20px`} fontWeight={700} color={`#000`}>
                    {/* <p className={style.profile_container_items_paragraph1}> */}
                    Phone
                    {/* </p> */}
                  </Typography>
                  <p className={style.profile_container_num}>
                    {vaUser?.data.phone}
                  </p>
                </div>
                <div>
                  <Typography fontSize={`20px`} fontWeight={700} color={`#000`}>
                    {/* <p className={style.profile_container_items_paragraph1}> */}
                    Email Address
                    {/* </p> */}
                  </Typography>
                  <p className={style.profile_container_items_header}>
                    {vaUser?.data.email}
                  </p>
                </div>
              </div>

              <div className={style.profile_container_details}>
                <Typography fontSize={`20px`} fontWeight={700} color={`#000`}>
                  {/* <p className={style.profile_container_items_paragraph1}> */}
                  Skills
                  {/* </p> */}
                </Typography>
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
              <Typography
                mb={1}
                fontSize={`20px`}
                fontWeight={700}
                color={`#000`}
              >
                {/* <p className={style.rating_header}> */}
                Ratings
                {/* </p> */}
              </Typography>
              <div>
                <span className={style.rating_star_header}>
                  {data?.data.rating}
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
              <Typography fontSize={`20px`} fontWeight={700} color={`#000`}>
                {/* <h1 className={style.profile_stats_header}> */}
                Profile Stats
                {/* </h1> */}
              </Typography>
              <div className={style.profile_stats_items_container}>
                <div className={style.profile_stats_items}>
                  <p className={style.profile_stats_items_header1}>
                    {data?.data.completedtasks}
                  </p>
                  <p className={style.profile_stats_items_paragraph1}>
                    Completed Task
                  </p>
                </div>

                <div className={style.profile_stats_items}>
                  <p className={style.profile_stats_items_header2}>
                    {/* {data?.data.assigned} */}
                    {vaUsers.length}
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
