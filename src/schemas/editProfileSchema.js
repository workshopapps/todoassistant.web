import * as Yup from "yup";

/* eslint-disable */
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const basicSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too short!")
    .max(70, "Too Long!")
    .required("Full Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  phoneNumber: Yup.string()
    .min(8, "Phone number is short")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  password: Yup.string()
    .min(8, "Password requires a minimum of 8 characters")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character e.g. [!, @, #, $, %, ^, &, *]"
    )
    .required("Password is required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
});
