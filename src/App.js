import { GlobalContext } from "./utils/Context";
import { ThemeProvider } from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Theme, GlobalStyle } from "./utils/themes";
// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
