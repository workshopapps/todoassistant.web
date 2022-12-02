const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        VA: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS":
      return {
        VA: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE":
      return {
        VA: null,
        isFetching: false,
        error: true
      };

    case "LOGOUT":
      return {
        VA: null,
        isFetching: false,
        error: false
      };

    default:
      return { ...state };
  }
};

export default AuthReducer;
