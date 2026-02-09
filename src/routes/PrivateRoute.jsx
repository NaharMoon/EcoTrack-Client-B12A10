import React, { Children, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation, } from 'react-router';
import LoadingPage from '../pages/LoadingPage';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    console.log({user,loading});

    if(loading){
        return <LoadingPage></LoadingPage>;
    }
    else if (!user) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
    }
    else {
        return children;
    };
};

export default PrivateRoute;