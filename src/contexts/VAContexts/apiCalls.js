import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (VA, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "/va/login",
      VA
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
