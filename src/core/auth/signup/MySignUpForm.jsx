import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AuthContext } from "../../../contexts/authContext/AuthContext";
// import { gapi } from "gapi-script";
import axios from "axios";
// import { login } from "../../../contexts/VAContexts/apiCalls";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useContext } from "react";

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

const MySignUpForm = () => {
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
  //   const { dispatch } = useContext(AuthContext);
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
    console.log(data.email);
    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/user",
        data
      );
      console.log(response);
      //   login({ data.email, data.password }, dispatch);
    } catch (err) {
      console.log(err);
    }
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
                <MenuItem value={`male`}>Male</MenuItem>
                <MenuItem value={`female`}>Female</MenuItem>
                <MenuItem value={`other`}>other</MenuItem>
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
      </Box>
    </Container>
  );
};

export default MySignUpForm;
