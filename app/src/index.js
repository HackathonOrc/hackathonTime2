import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from "./pages/RegisterPage/RegisterPage";
import { UserProvider } from "./context/userContext"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Register />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
