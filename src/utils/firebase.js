import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGhQ_dniE06MYkMZHrHpyiXzVnO3RF9mM",
  authDomain: "mini-student-dashboard-1f65a.firebaseapp.com",
  projectId: "mini-student-dashboard-1f65a",
  storageBucket: "mini-student-dashboard-1f65a.appspot.com",
  messagingSenderId: "608698980352",
  appId: "1:608698980352:web:d1a9d74e93d98413c7a0e5",
  measurementId: "G-GDQTEJ06F3",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
