import React from "react";
import "./Settings.scss";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../../../assets/arrow-left-cj.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import axios from "axios";
import ProfileAvatar from "../../dashboard/va-client-page/Avatar";
import { useRef } from "react";
import { Box, CircularProgress, Stack } from "@mui/material";
import { Edit } from "@mui/icons-material";
import StatusBar from "../../dashboard/va-client-page/StatusBar";

// import { Typography } from "@mui/material";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { user_id } = user.data;
  const pictureInput = useRef(null);

  // useEffect(() => {
  //     axios.get(`api/v1/va/${user_id}').then((res)=> console.log("mm")`)
  // }, [])

  const close = () => {
    setOpen(false);
  };

  const defaultForm = {
    first_Name: user.data.first_name,
    last_name: user.data.last_name,
    email: user.data.email,
    phone: user.data.phone
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

  const updateStorage = data => {
    const profile = JSON.parse(localStorage.getItem("user"));
    Object.keys(data).forEach(key => {
      profile["data"]["avatar"] = data["avatar"];
      key;
    });
    localStorage.setItem("user", JSON.stringify(profile));
    // since we are not using context as a global use store...
    // we would have to reload the page for user data change
    // which in a sense is bad practice
    location.reload();
  };

  const handlePictureValue = async e => {
    const url = `https://api.ticked.hng.tech/api/v1/user/upload`;
    // setLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const config = {
      headers: {
        Authorization: `Bearer ${user.data.access_token}`,
        "Content-Type": "multipart/form-data"
      }
    };
    try {
      const res = await axios.post(url, formData, config);
      if (res.data.code === 200) {
        updateStorage(res.data.data);
        setLoading(false);
        setOpen(true);
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
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
          <div className="profile-bottom">
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Edit profile</p>
              <div className="head">
                <div className="head-1">
                  <Box
                    onClick={() => {
                      try {
                        setLoading(true);
                        pictureInput.current.click();
                      } catch (err) {
                        setLoading(false);
                      }
                    }}
                    className="user-initial"
                    sx={{ position: `relative`, cursor: `pointer` }}
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
                    <Stack
                      justifyContent={`center`}
                      alignItems={`center`}
                      borderRadius={`100%`}
                      sx={{ position: `absolute`, right: 0, bottom: 0 }}
                      bgcolor={`lightgrey`}
                      p={`5px`}
                    >
                      {isLoading ? (
                        <CircularProgress size={16} />
                      ) : (
                        <Edit sx={{ color: `#714DD9` }} fontSize="10px" />
                      )}
                    </Stack>
                  </Box>
                </div>
              </div>

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
      <StatusBar
        open={open}
        close={close}
        message={`profile picture uploaded successfully`}
        priority={`success`}
        position={`right`}
      />
    </div>
  );
};

export default EditProfile;
