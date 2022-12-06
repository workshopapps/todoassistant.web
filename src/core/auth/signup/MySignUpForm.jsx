import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AuthContext } from "../../../contexts/authContext/AuthContext";
// import { gapi } from "gapi-script";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { login } from "../../../contexts/VAContexts/apiCalls";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      gender: "",
      select: {}
    },
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            Create Account
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="first_name">First Name</InputLabel>
              <TextField
                required
                id="first_name"
                name="first_name"
                fullWidth
                margin="dense"
                {...register("first_name")}
                error={errors.first_name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.first_name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <TextField
                required
                id="last_name"
                name="last_name"
                fullWidth
                margin="dense"
                {...register("last_name")}
                error={errors.last_name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.last_name?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <TextField
                required
                id="email"
                name="email"
                fullWidth
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <FormControl fullWidth>
                <Select
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
              <Typography variant="inherit" color="textSecondary">
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
              <Typography color={`red`} fontSize={`small`}>
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
              <Typography color={`red`} fontSize={`small`}>
                {errors.DOB?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                required
                id="password"
                name="password"
                type="password"
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                fullWidth
                margin="dense"
                {...register("confirmPassword")}
                error={errors.confirmPassword ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
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
                {errors.acceptTerms
                  ? "(" + errors.acceptTerms.message + ")"
                  : ""}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default MySignUpForm;
