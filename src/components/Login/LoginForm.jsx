import { Visibility, VisibilityOff } from "@mui/icons-material";
import google from "../../assets/google.png";
import facebook from "../../assets/fb.png";
import { login } from "../../contexts/authContext/apiCalls";
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
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";

const LoginForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = prop => event => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(prevState => {
      return (prevState = !prevState);
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    login(formData, dispatch);
  };

  const onSuccess = res => {
    localStorage.setItem("user", JSON.stringify(res?.profileObj));
    localStorage.setItem("token", res?.tokenId);

    navigate("/dashboard", { replace: true });
  };
  const onFailure = err => {
    console.log("failed:", err);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <Container
      sx={{
        padding: { xs: `1.5rem`, md: `1.5rem 3rem`, lg: `1.5rem 7rem` },
        marginTop: { md: `3rem` }
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
        onSubmit={handleSubmit}
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
            value={formData.email}
            onChange={handleChange("email")}
          />
        </Stack>
        {/* password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            required
            sx={{ borderRadius: `8px` }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange("password")}
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
                clientId={clientId}
                render={renderProps => (
                  <img onClick={renderProps.onClick} src={google} alt="" />
                )}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
              />
            </IconButton>
            <IconButton sx={{ width: `fit-content` }} color="secondary">
              <img src={facebook} alt="" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default LoginForm;
