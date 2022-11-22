import { CgProfile } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import mainProfileImage from "../../assets/Ellipse 2.svg";
import style from "./VaProfile.module.scss";

function VAProfile() {
  return (
    <div className="App">
      <div className={style.major_container}>
        <div className={style.back_button_container}>
          <AiOutlineArrowLeft className={style.AiOutlineArrowLeft} />
          <span className={style.back_button_header}>Back</span>
        </div>

        <div className={style.edit_container}>
          <div className={style.profile_icon_container}>
            <CgProfile className={style.CgProfile} />
            <h1 className={style.profile_icon_header}>Profile</h1>
          </div>
          <div>
            <button className={style.edit_button}>Edit Profile</button>
          </div>
        </div>

        <div className={style.profile_container}>
          <img
            src={mainProfileImage}
            alt=""
            className={style.main_profile_image}
          />

          <div className={style.profile_container_items}>
            <div className={style.profile_container_details1}>
              <p className={style.profile_container_items_header}>
                Sandra Davids
              </p>
              <p className={style.profile_container_items_id}>ID: 204191402</p>
            </div>

            <div className={style.profile_container_details2}>
              <p className={style.profile_container_items_paragraph1}>Role</p>
              <p className={style.profile_container__virtualA}>
                Virtual Assistant
              </p>
            </div>

            <div className={style.profile_container_details3}>
              <p className={style.profile_container_items_paragraph2}>Bio</p>
              <p className={style.profile_container_bio}>
                I am available 24 hours a day. You just sit back and count on
                me.
              </p>
            </div>

            <div className={style.profile_container_details4}>
              <div>
                <p className={style.profile_container_items_paragraph3}>Phone</p>
                <p className={style.profile_container_num}>0802 290 4580</p>
              </div>

              <div>
                <p className={style.profile_container_items_paragraph4}>
                  Email Address
                </p>
                <p className={style.profile_container_items_header}>
                  sandradavid@ticked.com
                </p>
              </div>
            </div>

            <div className={style.profile_container_details5}>
              <div>
                <p className={style.profile_container_items_paragraph5}>
                  Address
                </p>
                <p className={style.profile_container_address}>
                  25 Adebanjo Street
                </p>
              </div>

              <div>
                <p className={style.profile_container_items_city}>City</p>
                <p className={style.profile_container_items_header}>Lagos</p>
              </div>

              <div>
                <p className={style.profile_container_items_paragraph6}>
                  Country
                </p>
                <p className={style.profile_container_items_header}>Nigeria</p>
              </div>
            </div>

            <div className={style.profile_container_details}>
              <p className={style.profile_container_items_paragraph7}>Skills</p>
              <div className={style.button_container}>
                <button className={style.button1}>Excel Software</button>
                <button className={style.button2}>Time Management</button>
                <button className={style.button3}>Communication</button>
                <button className={style.button4}>Writing Skills</button>
              </div>
            </div>
          </div>

          <div className={style.rating_container_div}>
            <div className={style.rating_container}>
              <p className={style.rating_header}>Ratings</p>
              <div>
                <span className={style.rating_star_header}>8.4</span>
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
                  <p className={style.profile_stats_items_header1}>8</p>
                  <p className={style.profile_stats_items_paragraph1}>
                    Completed Task
                  </p>
                </div>

                <div className={style.profile_stats_items}>
                  <p className={style.profile_stats_items_header2}>5</p>
                  <p className={style.profile_stats_items_paragraph2}>
                    Assigned Client(s)
                  </p>
                </div>

                <div className={style.profile_stats_items}>
                  <p className={style.profile_stats_items_header3}>1</p>
                  <p className={style.profile_stats_items_paragraph3}>
                    Unassigned Client(s)
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
