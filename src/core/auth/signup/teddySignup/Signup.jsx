import React, { useState } from "react";
import style from "./Signup.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { signupSchema } from "../../schemas/signupSchema";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import styled from "styled-components/macro";

// styled components for PhoneInput
const Phone = styled(PhoneInput)`
  .flag-dropdown {
    background: inherit;
    width: 50px;
    padding-left: 7px;
    height: 45px;
    top: 1px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    &:hover {
      background: inherit;
    }
  }
  .flag-dropdown.open {
    background: inherit;
  }
  #phone-input {
    padding-left: 50px;
    height: 100%;
    width: 100%;
    input {
      border: 1px solid red;
    }
  }
`;

function Signup() {
  // toggle password states
  const [passwordShown, setPasswordShown] = useState(false);

  const [checkState, setCheckState] = useState(false);
  // toggle button type
  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  // can edit and put submit function here
  const onSubmit = values => {
    console.log(values);
    // while  finding request
    setIsSubmitting(true);
    // after finding request
    setIsSubmitting(false);
  };
  // change state terms of service and privacy policy
  const changeState = () => {
    setCheckState(!checkState);
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        date_of_birth: "",
        password: ""
      },
      validationSchema: signupSchema,
      onSubmit
    });

  return (
    <div>
      <>
        <div className={style.signup_pg}>
          <div className={style.content_cont}>
            <div className={style.reset_header}>
              <img src="images/reset_logo.jpg" alt="" />
            </div>
            <div className={style.newpsw_page_cont}>
              <h2>Create Account</h2>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className={style.rsp_input_field}>
                  {/* Label and input for first name */}
                  <label htmlFor="first_name">
                    First Name
                    <input
                      type="text"
                      name="first_name"
                      value={values.first_name}
                      className={
                        errors.first_name && touched.first_name
                          ? style.input_error
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter First Name"
                      required
                    />
                  </label>
                  {errors.first_name && touched.first_name && (
                    <span className={style.error}>{errors.first_name}</span>
                  )}
                </div>
                {/* input and label for last name */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="last_name">
                    Last Name
                    <input
                      type="text"
                      name="last_name"
                      value={values.last_name}
                      className={
                        errors.last_name && touched.last_name
                          ? style.input_error
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Last Name"
                      required
                    />
                  </label>
                  {errors.last_name && touched.last_name && (
                    <span className={style.error}>{errors.last_name}</span>
                  )}
                </div>
                {/* input and label for email */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="email">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      className={
                        errors.email && touched.email ? style.input_error : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Email Address"
                      required
                    />
                  </label>
                  {errors.email && touched.email && (
                    <span className={style.error}>{errors.email}</span>
                  )}
                </div>
                {/* input and label for gender */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="gender">
                    Gender
                    <select
                      name="gender"
                      value={values.gender}
                      className={
                        errors.gender && touched.gender ? style.input_error : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </label>
                  {errors.gender && touched.gender && (
                    <span className={style.error}>{errors.gender}</span>
                  )}
                </div>

                {/* Input and label for phone number */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="phone">
                    Phone Number
                    <Phone
                      className={
                        errors.phone && touched.phone ? "input_error" : ""
                      }
                      international
                      country={"ng"}
                      placeholder="Enter phone number"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      inputProps={{
                        id: "phone-input",
                        class: "input_error"
                      }}
                      searchClass={{
                        class: "flag-dropdown flag-dropdown.open"
                      }}
                      required
                    />
                  </label>
                  {errors.phone && touched.phone && (
                    <span className={style.error}>{errors.phone}</span>
                  )}
                </div>

                {/* input and label for date_of_birth */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="date_of_birth">
                    Date of Birth
                    <input
                      type="date"
                      name="date_of_birth"
                      value={values.date_of_birth}
                      className={
                        errors.date_of_birth && touched.date_of_birth
                          ? style.input_error
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Date of Birth"
                      required
                    />
                  </label>
                  {errors.date_of_birth && touched.date_of_birth && (
                    <span className={style.error}>{errors.date_of_birth}</span>
                  )}
                </div>

                {/* input and label for password */}
                <div className={style.rsp_input_field}>
                  <label>
                    Password
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      value={values.password}
                      className={
                        errors.password && touched.password
                          ? style.input_error
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter password"
                      required
                    />
                    <AiOutlineEye
                      onClick={togglePassword1}
                      className={passwordShown ? style.hideEye : style.showEye}
                    />
                    <AiOutlineEyeInvisible
                      onClick={togglePassword1}
                      className={passwordShown ? style.showEye : style.hideEye}
                    />
                  </label>
                  {errors.password && touched.password && (
                    <span className={style.error}>{errors.password}</span>
                  )}
                </div>

                <div className={style.checkbox_field}>
                  <label className={style.checkbox_input} htmlFor="terms">
                    <input
                      name="terms"
                      type="checkbox"
                      value={checkState}
                      onChange={changeState}
                      id="checkbox"
                      required
                    />
                    <p name="terms">
                      By signing up, you agree to the{" "}
                      <Link to="">Terms of Service and Privacy Policy</Link>
                    </p>
                  </label>
                </div>

                {/* signup button */}
                {isSubmitting ? (
                  <button className={style.btn_npsw} disabled={true}>
                    Signing Up...
                  </button>
                ) : (
                  <button
                    className={style.btn_npsw}
                    disabled={!checkState}
                    type="submit"
                  >
                    Sign Up
                  </button>
                )}
              </form>
              <div className={style.switch}>
                <p>Already have an account?</p>
                <Link>Sign In</Link>
              </div>

              <hr />
              <p className={style.or_ctn_with}>Or continue with</p>
              <div className={style.social_media_icons}>
                <img
                  src={google}
                  alt="google icon"
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={fb}
                  alt="facebook icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div className={style.img_flow}>
            <img src="images/signin-svg.svg" alt="" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Signup;
