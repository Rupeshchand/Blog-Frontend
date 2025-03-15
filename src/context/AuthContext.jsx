import React, { createContext, useEffect, useReducer } from "react";
//creating initial state for storing it in localstorage so i gathered these info
const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        role: action.role,
        token: action.token,
      };
    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};
export const AuthContext = createContext(initialState);
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
    localStorage.setItem("role", state.user)
    localStorage.setItem("token", state.token)
  },[state])
  return (
    <AuthContext.Provider value={{dispatch, user: state.user}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
