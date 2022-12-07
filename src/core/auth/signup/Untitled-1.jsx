import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import google from "../../../assets/google.png";
import MuiPhoneNumber from "material-ui-phone-number";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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
// import TextField from "@mui/material/TextField";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
// const baseurl = "https://api.ticked.hng.tech/api/v1";

const SignupForm = () => {
  // yup validator
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("gender is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("your phone number is required"),
    DOB: Yup.string().required("your date of birth is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required")
  });
  // states
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      gender: "",
      password: ""
    },
    resolver: yupResolver(validationSchema)
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
          <InputLabel htmlFor="first_name">First Name</InputLabel>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                sx={{ borderRadius: `8px` }}
                id="first_name"
                {...field}
                error={errors.first_name ? true : false}
              />
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.first_name?.message}
          </Typography>
        </Stack>
        {/* last Name */}
        <Stack>
          <InputLabel htmlFor="last_name">Last Name</InputLabel>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                sx={{ borderRadius: `8px` }}
                id="last_name"
                {...field}
                error={errors.last_name ? true : false}
              />
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.last_name?.message}
          </Typography>
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
                error={errors.email ? true : false}
              />
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.email?.message}
          </Typography>
        </Stack>
        <Stack>
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <Controller
            name={"phone"}
            control={control}
            render={({ field }) => (
              <MuiPhoneNumber
                required
                variant="outlined"
                defaultCountry={"ng"}
                name="phone"
                {...field}
                error={errors.phone ? true : false}
              />
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.phone?.message}
          </Typography>
        </Stack>
        {/* <Stack>
          <InputLabel htmlFor="DOB">Date of Birth</InputLabel>
          <Controller
            name={"DOB"}
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  renderInput={params => (
                    <TextField
                      id="DOB"
                      {...params}
                      error={errors.DOB ? true : false}
                    />
                  )}
                  {...field}
                />
              </LocalizationProvider>
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.DOB?.message}
          </Typography>
        </Stack> */}
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
                error={errors.gender ? true : false}
              />
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.gender?.message}
          </Typography>
        </Stack>
        {/* password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                {...field}
                error={errors.password ? true : false}
                sx={{ borderRadius: `8px` }}
                id="password"
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
          <Typography color={`red`} fontSize={`small`}>
            {errors.password?.message}
          </Typography>
        </Stack>
        {/* confirm password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                required
                {...field}
                error={errors.confirmPassword ? true : false}
                sx={{ borderRadius: `8px` }}
                id="confirmPassword"
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
            )}
          />
          <Typography color={`red`} fontSize={`small`}>
            {errors.confirmPassword?.message}
          </Typography>
        </Stack>

        <Stack
          direction={`row`}
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="acceptTerms"
                defaultValue="false"
                inputRef={register()}
                render={({ field: { onChange } }) => (
                  <Checkbox
                    color="primary"
                    onChange={e => onChange(e.target.checked)}
                  />
                )}
              />
            }
            label={
              <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                By signing up, you agree to the Terms of service and Privacy
                Policy
              </Typography>
            }
          />
          <br />
          <Typography variant="inherit" color="textSecondary">
            {errors.acceptTerms ? "(" + errors.acceptTerms.message + ")" : ""}
          </Typography>
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
