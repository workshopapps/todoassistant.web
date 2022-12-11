import React from "react";
import "./Settings.scss";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../../../assets/arrow-left-cj.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import axios from "axios";
import ProfileAvatar from "../../dashboard/va-client-page/Avatar";
import { useRef } from "react";
// import { Typography } from "@mui/material";

const Edit = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { user_id } = user.data;
  const pictureInput = useRef(null);
  const [pictureValue, setPictureValue] = useState("");

  // useEffect(() => {
  //     axios.get(`api/v1/va/${user_id}').then((res)=> console.log("mm")`)
  // }, [])

  const defaultForm = {
    first_Name: "",
    last_name: "",
    email: "",
    phone: ""
  };

  const [form, setForm] = useState(defaultForm);
  const { first_Name, last_name, email, phone } = form;

  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const editRequest = async formValue => {
    let user = JSON.parse(localStorage.getItem("user"));

    try {
      if (user) {
        const res = await axios.put(
          `https://api.ticked.hng.tech/api/v1/user/${user_id}`,
          {
            first_name: formValue.first_Name,
            last_name: formValue.last_name,
            email: formValue.email,
            phone: formValue.phone
          },
          {
            headers: {
              Authorization: `Bearer ${user.data.access_token}`
            }
          }
        );

        if (res.status == 200 && res.data) {
          const { date_of_birth, email, first_name, gender, last_name, phone } =
            res.data;
          const updateUserData = {
            ...user.data,
            ["first_name"]: first_name,
            ["date_of_birth"]: date_of_birth,
            ["email"]: email,
            ["gender"]: gender,
            ["last_name"]: last_name,
            ["phone"]: phone
          };

          const updateUser = { ...user, ["data"]: updateUserData };
          localStorage.setItem("user", JSON.stringify(updateUser));
          navigate("/dashboard/profile");
          navigate(0);
          alert("Details changed");
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    editRequest(form);
  };

  const handlePictureValue = async e => {
    setPictureValue(e.target.files[0]);
    const url = `https://api.ticked.hng.tech/api/v1/user/upload`;

    const formData = new FormData();
    formData.append("file", pictureValue);
    // formData.append("fileName", pictureValue.name);
    const config = {
      headers: {
        Authorization: `Bearer ${user.data.access_token}`,
        "content-type": "multipart/form-data"
      }
    };
    const res = await axios.post(url, formData, config);
    console.log(res.data);
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
          <div className="profile-bottom">
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Edit profile</p>
              <div className="head">
                <div className="head-1">
                  <div
                    onClick={() => pictureInput.current.click()}
                    className="user-initial"
                  >
                    <input
                      onChange={handlePictureValue}
                      id="pictureInput"
                      ref={pictureInput}
                      hidden
                      type="file"
                    />
                    <ProfileAvatar
                      image={user.data.avatar}
                      fullName={[
                        user.data.first_name,
                        user.data.last_name
                      ].join(" ")}
                      size={{ width: 120, height: 120 }}
                      fontSize={`3rem`}
                    />
                  </div>
                </div>
              </div>
              {/* <Typography
                onClick={handleProfilePicChange}
                textAlign={`center`}
                mb={5}
              >
                Edit Profile image
                <input type="file" />
              </Typography> */}
              <div className="form-form">
                <div className="form-field">
                  <label htmlFor="first_Name" className="lab">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_Name"
                    required
                    name="first_Name"
                    value={first_Name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="last_name" className="lab">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    required
                    name="last_name"
                    value={last_name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="lab">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone" className="lab">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    name="phone"
                    value={phone}
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

export default Edit;
