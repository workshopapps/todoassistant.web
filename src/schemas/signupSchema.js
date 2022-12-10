import * as Yup from "yup";

/* eslint-disable */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const signupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too short!")
    .max(70, "Too Long!")
    .required("First Name is required"),
  last_name: Yup.string()
    .min(2, "Too short!")
    .max(70, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  phone: Yup.string()
    .min(8, "Phone number is short")
    // .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  gender: Yup.string().required(
    "Gender is required - Choose between Male or Female"
  ),
  date_of_birth: Yup.string().required("Date of Birth is required"),
  password: Yup.string()
    .min(8, "Password requires a minimum of 8 characters")
    .max(20, "Password ")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character e.g. [!, @, #, $, %, ^, &, *]"
    )
    .required("Password is required")
});
