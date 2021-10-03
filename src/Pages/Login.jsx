import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom'
import { userLogin, userLogout } from 'States/cognitoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MuiButton, MuiInputField } from 'Components/MUI';
import { isSignIn } from 'States/userSlice';

import styles from './login.module.scss';

const Login = () => {
    const userSignIn = useSelector(isSignIn);
    const history = useHistory();
    const dispatch = useDispatch();
    const [authInput, setAuthInput] = useState({});
    const [inputErrorMessage, setInputErrorMessage] = useState('');

    useEffect(()=>{
        (userSignIn === true) && (history.push("/"));
    },[userSignIn]);
    const LoginSubmitKeyPress = (e) => {
        if(e.keyCode === 13 || e.charCode === 13 ||  e.key === 'Enter'){
            e.preventDefault();
            (authInput.userName && authInput.password) && dispatch(userLogin({...authInput, history}));
            (!authInput.userName || !authInput.password) 
                ? setInputErrorMessage('FILL IN MISSING INPUT FIELD') 
                : setInputErrorMessage('');
        }
    }
    const LoginSubmit = () => {
        (authInput.userName && authInput.password) && dispatch(userLogin({...authInput, history}));
        (!authInput.userName || !authInput.password) 
            ? setInputErrorMessage('FILL IN MISSING INPUT FIELD') 
            : setInputErrorMessage('');
    };

    // store all input changes
    const formInputChange = (e) => {
        const inputValue = (
            ((e.target.name === 'number') && parseInt(e.target.value)) || 
            ((e.target.name === 'userName') && e.target.value.toLowerCase()) ||
            e.target.value
        );

        setAuthInput({ 
            ...authInput, 
            [e.target.name] : inputValue
        })
    };

    const inputSettings = [
        {
            type: "text",
            name: "userName", 
            label: "E-Mail",
            required: true,
            props: {
                margin: "0 0 .5rem 0"
            }
        },{
            type: "password",
            name: "password", 
            label: "password",
            required: true,
            props: {
                margin: "0 0 .5rem 0"
            }
        }
    ];
    
    return(
        <div className={styles.outterblock}>
            <div className={styles.innerblock}>
                {inputErrorMessage && <div>{inputErrorMessage}</div>}
                <div className={styles.formWrapper}>
                    {
                        inputSettings.map((inputSetting)=> 
                            <MuiInputField 
                                key={inputSetting.name} 
                                { ...inputSetting } 
                                onChange={ formInputChange } 
                                onKeyPress={ LoginSubmitKeyPress }/>
                        )
                    }
                    <MuiButton 
                        label="LOGIN"
                        props={{
                            color: "black",
                            bgColor: "#3f51b5",
                            boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                            hColor: "white",
                            hbgColor: "#6495ED"
                        }}
                        onClick={LoginSubmit} />
                    <MuiButton
                        label="LOGOUT"
                        props={{
                            color: "black",
                            bgColor: "#cf142b",
                            boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                            hColor: "white",
                            hbgColor: "#DC143C"
                        }}
                        onClick={ ()=> dispatch(userLogout({history})) } />
                </div>
            </div>
        </div>
    )
}

export default Login;
