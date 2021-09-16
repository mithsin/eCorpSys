import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { userLogin, userLogout } from 'States/cognitoSlice';
import { useDispatch } from 'react-redux';
import './styles.scss';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [authInput, setAuthInput] = useState({});
    
    const LoginSubmit = () => {
        dispatch(userLogin({...authInput, history}))
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
            placeholder: "User Account e-mail"
        },
        {
            type: "password",
            name: "password", 
            placeholder: "Password"
        }
    ];
    
    return(
        <div className="outter-block">
            <div className="inner-block">
                <h2>Login</h2>
                <div className="form-container">
                    {
                        inputSettings.map((inputSetting)=>
                            <input key={inputSetting.name} { ...inputSetting } onChange={ formInputChange } />
                        )
                    }
                    <button className="authButton" onClick={ LoginSubmit }>submit</button>
                </div>
                <button className="authButton" onClick={()=> dispatch(userLogout({history}))}>Logout</button>
            </div>
        </div>
    )
}

export default Login;
