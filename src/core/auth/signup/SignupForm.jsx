import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import google from "../../../assets/google.png";
import MuiPhoneNumber from "material-ui-phone-number";
import { useForm, Controller } from "react-hook-form";
import "./Signup.scss";
// import { AuthContext } from "../../../contexts/authContext/AuthContext";
// import { gapi } from "gapi-script";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { login } from "../../../contexts/VAContexts/apiCalls";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
// const baseurl = "https://api.ticked.hng.tech/api/v1";

const SignupForm = () => {
  // states
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      gender: "",
      password: ""
    }
  });
  const onSubmit = data => console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // functions to handle states
  const handleClickShowPassword = () => {
    setShowPassword(prevState => {
      return (prevState = !prevState);
    });
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => {
      return (prevState = !prevState);
    });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // display
  return (
    <Container
      sx={{
        padding: { xs: `1.5rem`, md: `1.5rem 3rem`, lg: `1.5rem 7rem` },
        marginTop: { md: `1rem` },
        maxWidth: `40rem !important`,
        height: `calc(100vh - 103px)`,
        overflow: `auto`
      }}
    >
      <Box m={`2rem 0`}>
        <Typography
          textAlign={`center`}
          color={`#333333`}
          fontSize={{ xs: `24`, md: `25px` }}
          fontWeight={700}
          varient="h2"
        >
          Create Account
        </Typography>
      </Box>

      {/* Form fields */}
      <Stack
        onSubmit={handleSubmit(onSubmit)}
        gap={3}
        component="form"
        noValidate
        autoComplete="off"
      >
        {/* First Name */}
        <Stack>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                sx={{ borderRadius: `8px` }}
                id="firstname"
                {...field}
              />
            )}
          />
        </Stack>
        {/* last Name */}
        <Stack>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                sx={{ borderRadius: `8px` }}
                id="lastname"
                {...field}
              />
            )}
          />
        </Stack>

        {/* email address */}
        <Stack>
          <InputLabel htmlFor="email-address">Email Address</InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                sx={{ borderRadius: `8px` }}
                id="email-address"
                type="email"
                {...field}
              />
            )}
          />
        </Stack>
        <Stack>
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <Controller
            name={"phone"}
            control={control}
            render={({ field }) => (
              <MuiPhoneNumber
                variant="outlined"
                defaultCountry={"ng"}
                name="phone"
                {...field}
              />
            )}
          />
        </Stack>
        {/* Gender */}
        <Stack>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                sx={{ borderRadius: `8px` }}
                id="gender"
                type="text"
                placeholder="Enter male or female"
                {...field}
              />
            )}
          />
        </Stack>
        {/* password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                sx={{ borderRadius: `8px` }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
        </Stack>
        {/* confirm password */}
        <Stack>
          <InputLabel htmlFor="password">Confirm Password</InputLabel>
          <OutlinedInput
            required
            sx={{ borderRadius: `8px` }}
            id="outlined-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Stack>
        {/* forgot password text */}
        <Stack
          direction={`row`}
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    sx={{
                      fontSize: `12px`,
                      color: `#714DD9`,
                      "&.Mui-checked": {
                        color: `#714DD9`
                      }
                    }}
                  />
                }
                label="By signing up, you agree to the Terms of service and Privacy Policy"
              />
            )}
          />
        </Stack>
        {/* call to action btn */}
        <Stack>
          <Button
            type="submit"
            disableElevation
            size="large"
            variant="contained"
            sx={{
              bgcolor: `#714DD9`,
              padding: `1rem 0`,
              borderRadius: `8px`,
              "&:hover": {
                bgcolor: `#714DD9`
              }
            }}
          >
            Sign up
          </Button>
          {/* continue with */}
          <Stack
            direction={`row`}
            alignItems={`center`}
            justifyContent={`center`}
            gap={1}
          >
            <IconButton sx={{ width: `fit-content` }} color="secondary">
              <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                  <img onClick={renderProps.onClick} src={google} alt="" />
                )}
                buttonText="Sign in with Google"
                // onSuccess={onSuccess}
                // onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
              />
            </IconButton>
            <IconButton sx={{ width: `fit-content` }} color="secondary">
              {/* <img src={facebook} alt="" /> */}
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignupForm;
