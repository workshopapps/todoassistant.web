import React from "react";
import './Settings.scss'
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from  "../../../assets/arrow-left-cj.svg"
import arrowRight from "../../../assets/arrow-right-cj.svg"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import { logout } from "../../../contexts/authContext/AuthActions";


const SettingsProfilee = () => {
  const {user,dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const {first_name, last_name, user_id, email, phone} = user
  

  let  FName= first_name
  let initial = FName.charAt(0).toUpperCase()

  return (
    <div className="settings">
      <div className="profile">
        <div className="profile-top">
          <img src={arrowLeft} alt="arrow" />
          <p className="title">My profile</p>
        </div>
        <div className="profile-bottom">
          <div className="head">
            <div className="head-1">
              <div className="user-initial">
                <p className="init">{initial}</p>
              </div>
              <div className="user-name">
                <div className="user">{first_name} {last_name}</div>
                <span className="subtitle">Ticked Free plan</span>
              </div>
            </div>
            <div className="head-2">
              <Link>
                <button className="upgrade-btn">Upgrade Plan</button>
              </Link>
            </div>
          </div>


          <section className="personal-info">
            <div className="heading-info">
              <p className="personal">Personal Information</p>
              <Link to="edit" className="edit">
                Edit
              </Link>
            </div>

            <div className="details-card">
              <div className="name">
                <p className="name-name">Name</p>
                <div className="answer">{first_name} {last_name}</div>
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
            <div className="details-card-sec">
              <Link  to="change-password" className="tit">
                <p className="tit-tit">Change password</p>
                <img src={arrowRight} alt="arrow" />
              </Link>
              <Link className="tit">
                <p className="tit-tit">Manage devices</p>
                <img src={arrowRight} alt="arrow" />
              </Link>
            </div>
          </section>

          <Link className="logout" onClick={handleLogout}>
            <p className="log">Logout</p>
            <img src={arrowRight} alt="arrow" />
          </Link>

          <Link className="logout">
            <p className="log">Delete account</p>
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfilee;
