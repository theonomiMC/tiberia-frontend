import React, { createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

const initialState = {
  auth: JSON.parse(localStorage.getItem("auth")) || null,
};
export const AuthContext = createContext(initialState);
// const SERVER = 'http://localhost:5000'
const SERVER = "https://tiberia-server.herokuapp.com";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state.auth));
  }, [state.auth]);

  return (
    <AuthContext.Provider
      value={{
        auth: state.auth,
        success: state.success,
        dispatch,
        SERVER,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
