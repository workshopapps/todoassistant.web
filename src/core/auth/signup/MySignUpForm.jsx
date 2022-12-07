import React, { useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import google from "../../../assets/google.png";
import { GoogleLogin } from "react-google-login";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import { gapi } from "gapi-script";
import axios from "axios";
import { login } from "../../../contexts/VAContexts/apiCalls";
import MuiPhoneNumber from "material-ui-phone-number";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const style = {
  border: `1px solid #d3d0d905`,
  backgroundColor: `#ffffff`,
  borderRadius: `8px`,
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      border: `1px solid #d3d0d9`
      //   boxShadow: `0px 0px 0px 4px #714dd950`
    },
    "&.Mui-focused fieldset": {
      border: `1px solid #d3d0d9`,
      boxShadow: `0px 0px 0px 2px #714dd950`
    }
  }
};

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
const baseurl = "https://api.ticked.hng.tech/api/v1";

const MySignUpForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("first_name is required"),
    last_name: Yup.string().required("last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("your phone number is required"),
    gender: Yup.string().required("your gender is required"),
    date_of_birth: Yup.string().required("your date of birth is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required")
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async data => {
    const date_of_birth = moment(data.date_of_birth).format("YYYY-MM-DD"); //instrument.ts:124 Deprecation warning: value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged.
    const { first_name, last_name, email, phone, password, gender } = data;
    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/user",
        { first_name, last_name, email, phone, password, gender, date_of_birth }
      );

      console.log(response);

      if (response.data.code === 200) {
        console.log(response);
        login({ email, password }, dispatch);
      }
    } catch (err) {
      console.log(err);
    }
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

  const googleSignUp = async body => {
    try {
      const response = await axios.post(`${baseurl}/googlelogin`, body);
      if (response.status == 200 && response.data) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response?.data));
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccess = res => {
    googleSignUp(res?.profileObj);
  };

  const onFailure = err => {
    console.log("failed:", err);
  };

  return (
    <Container
      sx={{
        padding: { xs: `1.5rem 0`, md: `1.5rem 3rem` },
        marginTop: { md: `1rem` },
        maxWidth: `40rem !important`,
        height: `calc(100vh - 103px)`,
        overflow: `auto`
      }}
    >
      <Box px={3} py={2}>
        <Typography
          fontWeight={700}
          variant="h4"
          fontSize={`25px`}
          marginBottom={`30px`}
          align="center"
          margin="dense"
        >
          Create Account
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="first_name">First Name</InputLabel>
            <TextField
              sx={style}
              required
              id="first_name"
              name="first_name"
              fullWidth
              margin="dense"
              {...register("first_name")}
              error={errors.first_name ? true : false}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.first_name?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="last_name">Last Name</InputLabel>
            <TextField
              sx={style}
              required
              id="last_name"
              name="last_name"
              fullWidth
              margin="dense"
              {...register("last_name")}
              error={errors.last_name ? true : false}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.last_name?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <TextField
              sx={style}
              required
              id="email"
              name="email"
              fullWidth
              margin="dense"
              {...register("email")}
              error={errors.email ? true : false}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.email?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <FormControl fullWidth>
              <Select
                sx={{
                  border: `1px solid #d3d0d905`,
                  backgroundColor: `#ffffff`,
                  "&:hover": {
                    "&& fieldset": {
                      border: `1px solid #d3d0d9`,
                      boxShadow: `0px 0px 0px 2px #714dd950`
                    }
                  }
                }}
                name="gender"
                //   value={gender}
                {...register("gender")}
                labelId="gender"
                id="gender"
              >
                <MenuItem value={`Male`}>Male</MenuItem>
                <MenuItem value={`Female`}>Female</MenuItem>
                <MenuItem value={`Other`}>other</MenuItem>
              </Select>
            </FormControl>
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.gender?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <Controller
              name={"phone"}
              control={control}
              render={({ field }) => (
                <MuiPhoneNumber
                  sx={style}
                  id="phone"
                  name="phone"
                  required
                  fullWidth
                  variant="outlined"
                  defaultCountry={"ng"}
                  {...field}
                  error={errors.phone ? true : false}
                />
              )}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.phone?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="DOB">Date of Birth</InputLabel>
            <Controller
              name={"date_of_birth"}
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    // mask="__-__-____"
                    // inputFormat="dd-mm-yyyy"
                    renderInput={params => (
                      <TextField
                        sx={style}
                        fullWidth
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
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.DOB?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              sx={style}
              required
              id="password"
              name="password"
              type="password"
              fullWidth
              margin="dense"
              {...register("password")}
              error={errors.password ? true : false}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.password?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="password">Confirm Password</InputLabel>
            <TextField
              sx={style}
              required
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              fullWidth
              margin="dense"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
            />
            <Typography color={`red`} fontSize={`x-small`}>
              {errors.confirmPassword?.message}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  control={control}
                  name="acceptTerms"
                  defaultValue="false"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <Checkbox
                      sx={style}
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

            <Typography fontSize={`x-small`} color="red">
              {errors.acceptTerms ? "(" + errors.acceptTerms.message + ")" : ""}
            </Typography>
          </Grid>
        </Grid>

        <Box my={3}>
          <Button
            type="submit"
            disableElevation
            disabled={!formState.isValid}
            size="large"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
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
        </Box>
        <Stack textAlign={`center`} gap={1}>
          <Typography>
            Already have an account?,{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                marginLeft: "0.3rem",
                fontWeight: "700"
              }}
            >
              Sign In
            </Link>
          </Typography>

          <Box>
            <div></div>
            <span>Or continue with</span>
            <div></div>
          </Box>
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
            {/* <img src={facebook} alt="" /> */}
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default MySignUpForm;
