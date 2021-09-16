import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    isSignIn,
} from '../States/userSlice';
import {
  // cognitoUserInfo,
  userLoginCheck
} from '../States/cognitoSlice';

const UserStatusCheck = createContext({});

const UserStatusProvider = ({ children }) => {
  const userIsSignIn = useSelector(isSignIn)
  // Check user status when page refresh.
  const dispatch = useDispatch();
  dispatch(userLoginCheck());
  // console.log('userIsSignIn--->', userIsSignIn)
    return (
        <UserStatusCheck.Provider >
            {children}
        </UserStatusCheck.Provider>
    );
};

export default UserStatusProvider;