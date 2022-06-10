import { GlobalContext } from "./utils/Context";
import { ThemeProvider } from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Theme, GlobalStyle } from "./utils/themes";
// pages folder
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
// component folder
import DashboardIndex from "./components/DashboardIndex";
function App() {
  const { appState } = GlobalContext();
  const { theme } = appState;
  let appTheme;
  if (theme) {
    appTheme = Theme.Light;
  } else {
    appTheme = Theme.Dark;
  }
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardIndex />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:param" element={<SingleCourse />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
