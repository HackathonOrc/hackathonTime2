import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/ForgetPasswordPage/ForgetPasswordPage';


const Routes = () => {

    return (
        
        <Router>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/forgetpassword' component={ForgotPassword} />
            </Switch>

        </Router >
    );
};

export default Routes;