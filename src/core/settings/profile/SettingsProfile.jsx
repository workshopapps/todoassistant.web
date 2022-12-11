import React from "react";
import "./Settings.scss";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../../assets/arrow-right-cj.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import axios from "axios";
import ProfileAvatar from "../../dashboard/va-client-page/Avatar";
import { Edit } from "@mui/icons-material";
import { Button, Chip, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const iconStyle = {
  fontSize: `xx-large`,
  borderRadius: `100%`,
  padding: `5px`,
  // bgcolor: `#714DD930`,
  color: `#714DD9`,
  "&:hover": {
    bgcolor: `#714DD970`
  }
};

const SettingsProfilee = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { first_name, last_name, user_id, email, phone, avatar } = user.data;
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
                image={avatar}
              />
              <div className="user-name">
                <div className="user">
                  {first_name} {last_name}
                </div>
                <Chip
                  color="primary"
                  label="Ticked Free Plan"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="head-2">
              <Link to={`/dashboard/settings`} state={{ index: 1 }}>
                <Button
                  startIcon={<UpgradeIcon />}
                  className="upgrade-btn hover"
                >
                  Upgrade Plan
                </Button>
              </Link>
            </div>
          </div>

          <section className="personal-info">
            <div className="heading-info">
              <p className="personal">Personal Information</p>
              <Link to="/dashboard/edit" className="edit">
                <Chip
                  sx={{
                    fontSize: `1rem`,
                    px: 1,
                    color: "#714DD9",
                    border: `1px solid #714DD9`,
                    cursor: `pointer`
                  }}
                  size="large"
                  icon={<Edit sx={{ fontSize: `1rem` }} />}
                  label="Edit"
                />
              </Link>
            </div>

            <div className="details-card shadow">
              <Stack direction={`row`} alignItems={`center`} className="name">
                <Stack direction={`row`} alignItems={`center`} gap={1}>
                  <ProfileAvatar
                    size={{ width: 40, height: 40 }}
                    fontSize={`10px`}
                    fullName={[first_name, last_name].join(" ")}
                    image={avatar}
                  />
                  <p className="name-name">Name</p>
                </Stack>
                <Typography className="answer">
                  {first_name} {last_name}
                </Typography>
              </Stack>

              <Stack direction={`row`} alignItems={`center`} className="name">
                <Stack direction={`row`} alignItems={`center`} gap={1}>
                  <AlternateEmailIcon sx={iconStyle} />
                  <p className="name-name">Email address</p>
                </Stack>
                <Typography className="answer">{email}</Typography>
              </Stack>

              <Stack direction={`row`} alignItems={`center`} className="name">
                <Stack direction={`row`} alignItems={`center`} gap={1}>
                  <PhoneIcon sx={iconStyle} />
                  <p className="name-name">Phone number</p>
                </Stack>
                <Typography className="answer">{phone}</Typography>
              </Stack>
            </div>
          </section>

          <section className="Security">
            <div className="heading-info">
              <p className="personal">Security</p>
            </div>
            <div className="details-card-sec shadow">
              <Link to="change-password" className="tit">
                <Stack direction={`row`} alignItems={`center`} gap={1}>
                  <KeyIcon sx={iconStyle} />
                  <p className="tit-tit">Change password</p>
                </Stack>
                <img src={arrowRight} alt="arrow" />
              </Link>
            </div>
          </section>

          <Link
            className="logout shadow"
            onClick={() => setModal(cancle => !cancle)}
          >
            <Stack direction={`row`} alignItems={`center`} gap={1}>
              <RemoveCircleOutlineIcon
                sx={{
                  fontSize: `xx-large`,
                  borderRadius: `100%`,
                  padding: `5px`,
                  // bgcolor: `#ff000020`,
                  color: `red`,
                  "&:hover": {
                    bgcolor: `#714DD970`
                  }
                }}
              />
              <p className="log">Delete account</p>
            </Stack>
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfilee;
