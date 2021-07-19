import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
