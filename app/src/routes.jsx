import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/RegisterPage/RegisterPage';
import Login from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/ForgetPasswordPage/ForgetPasswordPage';


const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/forgot_password' component={ForgotPassword} />
            </Switch>

        </Router >
    );
};

export default Routes;