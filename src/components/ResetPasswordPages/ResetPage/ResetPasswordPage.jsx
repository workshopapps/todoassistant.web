import React from "react";
import style from "./ResetPasswordPage.module.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const base_url = "https://api.ticked.hng.tech/api/v1";

// validate email
const validateEmailSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required")
});

function ResetPasswordPage() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  // toast message displayed when user does not exist
  /* eslint-disable */
  const showToastMessage = () => {
    toast.error("User does not exist", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition: Slide,
      draggable: false,
      closeButton: false,
      className: style.toast_classname
    });
  };

  // action after submitting button
  const onSubmit = async values => {
    const data = { email: values.email };
    setIsLoading(true);
    try {
      await Axios.post(base_url + "/user/reset-password", data).then(res => {
        console.log(res.data.data);
        localStorage.setItem("userId", res.data.data.user_id);
        localStorage.setItem("token", res.data.data.token);
        setIsLoading(false);
        navigate("/resetpassword/checkmail", {
          state: {
            email: values.email
          }
        });
      });
    } catch (res) {
      showToastMessage();
      setIsLoading(false);
    }
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: ""
      },
      validationSchema: validateEmailSchema,
      onSubmit
    });

  return (
    <div className={style.reset_psw_cont}>
      <h2>Reset Password</h2>
      <p>
        Enter the email registered with your account and we’ll send an email
        with instructions to reset your password.
      </p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className={style.rsp_input_field}>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={values.email}
              className={errors.email && touched.email ? style.input_error : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Input email"
              required
            />
          </label>
          {errors.email && touched.email && (
            <span className={style.error}>{errors.email}</span>
          )}
        </div>
        {isLoading ? (
          <button disabled={true}>Wait please...</button>
        ) : (
          <button type="submit">Continue</button>
        )}
      </form>
    </div>
  );
}

export default ResetPasswordPage;
