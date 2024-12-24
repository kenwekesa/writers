// AuthContext.js
// "use client";
// import React, { createContext, useEffect, useReducer } from "react";
// import { reducer } from "./ChatsReducer";

// export const ChatContext = createContext();

// const initialState = {
//   chatId: null,
//   chat: {},
//   other_user: {},
// };

// export const ChatProvider = ({ children }) => {
//   const [data, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     // localStorage.setItem("user", JSON.stringify(state.user))
//   }, []);
//   return (
//     <ChatContext.Provider value={{ data, dispatch }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./ChatsReducer";

export const ChatContext = createContext();

const initialState = {
  chatId: null,
  chat: {},
  other_user: {},
};

export const ChatProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Add logic to retrieve chat data from localStorage if needed
    const storedChat = localStorage.getItem("chat");
    if (storedChat) {
      dispatch({ type: "SET_CHAT", payload: JSON.parse(storedChat) });
    }
  }, []);

  useEffect(() => {
    if (isClient && data.chat) {
      localStorage.setItem("chat", JSON.stringify(data.chat));
    }
  }, [data.chat, isClient]);

  return (
    <ChatContext.Provider value={{ data, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
