import React from 'react';
import './Login.scss'
import LoginBottom from './LoginBottom';
import LoginForm from './LoginForm';


const Login = () =>{

    return(

        <div className="Login_page">
            <LoginForm />
            <LoginBottom/>   
        </div>
    )
};

export default Login