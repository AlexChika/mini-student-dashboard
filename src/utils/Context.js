import React, { useReducer, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Context = React.createContext();
const reducer = (state, action) => {
  if (action.type === "THEME") {
    return { ...state, theme: !state.theme };
  }
  if (action.type === "SET_USER") {
    const user = action.payload;
    return { ...state, currentUser: user };
  }
  if (action.type === "NO_USER") {
    return { ...state, currentUser: "" };
  }
  return state;
};
//
const initialState = {
  theme: true, // true for light theme and false for dark theme(dark theme not implemented yet)
  currentUser: "",
};
const AppContextProvider = ({ children }) => {
  // fire base
  const firebaseConfig = {
    apiKey: "AIzaSyCGhQ_dniE06MYkMZHrHpyiXzVnO3RF9mM",
    authDomain: "mini-student-dashboard-1f65a.firebaseapp.com",
    projectId: "mini-student-dashboard-1f65a",
    storageBucket: "mini-student-dashboard-1f65a.appspot.com",
    messagingSenderId: "608698980352",
    appId: "1:608698980352:web:d1a9d74e93d98413c7a0e5",
    measurementId: "G-GDQTEJ06F3",
  };
  const app = initializeApp(firebaseConfig); //app
  const auth = getAuth(app); //auth
  const [appState, dispatch] = useReducer(reducer, initialState);
  const provider = new GoogleAuthProvider();
  // functions ...
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      }
    });

    return unsubscribe;
  }, []);
  return (
    <Context.Provider
      value={{ appState, dispatch, logout, auth, login, signup, googleSignin }}
    >
      {children}
    </Context.Provider>
  );
};
const GlobalContext = () => {
  return useContext(Context);
};

export { AppContextProvider, GlobalContext };
