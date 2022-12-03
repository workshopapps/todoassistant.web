import React from "react";
import style from "./ResetPasswordPage.module.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// validate email
const validateEmailSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
});

function ResetPasswordPage() {
  let navigate = useNavigate();

  // action after submitting button
  const onSubmit = (values) => {
    console.log(values);
    navigate("/resetpassword/checkmail", { state: { email: values.email } });
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: validateEmailSchema,
      onSubmit,
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
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
