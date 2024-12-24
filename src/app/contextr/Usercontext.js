// AuthContext.js
// "use client";
// import React, { createContext, useEffect, useReducer } from "react";
// import { reducer } from "./Userreducer";

// export const Usercontext = createContext();

// const initialState = {
//   isAuthenticated: false,
//   user: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//   }, [state.user]);
//   return (
//     <Usercontext.Provider value={{ state, dispatch }}>
//       {children}
//     </Usercontext.Provider>
//   );
// };

"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Userreducer";

export const Usercontext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null, // Default to null until localStorage is checked on the client
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "SET_USER", payload: JSON.parse(storedUser) });
    }
  }, []);

  useEffect(() => {
    if (isClient && state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user, isClient]);

  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      {children}
    </Usercontext.Provider>
  );
};
