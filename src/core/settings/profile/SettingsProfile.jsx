import React from "react";
import "./Settings.scss";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../../assets/arrow-right-cj.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import axios from "axios";
import ProfileAvatar from "../../dashboard/va-client-page/Avatar";

const SettingsProfilee = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { first_name, last_name, user_id, email, phone } = user.data;
  // let FName = first_name
  // let initial = FName.charAt(0).toUpperCase()

  const [modal, setModal] = useState(false);

  const deleteRequest = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    try {
      if (user) {
        const res = await axios.delete(
          `https://api.ticked.hng.tech/api/v1/user/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${user.data.access_token}`
            }
          }
        );
        if (res.status == 200 && res.data) {
          localStorage.setItem("user", null);
          navigate("/");
          navigate(0);
          alert("account deleted");
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleDelete = async () => {
    await deleteRequest();
  };

  return (
    <div className="settings">
      <div className={modal ? "delete_modal" : "delete_hidden"}>
        <div className="con">
          <p className="delete_head">Delete your account</p>
          <button className="delete_btn" onClick={handleDelete}>
            Delete Account
          </button>
          <button
            className="delete_btn delete_alt"
            onClick={() => setModal(() => false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="profile">
        <div className="profile-top">
          <p className="title">My profile</p>
        </div>
        <div className="profile-bottom">
          <div className="head">
            <div className="head-1">
              {/* <div className="user-initial">
                <p className="init">{initial}</p>
              </div> */}
              <ProfileAvatar
                size={{ width: 100, height: 100 }}
                fontSize={`3rem`}
                fullName={[first_name, last_name].join(" ")}
              />
              <div className="user-name">
                <div className="user">
                  {first_name} {last_name}
                </div>
                <span className="subtitle">Ticked Free plan</span>
              </div>
            </div>
            <div className="head-2">
              <Link to={`/subscribe`}>
                <button className="upgrade-btn hover">Upgrade Plan</button>
              </Link>
            </div>
          </div>

          <section className="personal-info">
            <div className="heading-info">
              <p className="personal">Personal Information</p>
              <Link to="/dashboard/edit" className="edit">
                Edit
              </Link>
            </div>

            <div className="details-card shadow">
              <div className="name">
                <p className="name-name">Name</p>
                <div className="answer">
                  {first_name} {last_name}
                </div>
              </div>
              <div className="name">
                <p className="name-name">Email address</p>
                <div className="answer">{email}</div>
              </div>
              <div className="name">
                <p className="name-name">Phone number</p>
                <div className="answer">{phone}</div>
              </div>
              <div className="name">
                <p className="name-name">User ID</p>
                <div className="answer uid">{user_id}</div>
              </div>
            </div>
          </section>

          <section className="Security">
            <div className="heading-info">
              <p className="personal">Security</p>
            </div>
            <div className="details-card-sec shadow">
              <Link to="change-password" className="tit">
                <p className="tit-tit">Change password</p>
                <img src={arrowRight} alt="arrow" />
              </Link>
            </div>
          </section>

          <Link className="logout shadow" onClick={() => setModal(cancle => !cancle)}>
            <p className="log">Delete account</p>
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfilee;
