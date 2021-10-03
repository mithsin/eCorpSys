import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import cognitoReducer from 'States/cognitoSlice';
import projectReducer from 'States/projectSlice';

export default configureStore({
    reducer: {
        cognitoState: cognitoReducer,
        userState: userReducer,
        projectState: projectReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});