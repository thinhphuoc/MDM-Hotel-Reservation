import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const [login, setLogIn] = useState(false);
  return (
    <StateContext.Provider
      value={{ login, setLogIn }}
    >
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
