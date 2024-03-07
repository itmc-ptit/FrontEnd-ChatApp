import App from "./App";
import About from "./Pages/About";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import "./assets/css/index.css";
import Chat from "./Pages/Messenger";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<App />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
