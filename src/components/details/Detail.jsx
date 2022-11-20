import React from "react";
import styles from "./detail.module.scss";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import userIcon from "../../assets/userIcon.png";
import call from "../../assets/call.png";
import message from "../../assets/message.png";
import { FaSmile } from "react-icons/fa";
import mic from "../../assets/mic.png";
import mark from "../../assets/mark.png";

const Detail = () => {
  const Navigate = useNavigate();
  const location = useLocation().state;
  const [chat, setChat] = React.useState([]);
  const handleChange = e => {
    if (e.key === "Enter") {
      setChat([...chat, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className={styles.details_wrap}>
      <div
        onClick={() => {
          Navigate(-1);
        }}
        className={styles.details_back}
      >
        <BiArrowBack className={styles.details_backIcon} />
        <p>Back</p>
      </div>
      <div className={styles.details_chatcontainer}>
        <div className={styles.details_left}>
          <div className={styles.details_widget}>
            <div className={styles.details_widgetLeft}>
              <h1>{location?.topic}</h1>
              <span>Fri., Nov 12th, 202209:00 AM - 09:45 AM</span>
              <p>Attend Rotarians meeting</p>
            </div>
            <input type="checkbox" />
          </div>

          <div className={styles.details_comment}>
            <h1>Comment</h1>
            <div className={styles.details_commentbody}>
              <p>Today</p>
              <div className={styles.details_chatscreen}>
                {chat.map((value, id) => {
                  return (
                    <div key={id} className={styles.details_chats}>
                      <div className={styles.details_chatsitem1}>{value}</div>

                      <div className={styles.details_chatsitem2}>
                        <div>{new Date().toLocaleTimeString()}</div>

                        <img src={mark} alt="mark" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.details_chatinput}>
                <FaSmile className={styles.details_chatmoji} />
                <input
                  onKeyPress={handleChange}
                  id="chat"
                  type="text"
                  placeholder="Type a message"
                />
                <img src={mic} alt="mic" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.details_right}>
          <h1>Client</h1>
          <div className={styles.details_callcard}>
            <div className={styles.details_callhead}>
              <img src={userIcon} alt="userIcon" />
              <div className={styles.details_info}>
                <h1 className={styles.detials_infoname}>{location?.name}</h1>
                <p>johnandrew@gamil.com</p>
              </div>
            </div>
            <div className={styles.details_foot}>
              <img src={call} alt="call" />
              <img src={message} alt="message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
