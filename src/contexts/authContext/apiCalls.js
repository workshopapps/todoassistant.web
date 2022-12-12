import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://api.ticked.hng.tech/api/v1/user/login",
      user
    );
    dispatch(loginSuccess(res.data));

    console.log(res.data, "This is login");
  } catch (err) {
    console.log(err, "This is login err");
    dispatch(loginFailure(err.response.data.error.error));
  }
};
