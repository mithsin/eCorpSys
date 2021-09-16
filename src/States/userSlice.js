import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
    name: 'userState',
    initialState: {
        userName: '',
        eMail: '',
        date: '',
        isSignIn: false
    },
    reducers: {
        setLoginInitialState: (state, action) => {
            return {...state, ...action.payload}
        },
        setIsSignInState: (state, action) => {
            state.isSignIn = action.payload;
        },
        setEnterCredentials: (state, action) => {
            state.noCredentials = action.payload;
        },
        setUerName: (state, action) => {
            state.userName = action.payload;
        }
    },
});
 
export const {
    setEnterCredentials, setIsSignInState, setLoginInitialState, setUerName
} = userSlice.actions;

export const updateUserInitState = ( userName, idToken ) => dispatch => {

    const params = {
        username: userName,
        idtoken: idToken
    };
    axios.post(`/api/getuserdata/`, params).then(res => {
        dispatch(setLoginInitialState({...res.data}));
    });
}

export const userData = state => state.userState;
export const userName = state => state.userState.userName;
export const eMail = state => state.userState.eMail;
export const date = state => state.userState.date;
export const noCredentials = state => state.userState.noCredentials;
export const isSignIn = state => state.userState.isSignIn;

export default userSlice.reducer;