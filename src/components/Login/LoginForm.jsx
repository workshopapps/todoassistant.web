import { Visibility, VisibilityOff } from "@mui/icons-material";
import google from "../../assets/google.png";
// import facebook from "../../assets/fb.png";
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
// import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import StatusBar from "../../core/dashboard/va-client-page/StatusBar";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { loginSuccess } from "../../contexts/authContext/AuthActions";

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
const baseurl = "https://api.ticked.hng.tech/api/v1";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isFetching, errMessage, dispatch } = useContext(AuthContext);
  // const [specificErrorMessage, setSpecificErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [fbUser, setFbUser] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  useEffect(() => {
    if (fbUser){
     let name = fbUser.name;
     let email = fbUser.email;
     console.log(name, email);
     fbSignUp({name, email})
   
    } 
   },[fbUser]);
 
   const fbSignUp = async (body) => {
     try {
       const response = await axios.post(
         "https://api.ticked.hng.tech/api/v1/facebooklogin", body
       );
       console.log(response.data);
       dispatch(loginSuccess(response.data));
      //  localStorage.setItem(
      //    "token",
      //    JSON.stringify(response.data.access_token)
      //  );
      //  localStorage.setItem("user", JSON.stringify(response?.data));
      //  navigate("/dashboard", { replace: true });
     } catch (err) {
       console.log(err);
       
     }
   }

  useEffect(() => {
    if (errMessage) {
      // setSpecificErrorMessage(errMessage);
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    }
  }, [errMessage]);

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
    console.log(res);
    googleSignIn(res?.profileObj);
  };
  const onFailure = err => {
    console.log("failed:", err);
  };

  const googleSignIn = async body => {
    try {
      const response = await axios.post(`${baseurl}/googlelogin`, body);
      if (response.status == 200 && response.data) {
        localStorage.setItem(
          "google_login_token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response?.data));
        navigate("/dashboard", { replace: true });
        navigate(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const responseFacebook = (response) => {
  //   console.log(response);
  //   // setData(response);
  //   // setPicture(response.picture.data.url);
  //   // if (response.accessToken) {
  //   //   setLogin(true);
  //   // } else {
  //   //   setLogin(false);
  //   // }
  // }

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
            sx={{ borderRadius: `8px`, bgcolor: `#fff` }}
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
            sx={{ borderRadius: `8px`, bgcolor: `#fff` }}
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
              bgcolor: isAlertVisible ? `red` : `#714DD9`,
              padding: `1rem 0`,
              borderRadius: `8px`,
              "&:hover": {
                boxShadow: `0px 0px 0px 4px #714dd950`,
                bgcolor: `#7b5ed3`
              }
            }}
          >
            {isFetching ? `Signing in...` : `sign in`}
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
            <LoginSocialFacebook
              appId="486566616898057"
              onResolve={(response) =>{
                console.log(response);
                setFbUser(response.data);
              }}
              onReject={(error) => {
                console.log(error);
              }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <StatusBar
        open={isAlertVisible}
        message={errMessage}
        priority={`error`}
        position={`left`}
      />
    </Container>
  );
};

export default LoginForm;

{
  /* <div className={styles.eachContainer}>
  <label htmlFor="phone" className={styles.describer}>
    Phone Number
  </label>
  <PhoneInput
    className={styles.phone}
    international
    defaultCountry="NG"
    id="phone"
    required
    value={phone}
    onChange={setPhone}
  />
</div>; */
}

//  <div className={styles.eachContainer}>
//    <label htmlFor="date_of_birth" className={styles.describer}>
//      Date of birth
//    </label>
//    <input
//      className={errors.date_of_birth ? styles.Err : styles.inpuT}
//      id="date_of_birth"
//      type="date"
//      placeholder="Enter Date of birth"
//      {...register("date_of_birth", { required: "Pick a date" })}
//    />
//    {errors.date_of_birth && (
//      <small className={styles.error_state}>
//        {errors.date_of_birth.message}
//      </small>
//    )}
//  </div>;

{
  /* <div className={styles.eachContainer}>
  <label htmlFor="gender" className={styles.describer}>
    Gender
  </label>
  <select
    name="isSeries"
    id="gender"
    className={errors.gender ? styles.Err : styles.inpuT}
    {...register("gender", { required: "Select a gender" })}
  >
    <option value="" disabled>
      Select Gender
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  {errors.gender && (
    <small className={styles.error_state}>{errors.gender.message}</small>
  )}
</div>; */
}
