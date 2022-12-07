export const loginStart = () => ({
  type: "LOGIN_START"
});
export const loginSuccess = user => ({
  type: "LOGIN_SUCCESS",
  payload: user
});
export const loginFailure = errMessage => ({
  type: "LOGIN_FAILURE",
  payload: errMessage
});

//logout

export const logout = () => ({
  type: "LOGOUT"
});
