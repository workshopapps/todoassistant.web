// import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import google from "../../../assets/google.png";
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
// import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignupForm = () => {
  // const clientId =
  //   "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
  // const {
  //   register,
  //   handleSubmit,
  //   trigger,
  //   formState: { errors }
  // } = useForm();
  // const baseurl = "https://api.ticked.hng.tech/api/v1";
  // const [isChecked, setIsChecked] = useState(false);
  // const [active, setActive] = useState(true);
  // const [passwordShown, setPasswordShown] = useState(false);
  // const [phone, setPhone] = useState();
  // const { dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // });

  // const onSuccess = res => {
  //   googleSignUp(res?.profileObj);
  // };
  // const onFailure = err => {
  //   console.log("failed:", err);
  // };

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  // const googleSignUp = async body => {
  //   try {
  //     const response = await axios.post(`${baseurl}/googlelogin`, body);
  //     if (response.status == 200 && response.data) {
  //       localStorage.setItem(
  //         "token",
  //         JSON.stringify(response.data.access_token)
  //       );
  //       localStorage.setItem("user", JSON.stringify(response?.data));
  //       navigate("/dashboard", { replace: true });
  //       navigate(0);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const HandleSubmit = async data => {
  //   const { first_name, last_name, email, password, gender, date_of_birth } =
  //     data;

  //   try {
  //     const response = await axios.post(
  //       "https://api.ticked.hng.tech/api/v1/user",
  //       {
  //         first_name,
  //         last_name,
  //         email,
  //         phone,
  //         password,
  //         gender,
  //         date_of_birth
  //       }
  //     );
  //     console.log(response);
  //     login({ email, password }, dispatch);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  return (
    <Container
      sx={{
        padding: { xs: `1.5rem`, md: `1.5rem 3rem`, lg: `1.5rem 7rem` },
        marginTop: { md: `3rem` },
        maxWidth: `40rem !important`
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
          Welcome Back
        </Typography>
      </Box>

      {/* Form fields */}
      <Stack
        // onSubmit={handleSubmit}
        gap={3}
        component="form"
        noValidate
        autoComplete="off"
      >
        {/* email address */}
        <Stack>
          <InputLabel htmlFor="email-address">Email Address</InputLabel>
          <OutlinedInput
            required
            sx={{ borderRadius: `8px` }}
            id="email-address"
            type="email"
            // value={formData.email}
            // onChange={handleChange("email")}
          />
        </Stack>
        {/* password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            required
            sx={{ borderRadius: `8px` }}
            id="outlined-adornment-password"
            // type={showPassword ? "text" : "password"}
            // value={formData.password}
            // onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
          />
        </Stack>
        {/* forgot password text */}
        <Stack
          direction={`row`}
          // direction={{ xs: `column`, sm: `row` }}
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  fontSize: `12px`,
                  color: `#714DD9`,
                  "&.Mui-checked": {
                    color: `#714DD9`
                  }
                }}
              />
            }
            label="Remember me"
          />
          <Link to="/resetpassword">
            <Typography
              fontSize={{ xs: `12px`, sm: `initial` }}
              color={`#714DD9`}
            >
              Forgot Password ?
            </Typography>
          </Link>
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
            Sign in
          </Button>
          <Stack
            margin={`1rem 0`}
            direction={`row`}
            // direction={{ xs: `column`, sm: `row` }}
            alignItems={`center`}
            justifyContent={`center`}
            gap={1}
          >
            <Typography fontSize={{ xs: `12px`, sm: `initial` }}>
              Don't have an account ?{" "}
            </Typography>
            <Link to="/signup">
              <Typography
                fontSize={{ xs: `12px`, sm: `initial` }}
                color="#714DD9"
                fontWeight={700}
              >
                Create Account
              </Typography>
            </Link>
          </Stack>
          {/* continue with */}
          <Stack
            direction={`row`}
            alignItems={`center`}
            justifyContent={`center`}
            gap={1}
          >
            <IconButton sx={{ width: `fit-content` }} color="secondary">
              <GoogleLogin
                // clientId={clientId}
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
