import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import LoginPage from "./components/account/Login";
import SignUpPage from "./components/account/SignUp";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/home/Home";
import PageNotFound from "./components/pages/PageNotFound";

import UserContext from "./auth/UserContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Events from "./components/pages/Events";
import Profile from "./components/pages/Profile";
import Test from "./components/pages/Test"

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="events" element={<Events />} />
                <Route path="test" element={<Test />} />
                <Route path="settings" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
