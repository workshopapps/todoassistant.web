import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Signup_Form from "./Signup-Form";
import CreateAccountImg from "../../../assets/images/create-account.svg";
import style from "./Signup.module.scss";

const imgStyle = {
  objectFit: `cover`,
  width: `100%`,
  height: `100%`
};

const Signup = () => {
  return (
    <Stack
      bgcolor={`#f9f7ff`}
      height={`100vh`}
      direction={{ xs: `column-reverse`, md: `row` }}
    >
      <Box height={{ xs: `90%`, md: `100%` }} flex={{ md: 1 }}>
        <Stack alignItems={{ xs: `center`, lg: `start` }}>
          <Link to={"/"}>
            <Box padding={{ xs: `1.5rem 3rem`, sm: `1.5rem 7rem` }}>
              <img
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg"
                alt="LOGO"
              />
            </Box>
          </Link>
        </Stack>
        <Divider />
        <Signup_Form />
      </Box>
      <Box height={{ xs: `15%`, md: `100%` }} flex={{ md: 1 }}>
        <img
          style={imgStyle}
          src={CreateAccountImg}
          className={style.mainImg}
          alt="loginPicture"
        />
      </Box>
    </Stack>
  );
};

export default Signup;
