import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from "./pages/RegisterPage/RegisterPage"
import ForgetPassword from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import Login from "./pages/LoginPage/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);