import * as Yup from "yup";

/* eslint-disable */

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password requires a minimum of 8 characters")
    .max(20, "Password ")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character e.g. [!, @, #, $, %, ^, &, *]"
    )
    .required("Password is required")
});
