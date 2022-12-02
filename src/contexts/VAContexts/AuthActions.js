export const loginStart = () => ({
  type: "LOGIN_START"
});
export const loginSuccess = VA => ({
  type: "LOGIN_SUCCESS",
  payload: VA
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE"
});

//logout

export const logout = () => ({
  type: "LOGOUT"
});
