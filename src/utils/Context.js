import React from "react";
import { useReducer, useContext } from "react";
const Context = React.createContext();
const reducer = (state, action) => {
  if (action.type === "THEME") {
    return { ...state, theme: !state.theme };
  }
};
const initialState = {
  theme: true, // true for light theme and false for dark theme
};
const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ appState, dispatch }}>
      {children}
    </Context.Provider>
  );
};
const GlobalContext = () => {
  return useContext(Context);
};

export { AppContextProvider, GlobalContext };
