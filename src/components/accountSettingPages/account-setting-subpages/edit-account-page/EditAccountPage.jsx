import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./EditAccountPage.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../../../../schemas/editProfileSchema";

function EditAccountPage() {
  let navigate = useNavigate();

  // action after submitting button
  const onSubmit = values => {
    console.log(values);
    navigate("/settings/profile");
  };

  // toggle password states
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "john@gmail.com",
        phoneNumber: "",
        password: "",
        password2: ""
      },
      validationSchema: basicSchema,
      onSubmit
    });

  return (
    <div className="edit_account_page">
      <div className="personal_info_edit">
        <div className="personal_info_title">
          <h2>Personal Information</h2>
        </div>
        <div className="personal_info_content">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="double_input">
              <div className="single_input">
                <label>
                  Full Name
                  <input
                    type="text"
                    onBlur={handleBlur}
                    value={values.fullName}
                    className={
                      errors.fullName && touched.fullName ? "input_error" : ""
                    }
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Joseph Anderson"
                    required
                  />
                </label>
                {errors.fullName && touched.fullName && (
                  <p className="error">{errors.fullName}</p>
                )}
              </div>
              <div className="single_input">
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    className={
                      errors.email && touched.email ? "input_error" : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="josephanderson@workmail.com"
                    disabled={true}
                    required
                  />
                </label>
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="double_input">
              <div className="single_input">
                <label>
                  Phone Number
                  <input
                    type="number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.phoneNumber && touched.phoneNumber
                        ? "input_error"
                        : ""
                    }
                    placeholder="+234 813 666 7878"
                    required
                  />
                </label>
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="error">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="single_input">
                <label>
                  Password
                  <input
                    type={passwordShown ? "text" : "password"}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.password && touched.password ? "input_error" : ""
                    }
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <AiOutlineEye
                    onClick={togglePassword1}
                    className={passwordShown ? "hideEye" : "showEye"}
                  />
                  <AiOutlineEyeInvisible
                    onClick={togglePassword1}
                    className={passwordShown ? "showEye" : "hideEye"}
                  />
                </label>
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="double_input">
              <div className="single_input">
                <label>
                  Confirm Password
                  <input
                    type={passwordShown2 ? "text" : "password"}
                    value={values.password2}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.password2 && touched.password2 ? "input_error" : ""
                    }
                    name="password2"
                    placeholder="Password"
                    required
                  />
                  <AiOutlineEye
                    onClick={togglePassword2}
                    className={passwordShown2 ? "hideEye2" : "showEye2"}
                  />
                  <AiOutlineEyeInvisible
                    onClick={togglePassword2}
                    className={passwordShown2 ? "showEye2" : "hideEye2"}
                  />
                </label>
                {errors.password2 && touched.password2 && (
                  <p className="error">{errors.password2}</p>
                )}
              </div>
              <div className="single_input"></div>
            </div>
            <button type="submit" className="pref_btn hover">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAccountPage;
