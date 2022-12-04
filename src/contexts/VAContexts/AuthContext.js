import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  VA: JSON.parse(localStorage.getItem("VA")) || null, //if the user had logged in before, the initial state when he comes back to the website will be the "user" jwt already stored in browser. Else, if he hadn't logged in, it'll be null.
  isFetching: false,
  error: false
};

export const VAAuthContext = createContext(INITIAL_STATE);

export const VAAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //storing the user object in the browser whenever it's generated after login
  useEffect(() => {
    localStorage.setItem("VA", JSON.stringify(state.VA));
  }, [state.VA]);

  return (
    <VAAuthContext.Provider
      value={{
        VA: state.VA,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </VAAuthContext.Provider>
  );
};
