import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  isSignIn
} from './States/userSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userSignIn = useSelector(isSignIn);
  // console.log("userSignIn: ", userSignIn)
  return (
    <Route {...rest} render={(props) => (
      userSignIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
};

export default PrivateRoute;