import React, { useState, useEffect } from "react";
import style from "./NewPasswordPage.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import Modal from "../ModalSuccessReset/ModalSuccessReset";
import * as Yup from "yup";
import axios from "axios";
import imgval from "../../../assets/assets/red-alert-exclamation.png";
import closebtn from "../../../assets/assets/ios-close-5.png";
const base_url = "https://api.ticked.hng.tech/api/v1";

/* eslint-disable */
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

// validate email
const validatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password requires a minimum of 8 characters")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character e.g. [!, @, #, $, %, ^, &, *]"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
});

function NewPasswordPage() {
  const [isFetching, setIsFetching] = useState(false);

  // get token from the header
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const [err, setErr] = useState(null);

  const [userId, setUserId] = useState("");
  // get userid from the header
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  // open and close modal
  const [openModal, setOpenModal] = useState(false);
  if (openModal) {
    document.body.classList.add("active_modal");
  } else {
    document.body.classList.remove("active_modal");
  }

  //   let navigate = useNavigate();

  // action after submitting button
  const onSubmit = async values => {
    const data = { password: values.password };
    setIsFetching(true);
    try {
      await axios
        .post(
          `${base_url}/user/reset-password-token?token=${token}&user_id=${userId}`,
          data
        )
        .then(res => {
          console.log(res);
          setIsFetching(false);
          setOpenModal(true);
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        });
    } catch (e) {
      setErr(e.response.data.error.error);
      setIsFetching(false);
      // if (e.response.data.code === 403) {
      //   console.log("Token expired!");
      //   alert("Token expired");
      // } else if (e.response.data.code === 500) {
      //   console.log("Axios error request");
      // }
    }
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
        password: "",
        confirmpassword: ""
      },
      validationSchema: validatePasswordSchema,
      onSubmit
    });

  return (
    <div className={style.newpsw_page_cont}>
      <h2>New Password</h2>
      <p>
        Your password should be at least 9 characters of lower case and upper
        case.
      </p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {err && (
          <div className={style.disp_err}>
            <div>
              <img src={imgval} alt="Alert Icon" />
              <p>{err}</p>
            </div>
            <div
              className={style.close_btn}
              onClick={() => {
                setErr(null);
              }}
            >
              <img src={closebtn} alt="Close Icon" />
            </div>
          </div>
        )}
        <div className={style.rsp_input_field}>
          <label htmlFor="password">
            New Password
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              value={values.password}
              className={
                errors.password && touched.password ? style.input_error : ""
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
        <div className={style.rsp_input_field}>
          <label htmlFor="confirmpassword">
            Confirm Password
            <input
              type={passwordShown2 ? "text" : "password"}
              name="confirmpassword"
              value={values.confirmpassword}
              className={
                errors.confirmpassword && touched.confirmpassword
                  ? style.input_error
                  : ""
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm password"
              required
            />
            <AiOutlineEye
              onClick={togglePassword2}
              className={passwordShown2 ? style.hideEye2 : style.showEye2}
            />
            <AiOutlineEyeInvisible
              onClick={togglePassword2}
              className={passwordShown2 ? style.showEye2 : style.hideEye2}
            />
          </label>
          {errors.confirmpassword && touched.confirmpassword && (
            <span className={style.error}>{errors.confirmpassword}</span>
          )}
        </div>
        {isFetching ? (
          <button className={style.btn_npsw} disabled={true}>
            Wait please...
          </button>
        ) : (
          <button className={style.btn_npsw} type="submit">
            Continue
          </button>
        )}

        <Modal
          openState={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      </form>
    </div>
  );
}

export default NewPasswordPage;
