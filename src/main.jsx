import "./assets/css/index.css";
import ForgotPassword from "./Pages/ForgotPassword";
import PageNotFound from "./Pages/404";
import UI from "./Pages/Register";
import Profile from "./Pages/profile";
import React from "react";
import About from "./Pages/About";
import Chat from "./Pages/Messenger";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

export const IsLogin = false;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<App />} />
        <Route path="/sign-up" element={<UI />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
