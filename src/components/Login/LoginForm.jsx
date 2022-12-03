import { Visibility, VisibilityOff } from "@mui/icons-material";
import google from "../../assets/google.png";
import facebook from "../../assets/fb.png";
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
import React from "react";

const LoginForm = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container
      sx={{
        padding: { xs: `1.5rem`, md: `1.5rem 7rem` },
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

      <Stack gap={3} component="form" noValidate autoComplete="off">
        {/* email address */}
        <Stack>
          <InputLabel htmlFor="email-address">Email Address</InputLabel>
          <OutlinedInput
            sx={{ borderRadius: `8px` }}
            id="email-address"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
          />
        </Stack>
        {/* password */}
        <Stack>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            sx={{ borderRadius: `8px` }}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Stack>
        {/* forgot password text */}
        <Stack
          direction="row"
          alignItems={`center`}
          justifyContent={`space-between`}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: `#714DD9`,
                  "&.Mui-checked": {
                    color: `#714DD9`
                  }
                }}
                defaultChecked
              />
            }
            label="Remember me"
          />
          <Typography color={`#714DD9`}>Forgot Password ?</Typography>
        </Stack>
        {/* call to action btn */}
        <Stack>
          <Button
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
            alignItems={`center`}
            justifyContent={`center`}
            gap={1}
          >
            <Typography>Don't have an account ? </Typography>
            <Typography color="#714DD9" fontWeight={700}>
              Create Account
            </Typography>
          </Stack>
          {/* continue with */}
          <Stack
            direction={`row`}
            alignItems={`center`}
            justifyContent={`center`}
            gap={1}
          >
            <IconButton sx={{ width: `fit-content` }} color="secondary">
              <img src={google} alt="" />
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
