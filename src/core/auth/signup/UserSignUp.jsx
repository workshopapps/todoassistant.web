import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import MySignUpForm from "./MySignUpForm";
// import SignupForm from "./SignupForm";

const imgStyle = {
  objectFit: `cover`,
  width: `100%`,
  height: `100%`
};

const UserSignUp = () => {
  return (
    <Stack
      bgcolor={`#F9F7FF`}
      height={`100vh`}
      direction={{ xs: `column-reverse`, md: `row` }}
    >
      <Box height={{ xs: `90%`, md: `100%` }} flex={{ md: 1 }}>
        <Stack alignItems={{ xs: `center`, lg: `start` }}>
          <Box padding={{ xs: `1.5rem 0`, sm: `1.5rem 7rem` }}>
            <img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg"
              alt="LOGO"
            />
          </Box>
        </Stack>
        <Divider />
        {/* sign up form goes here */}
        {/* <SignupForm /> */}
        <MySignUpForm />
      </Box>
      <Box height={{ xs: `15%`, md: `100%` }} flex={{ md: 1 }}>
        <img
          style={imgStyle}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1670063557/hng/todoAppVirtualAssistant/Frame_26086174_q9avyl.svg`}
          alt="loginPicture"
        />
      </Box>
    </Stack>
  );
};

export default UserSignUp;
