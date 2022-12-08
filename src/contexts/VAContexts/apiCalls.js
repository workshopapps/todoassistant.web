import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

const header = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export const login = async (VA, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://api.ticked.hng.tech/api/v1/va/login",
      VA,
      header
    );

    dispatch(loginSuccess(res.data));
    localStorage.setItem("VA", JSON.stringify(res.data));
    location.replace("/virtual-assistance");
  } catch (err) {
    dispatch(loginFailure());
  }
};
