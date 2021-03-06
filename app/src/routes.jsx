import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgetPasswordPage";
import RecoverPassword from "./pages/RecoverPassword";
import validate from "./services/validateSender";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgetpassword" component={ForgotPassword} />
        <Route path="/recover/:userName/:token" component={RecoverPassword} />
        <Route path="/recover/" component={RecoverPassword} />
        <Route path="/validate/:userName/:token" component={validate} />
        <Route path="/validate/" component={validate} />
      </Switch>
    </Router>
  );
};

export default Routes;
