import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import cognitoReducer from 'States/cognitoSlice';
import linkUserReducer from 'States/linkUserSlice';
import projectReducer from 'States/projectSlice';

export default configureStore({
    reducer: {
        cognitoState: cognitoReducer,
        linkCardState: linkUserReducer,
        userState: userReducer,
        projectState: projectReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});