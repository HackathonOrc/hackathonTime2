import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from "./pages/MainPage/MainPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);
