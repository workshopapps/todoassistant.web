import React from "react";
import "./Settings.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowLeft from "../../../assets/arrow-left-cj.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();

  const defaultForm = {
    Current_password: "",
    New_password: "",
    Confirm_password: ""
  };
  const [form, setForm] = useState(defaultForm);
  const { Current_password, New_password, Confirm_password } = form;

  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const pass = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    try {
      if (user) {
        const res = await axios.put(
          `https://api.ticked.hng.tech/api/v1/user/change-password`,
          {
            old_password: Current_password,
            new_password: New_password
          },
          {
            headers: {
              Authorization: `Bearer ${user.data.access_token}`
            }
          }
        );

        if (res.status == 200 && res.data) {
          navigate("/dashboard/profile");
          navigate(0);
          alert("password changed");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async e => {
    e.preventDefault();
    if (New_password !== Confirm_password) {
      alert("E no match");
      return;
    } else {
      pass();
    }
  };

  return (
    <div>
      <div className="settings">
        <div className="profile conman">
          <div className="profile-top">
            <Link to="../profile">
              <img src={arrowLeft} alt="arrow" />
            </Link>
          </div>
          <div className="profile-bottom shadow">
            <form className="form" onSubmit={handleDelete}>
              <p className="title">Change password</p>
              <div className="form-form">
                <div className="form-field">
                  <label htmlFor="FullName">Enter current password</label>
                  <input
                    type="text"
                    id="FullName"
                    name="Current_password"
                    value={Current_password}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="Email">Enter new password</label>
                  <input
                    type="text"
                    id="Email"
                    name="New_password"
                    value={New_password}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Confirm new password</label>
                  <input
                    type="text"
                    id="phone"
                    name="Confirm_password"
                    value={Confirm_password}
                    onChange={onChange}
                  />
                </div>
              </div>

              <button className="btn-btn-btn hover" type="submit">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
